const mongoose = require('mongoose');

var lectureSchema = new mongoose.Schema({
    course: {
        type: String,
        required: 'This field is required.'
    },
    lecture: {
        type: String,
        required: 'This field is required.'
    },

});


mongoose.model('Lecture', lectureSchema);