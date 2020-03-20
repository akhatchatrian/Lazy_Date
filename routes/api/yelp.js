const axios = require('axios');
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

router.post("/data", (req, res) => {
    getYelpData(req).then(response =>
        res.json(response)
    )
});

function getYelpData(request) {
    conditions = request.body.conditions;

    return axios.get('https://api.yelp.com/v3/businesses/search', {
        params: {
            location: conditions.location,
            price: "",
            categories: "beach,"
        },
        headers: {
            'Authorization': keys.yelpAPI
        }
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
    });
}

module.exports = router;