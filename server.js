const express = remquire("express");
const path = require("path");
const fs = require("fs")
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded())
app.use(express.static("public"));

