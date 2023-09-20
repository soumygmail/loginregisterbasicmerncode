import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegister")
.then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err);
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
  

})

const User = new mongoose.model("user", userSchema)

//Router

// app.get("/",(req, res) => {
//     res.send("my api")
// })


app.post("/login", (req,res)=>{
    res.send("login page")
    
})


  
  
   
// create document or insert document.
app.post('/register',(req,res)=>{

let person = User.finOne({email:email})
res.send(person);
        const data = new User({
        name:req.body.name,
        email:req.body.email,
             password:req.body.password
 })
    
 const result =  data.save();
  res.json(result);
 console.log(result)
})

  //.then(()=>{
//         res.status(201).json({message: "user registered successfully"});
//     }).catch((err)=>{
//         res.status(500).json({error: "Failed to registerd"})
//     })



app.listen(9002, () => {
    console.log("server started")
})
