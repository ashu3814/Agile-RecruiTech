// Importing required modules
const mongoose = require('mongoose');

// Creating a schema for the 'Event' model
const eventSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  files: {
    image: {
      type: String,
      required: true,
    },
  },
  moderator: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  rigor_rank: {
    type: Number,
    required: true,
  },
  attendees: {
    type: [String],
    default: [],
  },
});

// Creating the 'Event' model
const Event = mongoose.model('Event', eventSchema);

// Exporting the 'Event' model
module.exports = Event;
