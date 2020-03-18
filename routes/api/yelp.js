const axios = require('axios');
const express = require("express");
const router = express.Router();

router.get("/data", (req, res) => {
    getYelpData().then(response =>
        res.json(response)
    )
});

function getYelpData() {
    return axios.get('https://api.yelp.com/v3/businesses/search', {
        params: {
            location: 'Houston'
        },
        headers: {
            'Authorization': 'Bearer sE_0n-3QIe3A4vJszN_mub1XTqIbHjBQSCLdKhAF9q5wKIZEcmqR087McHZJmca3Oxt6IRMacQHki6AMOFYt-H4_lX-gUYF3q_zW5ogM0ekPsYdCJ7W6TjaO7idxXnYx'
        }
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
    });
}

module.exports = router;