import React, { FC, useEffect } from 'react';
import { printChord } from '../../utils/canvasHelper';

export type ChordItemProps = {
    chord?: string;
};

const ChordItem: FC<ChordItemProps> = ({ chord }) => {
    useEffect(printChord, []);

    return <img id="cimg" alt={chord} />;
};

const SVG_NS = 'http://www.w3.org/2000/svg';
const json = [
    {
        id: '404',
        name: 'Cb',
        intervals: '',
        positions: [
            {
                id: '1226',
                position: 'x,2,4,4,4,2',
                fingerings: '13331;12341',
                picture: '',
                chord_id: '404',
                instrument_id: '1',
            },
            {
                id: '1231',
                position: '7,9,9,8,7,7',
                fingerings: '134211',
                picture: '',
                chord_id: '404',
                instrument_id: '1',
            },
            {
                id: '1251',
                position: '7,6,4,4,4,7',
                fingerings: '321114',
                picture: '',
                chord_id: '404',
                instrument_id: '1',
            },
        ],
    },
];
//
// function print() {
//     for (let j = 0; j < json[0].positions.length; j++) {
//         const position = json[0].positions[j].position.replace('x', '').split(',');
//         const min = Math.min.apply(null, position);
//         const displacement = min < 1 ? 1 : min;
//         const svg = drawSVGElement('svg', { viewBox: '0 0 70 60' }, wrap);
//         drawGrid();
//
//         for (let i = 0; i < position.length; i++) {
//             if (parseInt(position[i]) > 0) {
//                 const cp = {
//                     // circle position
//                     x: 10 + parseInt(i) * 10,
//                     y: 15 + (position[i] - displacement) * 10,
//                 };
//                 drawSVGElement('circle', { cx: cp.x, cy: cp.y, r: 4 }, svg);
//             }
//         }
//     }
// }
//
// function drawGrid() {
//     let d = '';
//     for (let i = 1; i < 6; i++) {
//         d += `M10,${i * 10}H60`;
//     }
//     for (let i = 1; i < 7; i++) {
//         d += `M${i * 10},10V50`;
//     }
//     const path = drawSVGElement('path', { d: d }, svg);
// }
//
// function drawSVGElement(tag, o, parent) {
//     const svgElement = document.createElementNS(SVG_NS, tag);
//     for (const name in o) {
//         if (o.hasOwnProperty(name)) {
//             svgElement.setAttributeNS(null, name, o[name]);
//         }
//     }
//     parent.appendChild(svgElement);
//     return svgElement;
// }
export default ChordItem;
