const express = require('express');

const router = express.Router();


router.get('/api/restorans', (req, res) => {
    const restoran = {
        id: '1',
        name: `restorn`,
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
        typeRent: {
            typeOne: true,
            typeTwo: false,
            typeThree: false
        }
    }
    res.send(restoran);
});

module.exports = router;
