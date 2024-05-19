const { Router, response } = require('express')
const router = Router()
const bodyParser = require('body-parser');
const pool = require('../database/db')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
//IMPORTAR CONTROLADOR
const {   getUser,
    loginUser,
    registerUser   } = require('../controller/controller.js')
const {
    ordersSelect,
    orderCreate  
}  = require("../controller/orderController.js")
//RUTAS
router.post('/register', registerUser)

router.get("/users", getUser )

router.post("/login", loginUser);

router.get("/orders/:idUser", ordersSelect)

router.post("/orders/create", orderCreate)

module.exports = router