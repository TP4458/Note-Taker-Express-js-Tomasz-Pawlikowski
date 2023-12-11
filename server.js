const express = require("express");
const path = require("path");
const fs = require("fs")
const PORT = process.env.PORT || 3001;
const app = express();
const uniqid = require("uniqid");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));




//api routes
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "db/db.json"))
});




//html routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html" ))
})
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);