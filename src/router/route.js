// Importing required modules
const express = require('express');
const router = express.Router();
const Event = require('../model/event');

// POST /api/v3/app/events
router.post('/api/v3/app/events', (req, res) => {
  const eventData = req.body;
  const event = new Event(eventData);

  // Saving the new event to the database
  event
    .save()
    .then((savedEvent) => {
      res.json({ eventId: savedEvent.uid });
    })
    .catch((error) => {
      console.error(error);
      if (error.code === 11000) {
        res.status(400).send('Duplicate key error');
      } else {
        res.status(500).send('Internal server error');
      }
    });
});

// GET /api/v3/app/events
router.get('/api/v3/app/events', async (req, res) => {
  try {
    // Fetching all events from the database
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

// GET /api/v3/app/events/:id
router.get('/api/v3/app/events/:id', async (req, res) => {
  const eventId = req.params.id;

  try {
    // Finding a specific event by ID
    const event = await Event.findOne({ uid: eventId });
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

// PUT /api/v3/app/events/:id
router.put('/api/v3/app/events/:id', async (req, res) => {
  const eventId = req.params.id;
  const eventUpdates = req.body;

  try {
    // Updating a specific event by ID
    const event = await Event.findOneAndUpdate(
      { uid: eventId },
      eventUpdates,
      { new: true }
    );
    if (event) {
      res.json({ message: 'Event updated successfully' });
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

// DELETE /api/v3/app/events/:id
router.delete('/api/v3/app/events/:id', async (req, res) => {
  const eventId = req.params.id;

  try {
    // Deleting a specific event by ID
    const event = await Event.findOneAndDelete({ uid: eventId });
    if (event) {
      res.json({ message: 'Event deleted successfully' });
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
