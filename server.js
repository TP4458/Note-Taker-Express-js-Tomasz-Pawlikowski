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

app.post("/api/notes", (req, res) => {
    //read json
    let dbRead = fs.readFileSync("./db/db.json")
    //parse json
    dbRead  = JSON.parse(dbRead)
    //send json to client
    res.json(dbRead);
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()
    }
    dbRead.push(note);
    fs.writeFileSync("db/db.json", JSON.stringify(note))
    res.json(note)
})



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