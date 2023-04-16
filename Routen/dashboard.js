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
router.get("/?id=:id/tickets", (req, res) => {
    res.render("Dashboard/tickets");
});
router.get("/?id=:id/new", (req, res) => {
    res.render("Dashboard/new");
});
router.get("/?id=:id/prebuilds", (req, res) => {
    res.render("Dashboard/Prebuilds/main");
});
module.exports = router;
