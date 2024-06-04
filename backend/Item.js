const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");


const titleSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  text: String
})
module.exports = titleSchema


