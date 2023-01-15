const{
    createPool

} = require('mysql')

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '7507',
    database: 'ishmael',
    connectionLimit: 10
})

pool.query('SELECT * FROM student', (err, results) => {
    if(err) {
        return console.error(err.message)
    }
    return console.log(results)

})