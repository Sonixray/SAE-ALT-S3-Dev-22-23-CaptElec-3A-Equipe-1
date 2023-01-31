import React, { Component } from 'react';

import cn from 'classnames';

class ScaleBar extends Component {
    render() {
        const { className, selectedSensorParam } = this.props || null;

        if (!selectedSensorParam)
            return (
                <p className={cn(className, 'text-center font-bold')}>
                    Sélectionenz un type de donnée
                </p>
            );

        return (
            <div
                className={cn(
                    className,
                    `flex justify-between rounded-2xl text-black mix-blend-difference bg-gradient-to-r ${
                        selectedSensorParam.min.css
                    } ${
                        selectedSensorParam.via && selectedSensorParam.via.css
                    } ${selectedSensorParam.max.css}`
                )}
            >
                <p className="pl-2">{`< ${selectedSensorParam.min.value}${selectedSensorParam.unit}`}</p>
                {selectedSensorParam.via && (
                    <p>{`${selectedSensorParam.via.value}${selectedSensorParam.unit}`}</p>
                )}
                <p className="pr-2">{`> ${selectedSensorParam.max.value}${selectedSensorParam.unit}`}</p>
            </div>
        );
    }
}

export default ScaleBar;
