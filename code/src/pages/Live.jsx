import React, { Component } from 'react';

import io from 'socket.io-client';

import {
    Header,
    Footer,
    ScaleBar,
    Tab,
    View3DContainer,
    View3DElements,
    DataPanel,
} from '../components';

import { View3D } from '../utils';

class LivePage extends Component {
    constructor(props) {
        super(props);

        if (!localStorage.getItem('token')) {
            window.location.href = '/auth';
        }
        this.token = localStorage.getItem('token');

        // peux mettre "IUT" ou "BuildingB.Building" ou "BuildingB.Floor0" ou "BuildingB.Floor1" ou "BuildingB.Floor2"
        this.state = {
            location: 'IUT',
            locationHistory: ['IUT'],
            selectedSensorParam: null,
            selectedLocation: null,
        };

        this.selectSensorParam = this.selectSensorParam.bind(this);
        this.selectLocation = this.selectLocation.bind(this);
    }

    componentDidMount() {
        fetch('/api/get-data/date/@latest', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.token,
            },
        })
            .then((response) => {
                if (response.status !== 200) {
                    window.location.href = `/error?msg=HTTTP error ${response.status}`;
                }
                return response.json();
            })
            .then((data) => {
                this.setState({ data });
                const socket = io();
                socket.on('mqtt', (dataChanges) => {
                    const { data: newData } = this.state;
                    const sensor = newData.find(
                        (e) => e.sensorId === dataChanges.sensorId
                    );
                    Object.entries(dataChanges).forEach(([key, value]) => {
                        sensor[key] = value;
                    });
                    this.setState({ data: newData });
                });
            })
            .catch((err) => {
                window.location.href = `/error?msg=${err}`;
            });
    }

    selectLocation(e) {
        const id = e.currentTarget.id || null;
        this.setState({ selectedLocation: id });
    }

    selectSensorParam(e) {
        this.setState({ selectedSensorParam: e.target.value });
    }

    render() {
        const {
            data,
            location,
            locationHistory,
            selectedSensorParam,
            selectedLocation,
        } = this.state;

        const CurrentView3D = View3D.getLocationComponentRecursively(
            location,
            View3DElements
        );

        return (
            <>
                {/* HEADER */}
                <Header />

                {/* LIVE */}
                <main className="w-full h-[calc(100vh-96px)]">
                    {/* ONGLETS */}
                    <div className="flex justify-center grid grid-cols-11 text-center sticky top-14">
                        <Tab
                            icon={
                                <span className="material-icons text-[red] animate-pulse">
                                    fiber_manual_record
                                </span>
                            }
                            text="Live"
                            link="#"
                            className="grid-span-1 col-start-1"
                            isActive
                        />
                        <Tab
                            icon={
                                <span className="material-icons-outlined">
                                    timer
                                </span>
                            }
                            text="Historique"
                            link="/history"
                            className="grid-span-1 col-start-2"
                        />
                    </div>

                    {/* TITRE */}
                    <div id="title_container" className="text-center mt-5">
                        <h1 className="font-bold text-4xl mb-3">
                            Visionnage en temps réel
                        </h1>
                        <h3 className="font-bold">
                            Cliquez sur un batîment pour afficher les détails
                        </h3>
                    </div>

                    <div className="grid grid-cols-7 mt-3">
                        {/* BUTTON RETOUR */}
                        {location !== 'IUT' && (
                            <div className="col-span-1 content-center text-center">
                                <button
                                    type="button"
                                    onClick={() => {
                                        const newLocationHistory = [
                                            ...locationHistory,
                                        ];
                                        newLocationHistory.pop();
                                        this.setState({
                                            location: newLocationHistory.at(-1),
                                            locationHistory: newLocationHistory,
                                            selectedLocation: null,
                                        });
                                    }}
                                    className="material-icons rounded-full border-4 text-5xl"
                                >
                                    arrow_back
                                </button>
                            </div>
                        )}

                        {/* CHOIX DU TYPE DE DONNEES */}
                        <div className="col-span-2 col-end-8 content-center">
                            <div className="grid grid-cols-6">
                                <ScaleBar
                                    className="col-span-3 col-start-2 col-end-6"
                                    selectedSensorParam={
                                        View3D.sensorParams[selectedSensorParam]
                                    }
                                />
                                <select
                                    className="mt-2 col-span-2 col-start-3 col-end-5 text-sm"
                                    onChange={this.selectSensorParam}
                                >
                                    <option
                                        className="text-center"
                                        selected
                                        disabled
                                    >
                                        -- Choisir --
                                    </option>
                                    <option value="temperature">
                                        Température
                                    </option>
                                    <option value="humidity">Humidité</option>
                                    <option value="co2">CO2</option>
                                    <option value="batteryLevel">
                                        Batterie
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* AFFICHAGE 3D */}
                        <View3DContainer
                            id={location}
                            data={data}
                            sensorParam={selectedSensorParam}
                            stroke="#000000"
                            defaultFill="#838383"
                            viewNavigation={(e) => {
                                const id = e.currentTarget.id || null;
                                if (id) {
                                    const newLocationHistory = [
                                        ...locationHistory,
                                        id,
                                    ];
                                    this.setState({
                                        location: id,
                                        locationHistory: newLocationHistory,
                                    });
                                }
                            }}
                            selectLocation={this.selectLocation}
                            className="col-span-7 col-end-8"
                        >
                            {React.isValidElement(<CurrentView3D />) && (
                                <CurrentView3D />
                            )}
                        </View3DContainer>
                    </div>

                    {/* PANEL D'AFFICHAGE DES DONNEES */}
                    <DataPanel
                        className="justify-center mx-[auto] mb-10"
                        data={data}
                        selectedLocation={selectedLocation}
                    />
                </main>

                {/* FOOTER */}
                <Footer />
            </>
        );
    }
}

export default LivePage;
