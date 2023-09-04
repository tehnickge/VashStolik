const express = require('express');

const router = express.Router();


router.get('/api/restorans', (req, res) => {
    const restoran = [{
        id: '1',
        name: `restorn-abobika`,
        groupCompany: `McDonald`,
        adress: {
            country: '', //
            city: 'San Francisco',
            street: 'bamonskaya',
            building: '13',
            copus: '3',
            full_address: 'San Francisco, bamonskaya, d13k3', //
            coordinates: {
                x: '12',
                y: '24'
            }
        },
        countsTable: '4',
        tables: [
            { id:'1', available: true, parameters: { x1: '12', y1: '4', x2: '22', y2: '16' }, available_date: [ '2023-05-01:00:00', '2023-06-01:00:00', '2023-05-01:00']},
            { id:'2', available: false, parameters: { x1: '25', y1: '4', x2: '30', y2: '16' }, available_date: [ '2023-05-01:00:00', '2023-06-01:00:00', '2023-05-01:00']},
            { id:'3', available: true, parameters: { x1: '12', y1: '30', x2: '22', y2: '42' }, available_date: [ '2023-05-01:00:00', '2023-06-01:00:00', '2023-05-01:00']},
            { id:'4', available: true, parameters: { x1: '25', y1: '30', x2: '30', y2: '42' }, available_date: [ '2023-05-01:00:00', '2023-06-01:00:00', '2023-05-01:00']},
        ],
        images: [
            {number: '1', url: 'https://sun9-43.userapi.com/impg/tLrT3RzmXDeAsAWRQkHK5zgjx33eD4fWKRq8VQ/jMHAa4CCjdQ.jpg?size=1000x1080&quality=95&sign=304e11ce055524993ca71a39761a769c&type=album'},
            {number: '2', url: 'https://sun9-37.userapi.com/impg/WTFzZrRYlB0DuFveeMwRHkoXBdmtM4i_m6VgJg/Xp-u2iSnrFM.jpg?size=1280x1280&quality=95&sign=250e220c7484b1c0050b50b7e19176cd&type=album'}
        ],
        typeRent: {
            typeOne: true,
            typeTwo: false,
            typeThree: false
        }
    }]
    res.send(restoran);
});

module.exports = router;
