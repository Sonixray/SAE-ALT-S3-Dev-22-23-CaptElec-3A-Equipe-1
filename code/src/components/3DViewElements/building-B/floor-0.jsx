import React from 'react';

import { motion } from 'framer-motion';

import { View3D, animations } from '../../../utils';

class Floor0 extends React.Component {
    render() {
        const { data, sensorParam, selectLocation, stroke, defaultFill } =
            this.props || null;

        return (
            <motion.g
                variants={animations.deferredPageAnimations}
                initial="initial"
                animate="animate"
                exit="exit"
                transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
            >
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="rgt"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'rgt',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 557.80826,11.364039 21.57668,0.55555 -6.3626,88.06307 -19.02962,-0.27646 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="magasin"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'magasin',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 857.58931,187.24858 9.75036,2.17174 c 4.81623,21.39286 18.55939,22.092 31.43436,24.80373 l 8.17867,20.57223 -28.03037,56.07916 -54.14,-14.42874 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="cafet"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'cafet',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 413.35534,246.65782 -11.01943,-84.81747 31.57454,-0.86689 -4.71664,-56.09376 -17.54393,1.52864 -8.47191,-88.742641 c 50.0573,-5.53876 102.05063,-6.59846 154.63029,-6.30166 l -6.18129,143.116911 32.03402,0.90898 -4.82149,87.55105 c -53.64422,-2.20157 -108.77424,-1.03376 -165.48416,3.71684 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="couloir"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'couloir',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 361.22579,252.21651 c 17.09537,-2.29899 34.61744,-3.92095 52.12955,-5.55869 l -11.01943,-84.81747 -17.73407,0.48688 -4.29195,-40.94227 -21.93665,2.24682 -54.7299,13.50085 -78.75144,19.42652 -89.65025,22.11506 -26.12719,6.44509 c -8.45809,-5.25059 -17.137252,-8.24012 -26.267002,-6.62089 -10.55131,1.84676 -17.09035,6.64205 -22.29071,12.33431 -4.73297,5.18067 -5.80855,11.22502 -4.35039,18.91298 1.46886,7.74436 5.13874,13.40011 10.61932,18.00039 6.5508,4.50137 14.33769,7.19463 23.38408,8.04551 11.280842,-0.40407 21.309462,-2.35685 26.470892,-10.32924 3.17742,-4.71206 5.26086,-9.42692 6.36431,-14.14428 l 40.4988,-9.94065 89.26075,-21.90961 92.03142,-22.58967 z"
                    />
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'couloir',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 867.33967,189.42032 8.42702,-29.67102 c 5.80199,-6.18992 13.00916,-8.28022 20.72846,-8.8764 11.74767,-0.21551 17.95302,2.82933 22.51552,6.84059 4.85222,4.09563 8.26239,9.65164 11.34744,15.53691 1.97654,15.9159 -2.22333,22.4002 -7.28471,27.56894 l -24.29937,13.40471 c -8.65706,-0.89049 -16.45731,-3.1327 -22.56153,-8.05066 -3.48881,-3.28326 -6.97452,-6.57995 -8.87283,-16.75307 z"
                    />
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'couloir',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 578.8395,242.94098 51.80224,3.06383 11.30254,-97.94636 50.89917,6.49463 4.28383,-32.29671 -91.76939,-9.52467 -2.11528,43.21386 -19.58162,-0.55563 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="san"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'san',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 358.37324,123.63178 v -12.58135 l 70.82057,-6.17073 4.71664,56.09376 -49.30861,1.35377 -4.29195,-40.94227 z"
                    />
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'san',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 553.99272,99.706199 71.8438,1.043751 -0.52908,14.0523 -19.94955,-2.07055 -2.11528,43.21386 -51.61564,-1.46461 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B001"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B001',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 573.02234,99.982659 52.81418,0.767291 -0.52908,14.0523 71.81984,7.45412 16.22241,-98.998911 c -43.79427,-6.14991 -88.57809,-9.57414 -133.96476,-11.33787 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B002"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B002',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 630.64174,246.00481 11.30254,-97.94636 c 35.25264,3.30875 71.61858,9.55191 108.37308,16.8192 l -21.52749,92.61469 c -33.37067,-5.10702 -66.15643,-9.07228 -98.14813,-11.48753 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B003"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            display: 'inline',
                            fill: View3D.getLocationColor(
                                data,
                                'B003',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 692.83864,154.55233 57.47868,10.32532 -21.5275,92.61469 c 30.9278,4.83673 62.8043,10.9873 95.9925,18.95436 l 32.807,-89.19812 9.7504,2.17174 8.427,-29.67102 c 8.6147,-7.95655 19.8282,-12.28494 35.3393,-6.79641 8.7588,3.09929 14.8039,10.67797 19.2521,20.29751 l 10.3094,-3.02319 36.34142,-84.941171 C 891.18262,56.259429 803.26592,35.706059 713.34969,23.257459 l -16.22241,98.998911 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B004"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B004',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 90.209758,235.7916 -11.3084,26.89069 24.783202,56.69992 c 27.13522,-12.18017 57.45721,-22.63375 89.16825,-32.33475 l -29.30905,-85.67003 -40.4988,9.94065 c -3.06794,17.02996 -14.60872,24.51685 -32.835202,24.47352 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B005"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B005',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 163.54376,201.37743 89.26075,-21.90961 23.88503,86.71268 c -28.34943,5.64032 -56.22396,12.82738 -83.83673,20.86696 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B006"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            display: 'inline',
                            fill: View3D.getLocationColor(
                                data,
                                'B006',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 252.80451,179.46782 92.03142,-22.58967 16.38986,95.33836 c -29.97523,3.69018 -57.58939,8.64796 -84.53625,13.96399 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B007"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B007',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 403.17797,17.665699 8.47191,88.742641 -53.27664,4.64209 v 12.58135 L 303.64334,137.13263 281.6337,35.222309 c 39.33772,-7.20538 79.38231,-13.59811 121.54427,-17.55661 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B008"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B008',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 193.2332,54.898369 c 28.7877,-7.05037 57.63366,-14.05856 88.4005,-19.67606 l 22.00964,101.910321 -78.75144,19.42652 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B009"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B009',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 96.405258,83.057349 c 27.280822,-8.85365 57.223032,-17.99111 96.827942,-28.15898 l 31.6587,101.660781 -89.65025,22.11506 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B010"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(1.073532, 0, 0, 1.073532, 71.160233, 22.490946)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B010',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="M 8.2244605,114.64387 96.405258,83.057349 135.24165,178.67421 109.11446,185.1193 c -11.457982,-7.50656 -22.614792,-9.04978 -33.091302,-4.9618 -15.0115,5.85755 -17.69079,13.23839 -20.5334,20.16686 L 44.53256,196.53701 Z"
                    />
                </motion.g>
            </motion.g>
        );
    }
}

export default Floor0;
