import React, { Component } from 'react';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

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

class HistoryPage extends Component {
    constructor(props) {
        super(props);

        if (!localStorage.getItem('token')) {
            window.location.href = '/auth';
        }
        this.token = localStorage.getItem('token');

        const today = new Date();
        const month = today.getMonth() + 1;

        this.todayDate = `${today.getFullYear()}-${
            month < 10 ? `0${month}` : month
        }-${today.getDate()}`;

        // const yesterdayDate = `${today.getFullYear()}-${
        //     month < 10 ? `0${month}` : month
        // }-${today.getDate() - 1}`;

        // peux mettre "IUT" ou "BuildingB.Building" ou "BuildingB.Floor0" ou "BuildingB.Floor1" ou "BuildingB.Floor2"
        this.state = {
            location: 'IUT',
            locationHistory: ['IUT'],
            selectedSensorParam: null,
            selectedLocation: null,
            selectedDate: this.todayDate,
            selectedTime: null,
        };

        this.selectSensorParam = this.selectSensorParam.bind(this);
        this.selectLocation = this.selectLocation.bind(this);

        this.changeDate = this.changeDate.bind(this);
        this.changeTime = this.changeTime.bind(this);
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
            })
            .catch((err) => {
                window.location.href = `/error?msg=${err}`;
            });
    }

    getNewData() {
        const { selectedDate, selectedTime } = this.state;
        const d = `${selectedDate} ${selectedTime}`;
        fetch(`/api/get-data/date/${d}`, {
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
            })
            .catch((err) => {
                window.location.href = `/error?msg=${err}`;
            });
    }

    changeDate(e) {
        const date = e.target.value;
        this.setState({ selectedDate: date });
        this.getNewData();
    }

    changeTime(e) {
        const point = e[1];

        const hour = Math.floor((point * 20) / 60);
        const min = Math.ceil((((point * 20) / 60) % 1) * 60);

        const hourFormatted =
            hour < 10 ? `0${hour.toString()}` : hour.toString();
        const minFormatted = min === 0 ? '00' : min;

        this.setState({ selectedTime: `${hourFormatted}:${minFormatted}:00` });
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
            selectedDate,
            selectedTime,
        } = this.state;

        const d = selectedTime
            ? new Date(`${selectedDate} ${selectedTime}`)
            : new Date();
        const hour = d.getHours();
        const min = d.getMinutes() === 0 ? '00' : d.getMinutes();

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
                            link="/live"
                            className="grid-span-1 col-start-1"
                        />
                        <Tab
                            icon={
                                <span className="material-icons-outlined">
                                    timer
                                </span>
                            }
                            text="Historique"
                            link="#"
                            className="grid-span-1 col-start-2"
                            isActive
                        />
                    </div>

                    {/* TITRE */}
                    <div
                        id="title_container"
                        className="text-center my-5 mx-48"
                    >
                        <h1 id="mainTitle" className="font-bold text-4xl mb-3">
                            Données du {selectedDate} à {hour}h{min}
                        </h1>
                        Le
                        <input
                            className="bg-primary rounded text-[black]"
                            type="date"
                            defaultValue={this.todayDate}
                            max={this.todayDate}
                            required
                            onChange={this.changeDate}
                        />
                        <div className="flex flex-row justify-center">
                            à {hour}h{min}
                        </div>
                        <RangeSlider
                            className="mt-3 w-0"
                            min={0}
                            max={71}
                            thumbsDisabled={[true, false]}
                            rangeSlideDisabled
                            defaultValue={[0, 36]}
                            onThumbDragEnd={() => this.getNewData()}
                            onInput={this.changeTime}
                        />
                    </div>

                    <div className="grid grid-cols-7">
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

export default HistoryPage;
