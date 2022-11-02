const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  birthdate: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

dataSchema.statics.findByCredentials = async (dateofbirth) => {
  const dob = await User.findOne({ dateofbirth });
  if (dateofbirth) {
    return dob;
  } else {
    throw new Error();
  }
};

const Data = mongoose.model("data", dataSchema);

module.exports = Data;