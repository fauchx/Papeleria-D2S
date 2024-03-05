const express = require("express")
const app = express()

app.get("/api", (req,res) =>{
    res.json({"users": ["Playboi Carti", "Demar DeRozan", "Eduardo Daza", "Kawhi Leonard"]})
})

app.listen(5000, ()=>{console.log("Serve listening by hako")})