const express = require('express');
const router = express.Router();
const feedbackmodels = require('../models/feedbackmodels');


router.get('/', async (req, res) => {
    try {
        const feedbacks = await feedbackmodels.find();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:email', async (req, res) => {
    try {
        const feedback = await feedbackmodels.findOne({ email: req.params.email });

        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/add', async (req, res) => {
    const { email, course, feedback } = req.body;

    const newFeedback = new feedbackmodels({ email, course, feedback });

    try {
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;