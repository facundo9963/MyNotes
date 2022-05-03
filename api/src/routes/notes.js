var express = require("express");
var router = express.Router();


const { Notes } = require("../db");

router.get("/getAll", async function (req, res, next) {
  try {
    let notes = await Notes.findAll();
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json(console.log(error));
  }
});
router.post("/addNote", async function (req, res, next) {
  try {
    const {title, content, lastAct}= req.body
    let notes = await Notes.create({
      title,
      content,
      lastAct
    });
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json(console.log(error));
  }
});

module.exports = router;
