const express = require("express");
const router = express.Router();
const DateCollection = require('../../models/DateCollection');

router.get('/data/:user_id', (req, res) => {
    DateCollection.find({user: req.params.user_id})
        .then(DateCollection => res.json(DateCollection))
        .catch(err =>
            res.status(404).json({ nodates: 'No dates found' }
        )
    );
});

router.post("/data", (req, res) => {
    const yelpData = req.body.yelpInfo
    const collectionData = req.body.collectionInfo

    const newDateCollection = new DateCollection({
        // collectionName: req.body.collectionName,
        user: req.body.user,
        yelpInfo: {
            searchParams: yelpData.searchParams,
            conditions: {
                age: yelpData.conditions.age,
                location: yelpData.conditions.location,
                price: yelpData.conditions.price
            }
        },
        collectionInfo: {
            intimacy: collectionData.intimacy,
            adventurous: collectionData.adventurous,
            interests: collectionData.interests,
            location: collectionData.location,
            price: collectionData.price
        }
    })

    newDateCollection.save()
        .then(response => {
            return res.json(newDateCollection)
        }).catch(error => {
            console.log(error);
            return res.status(500).json(error);
        });
});

module.exports = router;