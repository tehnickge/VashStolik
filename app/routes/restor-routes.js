const express = require('express');

const router = express.Router();


router.get('/restorans/search', (req, res) => {
    const title = "restaurants";
    const aboba = {
        name: 'aboba',
        age: '23',
    }
    res.render('../views/restorans-search.ejs', { aboba, title });
});
module.exports = router;
