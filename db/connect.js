const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://salmahamzaahmed:asddsaGogo@nodejscluster.fies2xa.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url)=>{
  return mongoose.connect(url);
}
  

module.exports = connectDB;