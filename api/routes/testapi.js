

var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Name: Uzair   Gender:Male     Email:uzair.bh2000@gmail.com    Age:21");
});

module.exports = router;