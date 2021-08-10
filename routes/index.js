var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

/* GET home page. */
router.get("/a", function (req, res, next) {
    res.render("a", { title: "Express", menu: "a" });
});

/* GET home page. */
router.get("/b", function (req, res, next) {
    res.render("b", { title: "Express", menu: "b" });
});

/* GET home page. */
router.get("/c", function (req, res, next) {
    res.render("c", { title: "Express", menu: "c" });
});

/* GET home page. */
router.get("/d", function (req, res, next) {
    res.render("d", { title: "Express", menu: "d" });
});

/* GET home page. */
router.get("/e", function (req, res, next) {
    res.render("e", { title: "Express", menu: "e" });
});

module.exports = router;
