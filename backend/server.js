const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const tripRoutes = require('./routes/tripRoutes');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', tripRoutes);

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {
    dbName: 'TravelLogDB',
 })
    .then(() => console.log('MongoDB connected seccessfully'))
    .catch(err => console.error('MongoDB connection error: ', err));

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});