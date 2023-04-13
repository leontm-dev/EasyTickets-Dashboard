const router = require("express").Router();
const editJsonFile = require("edit-json-file");
const env = require("dotenv").config();
const path = require("path");

router.get("/", (req, res) => {
    res.render("servers");
});
router.get("/?id=:id/", (req, res) => {
    res.render("Dashboard/dashboard", { id: req.params.id })
});

module.exports = router;
