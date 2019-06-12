db.getCollection('testes').insert({
    "_id" : 2.0,
    "results" : [
        {
            "item" : "C",
            "score" : 8.0,
            "answers" : [
                {
                    "q" : 1.0,
                    "a" : 8.0
                },
                {
                    "q" : 2.0,
                    "a" : 7.0
                }
            ]
        }
    ]
});
 // remove the second one

db.testes.updateOne({ "results.answer.q ": 1.0 },  {$pull: {"results.$.answers": { "q":1.0 }  }} )

db.testes.updateOne({ "results.answers.q" : 1.0 }, {$pull: { "results.$.answers": { "q": 1.0 }} })