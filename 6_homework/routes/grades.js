var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator/check');


const requireJsonContent = function () {
    return (req, res, next) => {
        console.log('require Json Middleware');
        console.log(req.body);
        try {
            // let debug = 1;
            JSON.parse(JSON.stringify(req.body));
            next();
        } catch (e) {
            console.log(e);
            sendError(req, res, next)
        }

    }
}

function sendError (req, res, next){
    let error = new Error('Server requires application/json');
    error.status = 500;
    next(error)
}
//

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


router.post('/',   requireJsonContent(),
    [
        check('name').isLength({min: 5}),
        check('course').isLength({min: 3, max: 5}),
        check('grade').isNumeric()
    ], function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }

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
