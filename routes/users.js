var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
   res.send("respond with a Something that I wrote");
});

module.exports = router;
