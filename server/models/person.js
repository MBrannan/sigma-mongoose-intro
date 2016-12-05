var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//step 1 create the Schema
var personSchema = new Schema({
  name: {type: String, required: true},
  location: String,
  birthDate: Date,
  nicenessLevel: Number
});

//step 2 create the model
var Person = mongoose.model('Person', personSchema);

//step 3 export the model
module.exports = Person;
