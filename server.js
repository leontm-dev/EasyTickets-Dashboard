// Perms

const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const editJsonFile = require("edit-json-file")
const fs = require("fs");
const path = require("path");

//Datenbank-Einstellungen



//App Einstellungen

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Seiten/Views"));
app.use(express.static(path.join(__dirname, "Seiten/Public")))
app.listen(() => {
    console.log("Hallo");
});
app.get("/", (req, res) => {
    res.render("index.ejs")
});
app.get("/connected", (req, res) => {
    res.render("connected.ejs")
});

const DASHBOARD = require("./Routen/dashboard");
app.use("/dashboard/servers", DASHBOARD);
const API = require("./Routen/api");
app.use("/api", API);
