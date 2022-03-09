const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const cors = require("cors");
const path = require("path");

app.use(cors());

app.use(express.json({ limit: "50mb", extended: true }));

app.use(express.static(path.join(__dirname, "public")));


app.get("/ping", (req, res) => {
  res.send("Working!");
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => console.log(`Example app listening at ${port}`));
