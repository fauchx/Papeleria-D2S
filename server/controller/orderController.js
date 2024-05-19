const pool = require("../database/db")

const ordersSelect = async (req,res,next) =>{
    const queryString = "select orders.name, users.name, orders.description, orders.date_order from users inner join orders on orders.user_id = users.id where users.id = $1"
    try {
        const {idUser} = req.params
        const request = await pool.query(queryString, [
            idUser
        ])
        res.status(200)
        res.send(request.rows)
    } catch (error) {
        next(error)
    }
}

const orderCreate = async (req, res, next)=>{
    const queryString = "insert into orders(name, description, date_order, user_id) values($1,$2,$3,$4)"
    try {
        const {orderName, orderDescription, dateOrder, userId} = req.body
        const request = await pool.query(queryString, [
            orderName, orderDescription, dateOrder, userId
        ])
        res.status(200)
        res.send('Orden creada')
    } catch (error) {
        next(error)
    }
}

module.exports = {
    ordersSelect,
    orderCreate
}