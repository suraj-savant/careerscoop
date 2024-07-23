const mongoose = require("mongoose");
// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

const jobSchema = new mongoose.Schema({
    Role:String,
    RoleUrl : String,
    Company :String,
    Location:String,
    Salary : String
});
  

const User = mongoose.model('User', userSchema);

const JobPost = mongoose.model('Jobs', jobSchema);

  module.exports = {
    User,
    JobPost
   
  }