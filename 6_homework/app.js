var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var faker = require('faker');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gradesRouter = require('./routes/grades');
var cors = require('cors');


const addRequestId = require('express-request-id')();
const morgan = require('morgan');
logger = require('./log/logger');


var app = express();


grades = [];

faker.seed(100);

for (let i = 0; i < 100; i++) {
    grades.push({
        id: i,
        name: faker.name.firstName(),
        course: faker.internet.password(4, false, /[0-9A-Z]/),
        grade: faker.random.number({min: 0, max: 100})
    });
}


const requireJsonContent = () => {
    return (req, res, next) => {
        console.log('required json');
        try {
            JSON.parse(Object.keys(req.body)[0]);
        } catch (e) {
            res.status(400).send('Server requires json');
            console.log("not JSON");
        }
       return  next()
    }
};




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grades', gradesRouter);


app.use(addRequestId);

morgan.token('id', function getId(req) {
    return req.id
});

var loggerFormat = ':id [:date[web]] ":method :url" :status :response-time';

app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode >= 400
    },
    stream: process.stdout
}));

app.use((req, res, next) => {
    var log = logger.loggerInstance.child({
        id: req.id,
        body: req.body
    }, true)
    log.info({
        req: req
    })
    next();
});

app.use(function (req, res, next) {
    function afterResponse() {
        res.removeListener('finish', afterResponse);
        res.removeListener('close', afterResponse);
        var log = logger.loggerInstance.child({
            id: req.id
        }, true)
        log.info({res: res}, 'response')
    }

    res.on('finish', afterResponse);
    res.on('close', afterResponse);
    next();
});


app.use(function(err, req, res, next) {

    console.log(err.message);
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);

    res.json({message : err.message, status : err.status});
});

module.exports = app;


app.listen(3000, function()
{console.log(`Server is listening on port 3000`)});

