const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    activities: [String],
    photos: [String]
});

module.exports = mongoose.model('Trip', tripSchema);
