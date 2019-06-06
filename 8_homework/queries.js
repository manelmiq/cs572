// 1. Write a MongoDB query to display all the documents in the collection restaurants.
//
db.getCollection('restaurant').find({});
db.restaurant.find({});

//
// 2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.
//
db.restaurant.find({}, {'restaurant_id':1, 'name':1, 'district':1, 'cuisine':1 });

// 3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.
//

db.restaurant
    .find({})
    .projection( {'restaurant_id':1, 'name':1, 'district':1, 'cuisine':1, '_id':0 });

// 4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.
//

db.restaurant
    .find({})
    .projection( {'restaurant_id':1, 'name':1, 'district':1, 'cuisine':1, 'address.zipcode':1})


// 5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
//

db.restaurant
    .find({'district':'Bronx'});

// 6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
//

db.restaurant
    .find({'district':'Bronx'})
    .limit(5);

// 7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
//

db.restaurant
    .find({'district':'Bronx'})
    .skip(5)
    .limit(5);

// 8. Write a MongoDB query to find the restaurants who achieved a score more than 90.
//
// 9. Write a MongoDB query to find the restaurants that achieved a score, more than
//     80 but less than 100.
//
// 10. Write a MongoDB query to find the restaurants which locate in latitude
//     value less than -95.754168.
//


db.restaurant
    .find({"address.coord": { $lt:-95.754168} });




// 11. Write a MongoDB query to find the restaurants
//     that do not prepare any cuisine of 'American'
//     and their grade score more than 70 and latitude less than -65.754168.
//
db.restaurant
    .find( {$and:
            [
                {"cuisine" : {$ne :"American "}},
                {"grades.score" : {$gt : 70}},
                {"address.coord" : {$lt : -65.754168}}
            ]
    });

// 12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168.
//     Note : Do this query without using $and operator.
//
// 13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
//
// 14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine
//                 for those restaurants which contain 'Wil' as first three letters for its name.
//

db.restaurant.find({name:/^Wil/}
).projection({
    "restaurant_id":1,
    "name" : 1,
    "district":1,
    "cuisine":1
});



// 15. Write a MongoDB query to find the restaurant Id, name,
//           borough and cuisine for those restaurants which
//           contain 'ces' as last three letters for its name.
//

db.restaurant.find({name:/ces$/}
).projection({
    "restaurant_id":1,
    "name" : 1,
    "district":1,
    "cuisine":1
});




// 16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those
//           restaurants which contain 'Reg' as three letters somewhere in its name.
db.restaurant.find({name:/Reg/}
).projection({
    "restaurant_id":1,
    "name" : 1,
    "district":1,
    "cuisine":1
});


//
// 17. Write a MongoDB query to find the restaurants which belong to the borough Bronx
//           and prepared either American or Chinese dish.
//

db.restaurant
    .find({
        district:"Bronx",
        $or:[
            {cuisine:"Chinese"},
            {cuisine:"American"}]
    })
    .projection({
        "restaurant_id":1,
        "name" : 1,
        "district":1,
        "cuisine":1
    });



// 18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for
// 18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for
//   those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
//

db.restaurant
    .find({
        $or:[
            {district:"Staten Island"},
            {district:"Queens"},
            {district:"Brookyln"},
            {district:"Bronx"}
        ]
    })
    .projection({
        "restaurant_id":1,
        "name" : 1,
        "district":1,
        "cuisine":1
    });


//also can achieve this with


db.restaurant
    .find({
        "district" :{ $in:["Staten Island","Queens","Brookyln","Bronx"]}}
    ).projection({
    "restaurant_id":1,
    "name" : 1,
    "district":1,
    "cuisine":1
});

// 19. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those
//   restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn.
//

db.restaurant
    .find({
        "district" :{ $ne:["Staten Island","Queens","Brookyln","Bronx"]}}
    ).projection({
    "restaurant_id":1,
    "name" : 1,
    "district":1,
    "cuisine":1
});


// 20. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those
//   restaurants which achieved a score which is not more than 10.
//
//    {"grades.score" :{ $lt: 10}}

db.restaurant
    .find(
        {"grades.score" : { $not: {$gt : 10}}}
    ).projection({
    "restaurant_id":1,
    "name" : 1,
    "district":1,
    "cuisine":1,
    "grades":1
});



// 21. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those
//   restaurants which prepared dish except 'American' and 'Chinees' or restaurant's
//   name begins with letter 'Wil'.
//
// 22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants
//   which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..
//
// 23. Write a MongoDB query to find the restaurant Id, name and grades for those restaurants
//   where the 2nd element of grades array contains a grade of "A" and score 9 on
//   an ISODate "2014-08-11T00:00:00Z".
//
// 24. Write a MongoDB query to find the restaurant Id, name, address and geographical location
//   for those restaurants where 2nd element of coord array contains a value which is more than
//   42 and upto 52..
//



db.restaurant
    .find(
        {"address.coord.1" : {$gt: 42, $lt:52}}
    ).projection({
    "restaurant_id":1,
    "name" : 1,
    "address.coord":1,
    "cuisine":1,
});


// 25. Write a MongoDB query to arrange the name of the restaurants in ascending order along with
//     all the columns.

db.restaurant.find().sort({"name":1});


//
// 26. Write a MongoDB query to arrange the name of the restaurants in descending along with
// all the columns.
//

db.restaurant.find().sort({"name":-1});

// 27. Write a MongoDB query to arranged the name of the cuisine in ascending order and for
// that same cuisine borough should be in descending order.
//

db.restaurant
    .find()
    .sort( { "cuisine":-1,"district":1} );

// 28. Write a MongoDB query to know whether all the addresses contains the street or not.
//
// 29. Write a MongoDB query which will select all documents in the restaurants collection where
//     the coord field value is Double.
//


db.restaurant.find(   {"address.coord": {$type : 1}  }  );
// 30. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
//
// 31. Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name.
//
// 32. Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name.