const router = require("express").Router();
const editJsonFile = require("edit-json-file");
const env = require("dotenv").config();
const path = require("path");

// Daten
const SERVER = editJsonFile(`/home/runner/EasyTickets-Dashboard/Daten/Discord/servers.json`);

// Code

router.get("/servers", (req, res) => {
    if (SERVER.get("SERVERS") != undefined) {
        res.status(200).json({
            servers: SERVER.get("SERVERS")
        });
    } else {
        SERVER.set("SERVERS", []);
        SERVER.save();
    }
});
router.get(`/servers/:id`, (req, res) => {
    if (SERVER.get(req.params.id) != undefined) {
        res.status(200).json(SERVER.get(req.params.id));
    } else {
        res.status(404).json({
            message: "Server not found!"
        });
    }
});
router.post("/servers/new/:id/:content", (req, res) => {
    console.log(req.params.id)
    SERVER.set(req.params.id, JSON.parse(req.params.content));
    SERVER.append("SERVERS", req.params.id);
    SERVER.save();
    res.status(200).json({message: "Erfolg!"});
});
router.delete("/servers/del/:id", (req, res) => {
    SERVER.unset(req.params.id);
    let array = SERVER.get("SERVERS");
    array.slice(array.indexOf(req.params.id));
    SERVER.set("SERVERS", array);
    SERVER.save();
    res.status(200).json({message: "Erfolg!"});
});
module.exports = router;