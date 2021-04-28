const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
    const router = express.Router();

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then( (docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    })

//GET - SPECIFIC

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .findOne({_id: ObjectId(id)})
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err})
            })
    })


//CREATE

    router.post('/', (req, res) => {
        const newData = req.body;
        conllection
        .insertOne(newData)
        .then((result)=> res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err})
            })
    })

//DELETE

    router.delete('/:id', (req, res) => {
    const id = req.params.id
    collection
    .deletOne({ _id: ObjectId(id)})
    .then((result) => res.json(result) )
    .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err})
        })


    })



    return router;
}

module.exports = createRouter;