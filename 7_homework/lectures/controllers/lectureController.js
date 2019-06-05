const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Lecture = mongoose.model('Lecture');



router.get('/', async (req, res) => {
    const lectures = await Lecture.find();
    res.send(lectures);
});
router.post('/', (req, res) => {
    insertRecord(req, res);
});

router.patch('/:id', function (req, res, next) {
    let id = req.params.id;
    updateRecord(req, res, id)

});

function insertRecord(req, res) {
    const lecture = new Lecture();
    lecture.course = req.body.course;
    lecture.lecture = req.body.lecture;
    lecture.save((err, doc) => {
        if (!err) {
            res.send('Data inserted with successful');
        } else {
            console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res, id) {
    Lecture.findOneAndUpdate({_id: id}, req.body, {new: true}, (err, doc) => {
        if (!err) {
            console.log("here");
            console.log(doc);
            res.send('Data updated successfully');
        } else {
            console.log('Error during record update : ' + err);
        }

    });
}


router.get('/search/:q', (req, res) => {
    Lecture.find( {lecture : new RegExp(req.params.q, 'i')}, function (err, docs) {
        res.send(docs);
    })
});


router.get('/:id', (req, res) => {
    Lecture.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
    });
});

router.delete('/:id', (req, res) => {
    Lecture.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send('deleted with successful');
        } else {
            console.log('Error in lecture delete :' + err);
        }
    });
});

module.exports = router;