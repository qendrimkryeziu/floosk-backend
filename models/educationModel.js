const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
    title: { type: String, required: true },
    school: { type: String, required: true },
    city: { type: String, required: true },
    startData: { type: Date, required: true },
    endData: { type: Date, required: true },
});

module.exports = mongoose.model("Education", educationSchema);