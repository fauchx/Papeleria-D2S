const express = require("express")
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req,res) =>{
    //res.json({"users": ["El Pajaro Loco", "LeBron James", "Eduardo Daza", "Cbum"]})
    res.json({"users":[{
        name:"El pajaro loco",
        order:"PDF"
    }, {
        name:"LeBron James",
        order:"quiero ganar la nbaaas"
    }, {
        name:"Cbum",
        order:"anda comprame un dianabol"
    }, {
        name:"Kendick Lamar",
        order:"custodia a drake"
    },] 
    })
})

app.post("/login",async (req,res,next) =>{
    try {
    const {username,password} = req.body
    console.log(username)
    console.log(password)
    if (username === "faucho23@gmail.com" && password === "fabiantupapa"){
           res.json("Found")
    }
    else{
        res.json("Not found")
    }
    } catch (error) {
        next(error)
    }
});

app.listen(5000, ()=>{console.log("Serve listening by hako")})