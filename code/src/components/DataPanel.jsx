import React, { Component } from 'react';

import cn from 'classnames';

class DataPanel extends Component {
    dataToDataPanel(selectedLocation) {
        const { data } = this.props || null;
        if (data && selectedLocation) {
            const sensorOfselectedLocation = data.find(
                (s) => s.location === selectedLocation.toUpperCase()
            );

            if (sensorOfselectedLocation) {
                // #------------------------------------------------------------#
                // # MODIFIER L'ORDRE DE D'AFFICHAGE DANS LE TABLEAU SOUS LE 3D #
                // #------------------------------------------------------------#
                return {
                    Salle: selectedLocation.toUpperCase(),
                    Température: `${sensorOfselectedLocation.temperature} °C`,
                    Humidité: `${sensorOfselectedLocation.humidity} %`,
                    CO2: `${sensorOfselectedLocation.co2} ppm`,
                    Batterie: `${sensorOfselectedLocation.batteryLevel} %`,
                    Pression: `${sensorOfselectedLocation.pressure} hPa`,
                    Luminosité: `${sensorOfselectedLocation.luminosity} lux`,
                    TVOC: `${sensorOfselectedLocation.tvoc} µg/m³`,
                    Mouvements: `${sensorOfselectedLocation.presence} mouv./10min`,
                };
            }

            return {
                Salle: selectedLocation.toUpperCase(),
                Information: `Aucune donnée disponible`,
            };
        }
        return null;
    }

    render() {
        const { className, selectedLocation } = this.props || null;
        return (
            <>
                {/* PANEL DESIGN, BORDURE, LARGEUR HAUTEUR AUTO */}
                <div
                    className={cn(
                        'flex gap-4 place-items-center justify-around bg-primary dark:bg-grey-4 rounded-lg w-2/3 h-[auto]',
                        className
                    )}
                >
                    {/* MAPPAGE TITRE ET VALEUR DE CHAQUE PROPRIETE */}
                    {this.dataToDataPanel(selectedLocation) &&
                        Object.entries(
                            this.dataToDataPanel(selectedLocation)
                        ).map(([key, value]) => (
                            <div className="flex flex-col place-items-center">
                                <p className="text-sm text-center">{key}</p>
                                <p className="font-semibold text-center">
                                    {value}
                                </p>
                            </div>
                        ))}
                </div>
            </>
        );
    }
}

export default DataPanel;
