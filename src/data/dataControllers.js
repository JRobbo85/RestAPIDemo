const Data = require("./dataModel");
const User = require("../user/userModel");

exports.createData = async (req, res) => {
  try {
    const newData = await Data.create(req.body);
    res.status(201).send({ data: newData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.readData = async (req, res) => {
  try {
    const info = await Data.find({});
    const userdata = await User.find({});
    if (userdata && info) {
      res.status(200).send({ data: info, userdata });
    } else {
      res.status(500).send({ error: "Entry Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Entry Not Found" });
  }
};

exports.readSpecificData = async (req, res) => {
  try {
    const info = await Data.findOne({ username: req.params.username });
    const userdata = await User.findOne({ username: req.params.username });
    if (userdata && info) {
      res.status(200).send({ data: info, userdata });
    } else {
      res.status(500).send({ error: "Entry Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({error: error.message});
  }
};

exports.updateData = async (req, res) => {
  try {
    await Data.updateOne(
      { username: req.body.username },
      { [req.body.key]: req.body.value }
    );
    res.status(201).send({ message: "Entry Updated." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    await Data.deleteOne({ username: req.params.username });
    res.status(200).send({ message: "Entry deleted." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};