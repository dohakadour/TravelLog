const express = require('express');
const Trip = require('../models/Trip');
const router = express.Router();

// get all trips
router.get('/trips', async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// get a single trip by id
router.get('/trip/:id', async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// create a new trip
router.post('/trips', async (req, res) => {
    const trip = new Trip(req.body);
    try {
        const newTrip = await trip.save();
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



// update a trip
router.put('/trip/:id', async (req, res) => {
    try {
        const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTrip) return res.status(404).json({ message: 'Trip not found' });
        res.status(200).json(updatedTrip);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// delete a trip
router.delete('/trip/:id', async (req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;