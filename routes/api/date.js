const axios = require('axios');
const express = require("express");
const router = express.Router();
const keys = require('../../config/keys');

router.post("/data", (req, res) => {
    getYelpData(req).then(response =>
        res.json(response)
    )
});