const axios = require('axios');
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

router.post("/data", (req, res) => {
    getYelpData(req).then(response =>
        res.json(response)
    ).catch(error => {
        res.status(500).json(error);
    })
});


function getYelpData(request) {
    const conditions = request.body.conditions;
    const searchParams = request.body.searchParams;

    return axios.get('https://api.yelp.com/v3/businesses/search', {
        params: {
            location: conditions.location,
            price: conditions.price,
            categories: searchParams
        },
        headers: {
            'Authorization': keys.yelpAPI
        }
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        throw error;
    });
}

router.get("/data/:bizId", (req, res) => {
    getBizData(req).then(response =>
        res.json(response)
    ).catch(error => {
        res.status(500).json(error);
    })
});

function getBizData(request) {
    
    return axios.get(`https://api.yelp.com/v3/businesses/${request.params.bizId}`, {
        headers: {
            'Authorization': keys.yelpAPI
        }
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        throw error;
    });
}

module.exports = router;