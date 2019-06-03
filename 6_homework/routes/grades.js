var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(grades);
    logger.logResponse(req.id, res, 200);
});

router.get('/:id', function (req, res, next) {

    res.send(grades.filter(function (item) {
        return item.id == req.params.id;
    })[0]);
    logger.logResponse(res.id, res, 200);

});


router.post('/', function (req, res, next) {
    let newGrade = {
        id: grades.length + 1,
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade
    };
    grades.push(newGrade);
    res.send('Data inserted with successful!' + JSON.stringify(newGrade));
});


router.patch('/:id', function (req, res, next) {
    let update = {};
    grades.filter(function (item) {
        return item.id == req.params.id;
    }).map(function (grade) {
        grade.id = req.params.id;
        grade.name = req.body.name;
        grade.course = req.body.course;
        grade.grade = req.body.grade;
        update = grade;
        return grade
    });
    res.send('respond with a resource' + JSON.stringify(update));
});


router.delete('/:id', function (req, res, next) {
    grades = grades.filter(function (item) {
        return item.id != req.params.id;
    });
    res.send('Deleted with successful' + req.params.id);
});

module.exports = router;
