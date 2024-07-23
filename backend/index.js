const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const  {User, JobPost} = require("./db/model")
require("dotenv").config()

const PORT = process.env.PORT

const app = express()

app.use(cors()); 
app.use(express.json())


app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get("/users", async (req, res)=>{
    const users = await User.find();
    
    res.send(users);
})

app.get("/job-posts", async (req, res)=>{
    const jobPosts = await JobPost.find();    
    res.send(jobPosts);
})

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connection sucessfull"))
    .catch((err) => console.log("Error in connection"))



app.listen(PORT, ()=>console.log("Server running at port " + PORT))