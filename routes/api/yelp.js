const axios = require('axios');
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

router.get("/data", (req, res) => {
    getYelpData().then(response =>
        res.json(response)
    )
});

function getYelpData() {
    return axios.get('https://api.yelp.com/v3/businesses/search', {
        params: {
            location: 'San Francisco',
            categories: {

            }
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