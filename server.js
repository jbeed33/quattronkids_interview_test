const express = require("express");
const classModel = require("./classSchema");
const app = express();
const port = 3000;
const { default: mongoose } = require("mongoose");
var cors = require("cors");
const uri =
  "mongodb+srv://jbeed33:5DjoyZYpidqICmfM@cluster0.sonbbim.mongodb.net/classes?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());

app.get("/:page/:limit", async (req, res) => {
  const limit = req.params.limit;
  const offset = parseInt(req.params.page) * parseInt(limit) || 0;
  try {
    const data = await classModel.find({}).skip(offset).limit(limit); //returning all data
    console.log(data);
    res.send(data);
  } catch (e) {
    console.log("Something went wrong: ", e);
    res.status(500).json({ message: "Something went wrong" });
  }
});

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(console.dir);
