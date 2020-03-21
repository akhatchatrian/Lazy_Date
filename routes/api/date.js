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
    debugger
    const yelpData = req.body.yelpInfo
    const collectionData = req.body.collectionInfo

    const newDateCollection = new DateCollection({
        // collectionName: req.body.collectionName,
        // user: req.user.id,
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
            price: collectionData.location
        }
    })

    newDateCollection.save()
        .then(res => {
            return res.data
        }).catch(error => {
            console.log(error);
            return error;
        });
});

module.exports = router;