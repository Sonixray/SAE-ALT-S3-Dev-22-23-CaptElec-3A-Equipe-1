import React from 'react';

import { motion } from 'framer-motion';

import { animations } from '../../utils';

class IUT extends React.Component {
    render() {
        const { viewNavigation, stroke, defaultFill } = this.props || null;
        return (
            <motion.g
                variants={animations.deferredPageAnimations}
                initial="initial"
                animate="animate"
                exit="exit"
                transform="matrix(0.736959, 0, 0, 0.736959, 74.848602, 7.140958)"
            >
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="MI"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.736959, 0, 0, 0.736959, 74.848602, 7.140958)"
                >
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 1275.5549,283.99611 -0.4068,-25.87164 27.0614,42.74674 0.058,23.6013 -26.7126,-40.4764"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 1275.1481,258.12447 27.0614,42.74674 104.472,-3.50424 -30.4561,-43.50482 -101.0773,4.26232"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 1302.2095,300.87121 104.472,-3.50424 -0.09,24.96697 -104.324,2.13857 -0.058,-23.6013"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="bat_E"
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.736959, 0, 0, 0.736959, 74.848602, 7.140958)"
                >
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 1196.8919,302.54757 c 4.5459,1.04117 8.9079,2.95184 15.1257,-3.91667 l 1.6547,-75.36769 0.1044,-2.23031 c -3.2413,2.99809 -7.657,4.42654 -12.4684,5.32593 l -4.1945,23.42375 -0.2219,52.76499"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 750.66052,272.70018 18.11785,-0.93004 428.33543,-21.98756 16.3673,-0.84018 -99.6384,-53.87022 -286.20621,13.07487 -76.97597,64.55313"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 827.63649,208.14705 -46.11195,-8.03527 33.26665,-11.21201 12.8453,19.24728"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 749.62898,225.38461 1.03154,47.31557 76.97597,-64.55313 -46.11195,-8.03527 -31.89556,25.27283"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 757.69803,272.33893 9.94065,41.50349 1.13969,-42.07228 -11.08034,0.56879"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 768.77837,271.77014 -1.13969,42.07228 20.11388,-0.35177 -0.25111,38.22726 281.57975,-16.44857 2.0595,2.97211 125.6228,-5.16132 0.3503,-83.29755 -428.33543,21.98756"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 1113.8427,195.07218 57.9765,-23.42278 41.6619,77.293 -99.6384,-53.87022"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 814.79119,188.89977 12.8453,19.24728 286.20621,-13.07487 57.9765,-23.42278 -357.02801,17.25037"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 1187.1343,200.06265 14.174,26.29618 c 10.3544,-2.10082 19.3746,-6.29405 11.4032,-18.33602 -8.0706,-8.7327 -15.3095,-9.38264 -25.5772,-7.96016"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 879.05542,185.79474 38.33202,-1.85207 c 4.68219,-6.51655 0.92576,-9.55342 -3.87605,-12.15922 -10.61426,-4.09607 -21.78106,-4.74043 -33.9262,0.72689 -8.80318,5.78444 -4.88868,9.56935 -0.52977,13.2844"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="bat_Cloctech"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.736959, 0, 0, 0.736959, 74.848602, 7.140958)"
                >
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                            paintOrder: 'normal',
                        }}
                        d="m 404.38219,377.66988 0.53913,26.05039 184.90155,104.61516 -1.19021,-56.48469 -41.13126,2.69141 z"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 589.82287,508.33543 26.12985,-19.43235 0.0143,-62.51058 -27.33436,25.45824 1.19021,56.48469"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 398.57055,374.43743 187.9466,8.98733 -39.01575,71.11739 -143.11921,-76.87227 -5.81164,-3.23245 187.9466,8.98733 13.07314,-0.65039 188.1256,-9.35926 225.07531,-11.19751 56.29,-26.94826 -670.51065,39.16809"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 778.52478,478.0913 27.39545,15.31999 -0.19221,-53.37743 -8.43272,0.53038 -18.55565,-14.60203 -0.21487,52.12909"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 805.72802,440.03386 285.91108,-17.98243 0.6313,56.90341 -286.35017,14.45645 -0.19221,-53.37743"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 1103.2349,421.07431 c -10.0868,-29.45769 -16.5421,-61.3108 -34.1537,-85.80497 l -56.29,26.94826 90.4437,58.85671"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 599.59029,382.77437 188.1256,-9.35926 c -8.5396,20.36124 -30.48818,23.7947 -52.37403,28.55619 -28.30975,4.32296 -62.1808,7.30131 -102.17465,0.70392 -13.04036,-3.90978 -28.36679,-6.07261 -33.57692,-19.90085"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 599.59029,382.77437 c -2.30765,22.24836 8.52983,31.44904 16.37673,43.61813 l -0.0143,62.51058 c 21.12776,16.84321 47.55741,25.51675 80.49949,24.15529 22.0339,-3.04227 41.09548,-1.27542 82.07257,-34.96707 l 0.21487,-52.12909 -9.42992,-7.69175 c 12.36099,-13.18166 20.86057,-27.46123 18.40616,-44.85535 -5.98409,15.55101 -25.87412,23.7911 -52.37391,28.55617 -34.05886,5.23179 -68.11714,6.05149 -102.17461,0.70397 -12.76584,-3.63389 -26.6113,-5.20955 -33.57708,-19.90088"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 547.5014,454.54215 41.13126,-2.69141 27.33436,-25.45824 c -8.28329,-12.47827 -19.13724,-23.08059 -16.37673,-43.61813 l -13.07314,0.65039 -39.01575,71.11739"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 787.71589,373.41511 c -0.013,25.62319 -6.34533,29.89467 -18.40616,44.85535 l 27.98557,22.29378 305.9396,-19.48993 -90.4437,-58.85671 -225.07531,11.19751"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="BuildingB.Building"
                    onClick={viewNavigation}
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.736959, 0, 0, 0.736959, 74.848602, 7.140958)"
                >
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 129.27371,212.707 22.84949,-86.79662 -133.619844,26.8184 13.075313,7.07982 97.695041,52.8984"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 418.03115,229.64836 v 0 l -0.3236,-21.67354 64.57876,31.96046 -39.40708,1.82576 z"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 374.06564,219.2665 c 11.38873,11.60774 26.09491,14.94113 43.96551,10.38186 l -0.3236,-21.67354 22.68663,-15.13341 -2.13967,-53.36955 c -1.8018,10.74005 -20.85613,15.30924 -35.28712,15.5063 -22.9609,-1.53346 -34.24009,-8.10094 -34.67224,-13.96103 z"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 646.49979,80.863345 -93.3526,-48.212113 82.62008,-22.457216 10.73252,70.669329"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: 1,
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeMiterlimit: 4,
                            strokeDasharray: 'none',
                            strokeDashoffset: 0,
                            strokeOpacity: 1,
                            paintOrder: 'normal',
                        }}
                        d="M 18.503356,152.72878 152.1232,125.91038 C 188.6473,106.52905 249.20346,86.699366 347.59246,66.163858 416.18319,53.809185 484.86174,40.020524 553.14719,32.651232 l 93.3526,48.212113 C 564.26914,86.109223 482.66778,96.59258 402.21964,116.67393 268.44018,150.7223 203.29934,180.26869 129.27371,212.707 l 22.84949,-86.79662"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 55.878196,193.69214 0.211024,20.32606 98.76559,53.88762 0.0616,-38.22706 -19.07475,8.75751 z"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 31.578669,159.8086 0.402363,20.51171 23.897164,13.37183 79.963464,44.74413 -0.34852,-28.45643 -6.21943,2.72716 -97.695041,-52.8984"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="M 18.503356,152.72878 152.1232,125.91038 C 196.49239,101.92118 274.40517,80.135485 380.33326,60.190126 433.15984,50.320221 486.08112,40.463995 553.14719,32.651232 L 635.76727,10.194016 C 560.39003,15.781596 484.37423,24.966724 407.89565,36.759028 326.20579,50.873902 248.55549,69.379521 176.5288,93.997657 116.52699,114.59308 61.539778,134.49149 18.503356,152.72878"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 154.85481,267.90582 c 36.17816,-26.95575 79.55,-47.48834 129.15511,-62.4553 28.1831,-8.16717 56.6806,-16.08453 87.39685,-22.23904 l -2.00845,-27.23503 c -44.63333,10.24732 -83.80201,23.09617 -122.11651,36.35167 -31.38805,11.19922 -62.11715,23.77329 -92.3654,37.35064 l -0.0616,38.22706"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 438.25451,139.47186 1.01759,25.38156 c 33.45962,-9.53282 71.22634,-17.27668 113.44786,-23.17025 24.57288,-3.32822 48.99593,-5.36133 73.31645,-6.50808 l 0.46052,-23.74205 c -74.00968,4.82315 -84.53497,8.35384 -112.59672,12.24154 -25.85126,4.67504 -50.88769,10.10686 -75.6457,15.79728 z"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            display: 'inline',
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 640.9127,81.227949 0.23903,29.238131 -14.6548,0.96696 c -38.90175,2.05955 -76.4454,6.14067 -112.62841,12.24713 l -75.61401,15.79169 c -2.77331,-6.957 -10.44687,-11.91655 -26.19653,-13.58409 -12.65122,-1.31171 -24.57592,-0.18898 -35.50002,4.28662 -4.02316,2.75039 -8.24147,5.36792 -8.26281,10.84274 l 1.10317,14.95932 c -40.47362,9.17733 -81.24487,22.12801 -122.11653,36.35168 -29.05319,10.55035 -59.22152,22.32162 -92.36538,37.35063 l -19.07475,8.75751 -0.62018,-28.33726 c 60.05861,-27.87027 116.61374,-48.59584 171.83121,-66.59352 65.17226,-19.0736 129.31943,-38.58264 213.02837,-49.78234 40.10092,-5.26673 80.25271,-10.219514 120.83129,-12.538182"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'miter',
                            strokeOpacity: 1,
                        }}
                        d="m 368.29515,141.01713 c 0.23328,-11.63405 18.44577,-15.70788 35.56189,-15.57162 13.66431,0.83301 29.26605,2.11887 34.39747,14.02635 0.65552,2.57467 -7.17258,15.11092 -34.78654,15.49775 -18.41025,-1.73761 -33.03532,-5.12451 -35.17282,-13.95248"
                        id="BuildingB.Building"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 440.39418,192.84141 97.04792,44.98247 -10.30951,5.67689 -35.24783,0.80507 2.00103,-4.90798 -11.59948,0.53742 -64.57876,-31.96046 22.68663,-15.13341"
                        id="BuildingB.Building"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="bat_Aadm"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.736959, 0, 0, 0.736959, 74.848602, 7.140958)"
                >
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 550.55088,259.06347 48.79591,-17.2121 19.01889,14.63956 0.0736,51.95062 -67.88839,-49.37808"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 599.34679, 241.85137 -107.46203, 2.45447 2.00103, -4.90798 c -98.5921, 4.29655 -197.84637, 8.71554 -313.44379, 16.15634 l 213.22462, 8.74617 156.88426, -5.2369 48.79591, -17.2121;"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 393.66662,264.30037 -52.37088,78.75916 116.40131,-5.89156 0.5369,-21.12659 160.20533,-7.59983 -67.88839,-49.37808 -156.88427,5.2369"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="M 341.29574,343.05953 191.42131,261.78167 180.442,255.5542 l 213.22462,8.74617 -52.37088,78.75916"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 191.42143,261.78173 -0.57478,27.66211 154.61275,82.311 -0.24541,-14.52738 -0.24248,-14.35398 -3.67577,0.18605 -149.87431,-81.2778"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 345.21399,357.22746 110.36638,-3.29943 -0.22944,-9.58833 -0.16856,-7.04445 -110.21086,5.57823 0.24248,14.35398"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'butt',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 455.35093,344.3397 160.59718,-3.93855 -0.20813,-31.81184 -157.50603,7.45207 -0.5369,21.12659 -2.51468,0.12728 0.16856,7.04445"
                    />
                </motion.g>
                <motion.g
                    variants={{
                        ...animations.initAnimations(),
                        ...animations.exitAnimations(),
                    }}
                    id="bat_Abib"
                    style={{ display: 'inline' }}
                    className="hover:opacity-50 cursor-pointer"
                    transform="matrix(0.736959, 0, 0, 0.736959, 74.848602, 7.140958)"
                >
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 767.63868,313.84242 -151.83912,3.85304 -0.0596,-9.10615 2.6993,-0.14776 -0.0736,-51.95062 -19.01889,-14.63956 c 16.22997,-8.2102 39.75129,-14.12057 77.07095,-15.67867 24.91408,-0.15811 49.53506,0.17775 73.2721,2.00327 l 0.97068,44.52421 7.03751,-0.36125 9.94065,41.50349"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 639.33402,275.69244 90.25708,-3.69437 1.38555,28.03395 -91.88586,1.1962 0.24323,-25.53578 -0.21354,-11.26145 -15.48241,-7.7983 c 41.67593,-15.06868 82.66998,-13.9953 123.2996,-4.29455 l -17.6549,8.29165 0.30833,11.36828 -90.25708,3.69437"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 639.19169,290.63515 -15.73426,-13.23135 0.18064,-20.77111 15.48241,7.7983 0.21354,11.26145 -0.14233,14.94271"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 730.56724,291.74837 16.73355,-17.02602 -0.36312,-22.38421 -17.6549,8.29165 0.30833,11.36828 0.97614,19.7503"
                    />
                    <path
                        style={{
                            fill: defaultFill,
                            fillOpacity: 1,
                            stroke,
                            strokeWidth: '1px',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeOpacity: 1,
                        }}
                        d="m 527.13259,243.50077 72.2142,-1.6494 c 23.09699,-10.70374 49.27482,-14.90029 77.07101,-15.67867 24.83437,-0.15437 49.42988,0.16979 73.27204,2.00327 l -0.0609,-2.79136 24.92233,-19.74751 c -31.92059,-1.53155 -68.13895,-1.35694 -112.67828,2.12099 -46.95914,4.80021 -89.57204,13.74018 -124.43093,30.06579 l -10.30951,5.67689"
                    />
                </motion.g>
            </motion.g>
        );
    }
}

export default IUT;
