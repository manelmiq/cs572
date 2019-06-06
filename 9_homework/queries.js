db.getCollection('zip').find({});

// 1 Find all zip code in the state of washington

db.getCollection('zip').aggregate([
    {$match: {state:"WA"}},
    {$project:
            {   _id:"$_id"
            }}
]);

// 2 Find all zip code with population less than 5000

db.getCollection('zip')
    .aggregate([
        {$match: {pop : { $lt : 5000} }}
    ]);

// 3 Find all cities that has more than one zipcode, 
//   sort the results by state and city name


db.zip.aggregate( [
    {  $group: { _id: { "city" :"$city", "state": "$state" },total: { $sum: 1 }},},
    {  $match: { total: { $gt: 1 } } },
    {  $project: { _id: 0, "city":"$_id.city" , "state":"$_id.state"  } }
] )


// 4 Display the least populated in each state

db.zip.aggregate( [
    {  $group: { _id: { "city" :"$city", "state": "$state" },population: { $sum: "$pop" } } },
    {  $project: { _id: 0, "city":"$_id.city" , "state":"$_id.state", pop : "$population"  } },
    {  $group: {
            _id: "$state",
            city : {$first: "$city"},
            state: {$first: "$state"},
            min: {$min :"$pop" } } } ,

] )
   

         
         
         
         
         
         
         
         
         