const pool = require("../database/db")

const registerUser = async (req,res, next) =>{
    try {
    const {name, lastname, email, password} = req.body
    const create = await pool.query("INSERT INTO users(name, lastname, email, password) VALUES ($1, $2, $3, $4)", [
        name,
        lastname,
        email,
        password
    ])
    res.status(200)
    res.send('Usuario creado')
    } catch (error) {
        next(error)
    }
}

const getUser = async (req,res, next) =>{
    try {
     const response = await pool.query('SELECT * FROM users')
     res.send(response.rows)
     res.status(200)
    } catch (error) {
     next(error)
    }
 }

const loginUser = async (req,res,next) =>{
    try {
    const {email,password} = req.body
    const consult = await pool.query('SELECT name, id FROM users WHERE email = $1 and password = $2 ', [
        email,
        password
    ])
    if(consult.rowCount  > 0){
        res.status(200)
        res.send(consult.rows)
    }
    else{
        res.status(404)
        res.send('user not found')
    }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUser,
    loginUser,
    registerUser
}