const exp = require('constants');
const express = require('express');
const { link } = require('fs');
var morgan = require('morgan');
const mongoose = require('mongoose');
const { error } = require('console');
const methodOverride = require('method-override');

//helpers
const createPath = require('./helpers/create-path');

// ROUTERS
const postRoutes = require('./routes/post-routes');
const contactRoutes = require('./routes/contact-routes');
const postApiRoutes = require('./routes/api-post-routes');
const restoranApiRoutes = require('./routes/api-restor-routes');
const restoransRoutes = require('./routes/restor-routes');
const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
const db = `mongodb+srv://test123:Ijf1lHs5Kf5HWMt1@testbd.qq4vv0p.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => console.log("connect to db"))
    .catch((error) => console.log(error));

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//tehnickgames
//d0eyAtOd9UN1IBLY
//     logger
// app.use((req, res, next) => {
//     console.log(`path ${req.path}`);
//     console.log(`method ${req.method}`);
//     next()
// })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static(`styles`));

app.use(express.urlencoded({ extended: false}));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    const title = 'homes';
    res.render(createPath('index'), { title });
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);
app.use(restoranApiRoutes);
app.use(restoransRoutes);

app.get('/home', (req, res) => {
    res.redirect('index')
});

app.use((req, res) => {
    const title = "aboab"
    res
    .status(404)
    .render(createPath('error'), { title });
});

