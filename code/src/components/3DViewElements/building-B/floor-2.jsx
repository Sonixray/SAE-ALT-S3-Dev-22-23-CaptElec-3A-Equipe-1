import React from 'react';

import { motion } from 'framer-motion';

import { View3D, animations } from '../../../utils';

class Floor2 extends React.Component {
    render() {
        const { data, sensorParam, selectLocation, stroke, defaultFill } =
            this.props || null;
        return (
            <motion.g
                variants={animations.deferredPageAnimations}
                initial="initial"
                animate="animate"
                exit="exit"
                transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
            >
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="couloir"
                    style={{ display: 'inline', opacity: 1 }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
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
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 317.38657,216.85931 33.88677,-4.39283 m -48.46621,6.1002 3.84982,-0.47737 m 422.56654,-0.0102 34.16077,6.74144 M 943.58235,249.82 c 11.48178,-1.60568 23.1021,-1.24698 33.40912,-19.51111 4.1856,-10.47044 6.8614,-21.54561 -8.2054,-39.72734 l -3.70481,-3.28649 -48.9291,34.05106 c 2.90532,20.31359 13.69936,26.94121 27.43019,28.47388 z M 94.602265,188.49428 c -3.45985,8.52066 -3.99211,17.88005 -2.86352,27.71527 5.9247,16.93289 17.549715,23.78299 32.179635,25.31798 20.12317,0.72896 27.91719,-12.558 33.06115,-28.85757 l -44.41196,-37.65903 c -9.9027,3.2954 -13.756695,8.44369 -17.965305,13.48335 z m 28.752885,-45.6793 -43.158195,14.0957 -12.718755,11.28711 27.124995,20.29688 c 4.65583,-6.63882 10.679435,-11.07697 17.964845,-13.48438 l 44.41211,37.66016 c -5.013,20.21406 -16.5211,28.97533 -33.0625,28.85742 l 15.77344,48.14453 -3.38086,5.66797 17.29296,12.46485 4.06641,-6.72266 c 65.69311,-19.45007 131.81467,-30.21043 198.10547,-37.51172 l -4.50195,-51.10352 c 53.92304,-7.08697 108.65492,-11.06372 164.82031,-9.51953 l 1.86719,121.75586 c 13.30605,-0.12629 27.4398,-0.0533 42.95507,0.35157 l 5.00391,-122.67188 c 59.29677,2.30198 115.16152,6.67216 163.30469,15.69531 l -4.97656,49.9375 c 63.34586,12.45329 126.79574,24.21195 188.8789,45.01172 l 4.05274,6.78125 18.13867,-11.11328 -6.94141,-12.47852 15.20508,-46.39648 c -13.13325,-1.80083 -24.37451,-7.24824 -27.42969,-28.47461 l 48.92969,-34.05078 3.70506,3.28516 13.3535,-11.24024 -23.09176,-10.59765 -38.6836,27.52148 C 858.61768,178.57341 796.95471,163.3001 735.48015,153.31107 l -5.73633,30.33399 C 695.11136,177.13876 660.50558,172.0519 625.9528,169.6724 l 1.77344,-18.81054 c -56.25213,-4.1549 -109.225,-3.65704 -159.44922,0.74023 l 1.32813,17.11328 c -44.91108,1.77064 -79.33857,6.30433 -112.30078,11.22266 l -5.0586,-28.47071 c -89.69097,5.57543 -141.71634,18.4294 -188.54297,32.28907 -13.62673,-16.28969 -25.60751,-23.94218 -36.61718,-26.4961 z m 174.00781,44.49609 10.19141,58.51758 c -44.01018,7.5399 -86.86623,14.47297 -147.43555,30.72071 l -5.81641,-16.08008 c 24.52348,-9.21587 32.23479,-28.19313 30.61328,-52.5918 l 56.94532,-12.62891 z m 484.2168,10.31446 108.87304,24.50586 c -5.64041,24.58838 3.15497,41.58123 27.59571,50.33984 l -5.36719,16.48828 C 865.69972,276.58963 819.29549,262.43126 770.75554,254.8892 Z"
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
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
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
                        d="m 520.96544,148.48348 c 17.33992,-0.58632 35.38279,-0.56431 53.72911,-0.2797 l 2.3513,-57.959191 -57.87226,-1.3334 z"
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
                        d="m 547.50415,89.563939 -1.14543,58.457571"
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
                        d="m 519.89447,112.87774 3.91658,0.50219"
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
                        d="m 532.27224,113.74924 19.61888,0.0862"
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
                        d="m 557.89652,114.66211 8.75157,0.28162"
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
                        d="m 572.10534,114.72566 3.94465,0.0666"
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
                        d="m 561.93672,114.79212 -0.0392,-24.896551"
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
                        d="m 169.69264,251.857 7.55671,20.44339 c 20.25748,-5.41536 44.98914,-11.62226 77.92461,-16.93843 L 241.8604,195.2487 184.91547,207.87678 c 0.52131,28.79385 -7.39792,36.26792 -15.22283,43.98022 z"
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
                        d="m 204.24484,203.59031 14.72436,58.36087"
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
                        d="m 200.91971,252.75264 -2.94895,-15.60944 17.90385,-4.32129"
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
                        d="m 225.57225,230.97248 11.21999,-2.17272"
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
                        d="m 226.73343,198.60325 7.12578,31.04353"
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
                        d="m 244.71937,226.84679 3.90177,-1.07207"
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
                        d="m 182.56278,231.97762 3.41037,1.17922"
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
                        d="m 195.1927,236.11438 2.77806,1.02882"
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
                        d="m 834.67779,209.57748 55.77438,12.55429 c -2.37909,13.87242 -4.41029,27.74665 11.65469,41.71462 l -7.22069,20.23545 c -24.05078,-6.72773 -48.46484,-13.17183 -73.5234,-19.11271 z"
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
                        d="m 838.31067,240.27387 11.55721,2.78505"
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
                        d="m 841.34216,240.96237 6.43646,-28.43602"
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
                        d="m 869.26985,217.36383 -13.90066,56.0466"
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
                        d="m 859.65338,245.00382 17.05641,5.71896 -3.21227,13.06459"
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
                        d="m 876.70979,250.72278 3.04022,-1.65083"
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
                        d="m 885.77646,245.359 3.66804,-1.92742"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="rgt"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
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
                        d="m 902.10686,263.84639 c 4.21196,3.50832 9.79338,6.22905 15.94128,8.62399 l -5.36592,16.48867 -17.79605,-4.87721 z"
                    />
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
                        d="m 154.30146,260.46986 c 5.3118,-2.09435 10.53666,-4.56088 15.39118,-8.61286 l 7.55671,20.44339 -17.13132,4.24968 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="balcon"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'balcon',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 637.13045,51.064929 2.38107,-34.20256 c 115.39221,12.23184 229.8527,30.72555 340.27965,76.3277 l -8.4121,30.641031 C 868.53318,83.539849 756.46211,60.509769 637.13045,51.064929 Z"
                    />
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'balcon',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 460.26767,48.480169 c -112.9267,4.20293 -226.22373,10.95051 -346.03602,62.465681 L 102.0315,73.462339 c 111.5475,-38.9218 229.68554,-61.08278 356.05184,-62.31787 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B201"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B201',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 637.13045,51.064929 c 38.29379,3.07079 76.65573,7.77884 115.07319,13.8212 L 729.7439,183.64453 c -34.44878,-6.32342 -68.98209,-11.69508 -103.79028,-13.97218 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B202"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B202',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 565.91875,202.38386 c 29.51942,0.88454 59.23812,2.95163 89.05932,5.62687 l -7.81801,122.76516 c -28.81764,-2.85997 -57.5931,-5.14142 -86.24448,-5.72138 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B203"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B203',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 654.97913,208.01083 c 25.5358,2.43838 50.29,5.78738 74.24436,10.06824 l -12.19451,122.3793 c -22.63452,-3.85196 -45.86554,-7.13533 -69.86892,-9.68248 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B204"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B204',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 724.24745,268.01662 39.08317,7.67916 -11.22764,71.27821 -35.074,-6.51562 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B205"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B205',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 763.33062,275.69578 41.30529,8.50803 -16.83493,70.46021 -35.69823,-7.69008 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B206"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B206',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 804.63591,284.20381 40.92494,9.39911 -19.85187,70.28519 -37.908,-9.22409 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B207"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B207',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 845.56085,293.60292 42.99218,11.62962 -22.48347,69.49338 -40.36058,-10.83781 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B208"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B208',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 888.55303,305.23254 24.57458,7.79474 13.68194,22.90841 -17.40518,51.3101 -43.33481,-12.51987 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B209"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B209',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 917.17845,319.80982 18.1391,-11.11414 9.44032,16.969 31.6374,11.94446 -26.39686,61.86779 -40.59434,-12.23123 17.40548,-51.31001 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B210"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B210',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 976.39527,337.60915 18.4498,-43.24184 -58.64749,-22.01458 -7.82155,23.86554 16.38184,29.44641 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B211"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            display: 'inline',
                            fill: View3D.getLocationColor(
                                data,
                                'B211',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 936.19757,272.35273 7.3847,-22.53277 c 18.5273,0.0699 28.4051,-9.55276 33.4092,-19.51111 l 39.02053,14.44826 -21.16693,49.61021 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B212b"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B212b',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 976.99147,230.30885 c 3.2724,-9.87996 8.1064,-18.88587 -8.2054,-39.72734 l 13.3547,-11.24094 51.66473,23.71289 -17.7935,41.70365 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B212a"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B212a',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 1033.8055,203.05346 30.6748,-71.89412 C 1036.5007,117.11451 1008.2916,104.3434 979.79117,93.190069 L 959.0494,168.74217 Z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B213"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B213',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 959.0494,168.74217 -38.6852,27.52133 -18.39781,-5.18622 25.58786,-82.58 43.82482,15.33382 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B214"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B214',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 902.08004,191.10888 -38.09067,-10.24315 21.98512,-85.616871 41.57976,13.248421 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B215"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B215',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 831.56088,80.645959 54.41361,14.6029 -21.97467,85.619571 c -17.72772,-4.54112 -35.03504,-8.83914 -51.09637,-12.41664 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B216"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B216',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 752.20364,64.886129 c 26.46235,4.16953 52.91345,9.5658 79.35724,15.75983 l -18.65733,87.805861 c -25.52107,-5.5504 -51.09078,-11.01539 -77.42282,-15.14141 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B219"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B219',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 364.12606,335.84992 c 51.30795,-6.48734 102.59711,-11.21649 153.83497,-11.1466 l -1.8681,-121.75599 c -55.06426,-1.44676 -109.99106,2.2112 -164.81959,9.51915 2.59674,39.39743 7.89974,81.56989 12.85272,123.38344 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B220"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B220',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 355.77478,263.57004 -38.24654,4.43227 8.74828,73.67997 37.84954,-5.83236 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B221"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B221',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 326.27655,341.68227 -8.74831,-73.67996 -45.14007,6.88408 16.93019,73.68098 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B222"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B222',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 289.31876,348.56729 -38.50656,8.39903 -21.46907,-73.77486 43.0449,-8.30505 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B223"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B223',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 251.04475,356.91193 -42.66191,10.69388 -24.30827,-73.73409 45.26856,-10.68026 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B224"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B224',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 162.71122,380.5509 -18.89334,-56.57566 13.85243,-22.89229 26.40412,-7.2112 24.30841,73.73406 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B225"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B225',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 136.31072,295.34063 17.29187,12.46455 -9.78471,16.17006 18.89334,56.57566 -55.28119,17.43613 -24.518515,-69.838 42.635245,-14.76017 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B226"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B226',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 82.911515,328.14903 -16.509605,-47.02562 63.60444,-21.0129 9.68482,29.56204 -14.14441,23.71631 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B227"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B227',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 48.780426,230.93076 17.621484,50.19265 63.60396,-21.01274 -6.08749,-18.58314 C 110.9925,239.41764 98.674198,235.55918 91.738745,216.20955 Z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B228a"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B228a',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 48.780426,230.93076 42.958319,-14.72121 c -1.61242,-9.32944 -0.21138,-18.55203 2.86352,-27.71527 L 63.819033,165.45981 29.948741,177.291 Z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B228b"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B228b',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 29.948741,177.291 33.870292,-11.83119 3.658845,2.73784 12.719027,-11.28752 -11.5876,-8.71782 L 50.266235,94.633099 8.1338648,115.15398 Z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B228c"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B228c',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="M 80.196905,156.91013 123.3551,142.81475 c -6.08487,-23.4309 -13.61749,-46.418221 -21.32381,-69.352331 l -51.764988,21.17065 18.343003,53.559241 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B229"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B229',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 114.23165,110.94585 c 14.00326,-6.04481 29.47005,-11.799261 45.5439,-17.433261 l 23.85963,84.399731 -19.93192,5.84458 c -10.85243,-12.61074 -22.42722,-23.20452 -36.61742,-26.49566 -4.90331,-19.96156 -8.59424,-31.05813 -12.85419,-46.31539 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B230"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B230',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 159.77555,93.512589 c 15.95146,-5.48011 31.18511,-10.05778 45.94035,-14.03401 l 20.04999,88.215111 -42.13071,10.21863 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B231"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B231',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 205.7159,79.478579 c 22.21317,-6.03805 45.21468,-10.94062 68.76083,-15.05872 l 17.62458,92.408271 c -21.79987,2.66354 -43.86133,6.13066 -66.33551,10.86558 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B232"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B232',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 274.47673,64.419859 c 20.3793,-3.32039 40.84606,-6.42945 61.76523,-8.44551 l 16.00379,95.492421 c -20.14548,1.15839 -40.37138,3.01105 -60.66222,5.42428 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B233"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B233',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 336.24196,55.974349 c 41.43854,-4.03237 82.77731,-6.4807 124.02571,-7.49418 L 469.60565,168.716 c -37.59155,1.57669 -75.02813,5.27463 -112.30041,11.22139 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B234"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B234',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 241.8604,195.2487 55.50343,-7.93679 10.19121,58.51676 -52.38108,9.53329 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B235a"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B235a',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 458.08334,11.144469 c 60.63868,-1.6308301 121.08721,0.87384 181.42818,5.7179 -2.94654,50.65647 -7.84216,89.423071 -11.78534,133.999801 -18.66191,-1.3536 -36.76829,-2.44347 -53.03163,-2.65839 l 2.3513,-57.959191 -57.87226,-1.3334 1.79383,59.638161 c -23.84878,0.83979 -38.52252,1.93879 -52.69096,3.05207 -3.41817,-46.69644 -7.65605,-88.483631 -10.19312,-140.456951 z"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="B235b"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.897745, 0, 0, 0.897745, 118.532967, 15.906466)"
                    onClick={selectLocation}
                >
                    <path
                        style={{
                            fill: View3D.getLocationColor(
                                data,
                                'B235b',
                                sensorParam,
                                defaultFill
                            ),
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 781.57989,197.62564 53.0979,11.95184 -13.31502,55.39165 c -16.82663,-3.88038 -33.68429,-7.37833 -50.60656,-10.07992 z"
                    />
                </motion.g>
            </motion.g>
        );
    }
}

export default Floor2;
