/*Model Creation 
1.Create a schema
2.Create a model using schema*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create a schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
//export the created model
module.exports = User = mongoose.model("Users", schema);
