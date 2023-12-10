const express = require("express");
const path = require("path");
const fs = require("fs")
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//open index.html 
app.get ("/", (res, req) =>
    res.sendFile(path.join(___dirname, "public/index.html"))
);














app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);