const express = require("express")
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req,res) =>{
    res.json({"users": ["Playboi Carti", "Demar DeRozan", "Eduardo Daza", "Kawhi Leonard"]})
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