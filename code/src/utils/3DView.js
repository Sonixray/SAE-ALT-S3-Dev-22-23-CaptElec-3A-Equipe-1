import { gradient } from './colors';

export const getLocationComponentRecursively = (pathStr, ComponentsList) => {
    const path = pathStr.split('.');
    const current = path.shift();
    if (current in ComponentsList) {
        if (path.length) {
            return getLocationComponentRecursively(
                path.join('.'),
                ComponentsList[current]
            );
        }
        return ComponentsList[current];
    }
    return null;
};

export const sensorParams = {
    temperature: {
        unit: '°C',
        min: {
            value: 0,
            color: '#3498DB',
            css: 'from-[#3498DB]',
        },
        via: {
            value: 20,
            color: '#FFFFFF',
            css: 'via-[#FFFFFF]',
        },
        max: {
            value: 50,
            color: '#FF5050',
            css: 'to-[#FF5050]',
        },
    },
    humidity: {
        unit: '%',
        min: {
            value: 0,
            color: '#FF5050',
            css: 'from-[#FF5050]',
        },
        via: {
            value: 40,
            color: '#FFFFFF',
            css: 'via-[#FFFFFF]',
        },
        max: {
            value: 100,
            color: '#3498DB',
            css: 'to-[#3498DB]',
        },
    },
    co2: {
        unit: 'ppm',
        min: {
            value: 0,
            color: '#FFFFFF',
            css: 'from-[#FFFFFF]',
        },
        via: {
            value: 275,
            color: '#4CBB17',
            css: 'via-[#4CBB17]',
        },
        max: {
            value: 1100,
            color: '#7B3F00',
            css: 'to-[#7B3F00]',
        },
    },
    batteryLevel: {
        unit: '%',
        min: {
            value: 0,
            color: '#FF0000',
            css: 'from-[#FF0000]',
        },
        max: {
            value: 100,
            color: '#0000FF',
            css: 'to-[#0000FF]',
        },
    },
};

export const getLocationColor = (data, location, sensorParam, defaultFill) => {
    const locationData = data.find((item) => item.location === location);
    if (locationData) {
        const value = locationData[sensorParam];
        if (value) {
            const { min, via, max } = sensorParams[sensorParam];
            if (min && max) {
                const ratio = (value - min.value) / (max.value - min.value);
                if (via) {
                    const viaRation =
                        (via.value - min.value) / (max.value - min.value);
                    return gradient(ratio, min.color, max.color, {
                        color: via.color,
                        ratio: viaRation,
                    });
                }
                return gradient(ratio, min.color, max.color);
            }
        }
    }
    return defaultFill;
};
