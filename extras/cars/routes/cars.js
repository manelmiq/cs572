var express = require('express');
var router = express.Router();
var faker = require('faker');
var ObjectID = require('mongodb').ObjectID;


router.get('/fill', async (req, res, next) => {
    let startMileage = faker.random.number({min: 0, max: 10000});
    for (let i = 0; i < 100; i++) {
        req.db.insertOne({
            "brand": faker.name.firstName(),
            "type": "Camry",
            "rate_per_day": faker.random.number({min: 30, max: 100}),
            "status": 1,
            "rental_details": [{
                "driver_name": "Assad",
                "reservation_id": new ObjectID(),
                "driving_license": "AL4545",
                "start_mileage": startMileage,
                "end_mileage": startMileage + faker.random.number({min: 0, max: 5000}),
                "number_of_days": startMileage + faker.random.number({min: 0, max: 15}),
                "total_rent": 225
            }]
        });
    }
    res.json();
});

// read all available cars

router.get('/', async (req, res, next) => {
    const data = await req.db.find({
        status: 1
    }).project({
        brand: 1, type: 1, year: 1, status: 1, rate_per_day: 1
    }).toArray();
    console.log(data);
    res.json(data);
});















router.post('/:id/reserve', async (req, res, next) => {
    console.log(req.params.id);
    const car = await req.db.findOne({
        _id: ObjectID(req.params.id)
    }, {projection: {rental_details: 1}});

    console.log(car);

    if(car == null){
        res.json('error');
    }
    const lastMileage = car.rental_details[car.rental_details.length - 1].end_mileage;
    console.log("last_millage" + lastMileage);
    await req.db.updateOne(
        {_id: ObjectID(req.params.id)},
        {$push: {
            rental_details :{
                "name":req.body.name,
                "driving_license":req.body.driving_license,
                "reservation_id": new ObjectID(),
                "start_mileage":lastMileage
            } }});
    res.json(car.rental_details);
});


router.patch('/:id/reserve/:reservation_id', async (req, res, next) => {
    console.log(req.params.id);
    const car = await req.db.findOne({
        _id: ObjectID(req.params.id)
    });
    console.log(car);
    console.log(car.rate_per_day);
    console.log(typeof  car.rate_per_day);
    console.log(req.body.number_of_days);
    console.log(typeof  req.body.number_of_days);
    const total = car.rate_per_day *  req.body.number_of_days;
    console.log("total" + total);
    const new_registration =  await req.db.updateOne(
            {"_id": ObjectID(req.params.id),  "rental_details.reservation_id" : ObjectID(req.params.reservation_id) },
            { $set: {
                "rental_details.$.end_mileage" : req.body.end_mileage,
                "rental_details.$.total_rent" : total,
                "rental_details.$.number_of_days" : req.body.number_of_days
            }});
    console.log(new_registration.result);
    res.json(car.rental_details);
});


router.delete('/:id/reserve/:reservation_id', async (req, res, next) => {
    const deteted =  await req.db.updateOne(
                {"_id": ObjectID(req.params.id)},
                {  $pull:{rental_details :{reservation_id : ObjectID(req.params.reservation_id)}  }}
            );
    console.log(deteted.result);
    res.json(deteted.result);
});




module.exports = router;