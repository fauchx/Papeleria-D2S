const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'fabian28',
    host: 'localhost',
    port: 5432,
    database: 'papeleriads2'
    
})
module.exports = pool;