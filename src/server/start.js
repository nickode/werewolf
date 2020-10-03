// Express
const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')

// CORS
var cors = require('cors')

// Global Variables
let APISUCCESS = 0
let APIFAIL = 1

// MySQL
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'wolfdb'
})

// Middleware

app.use(cors())
app.use(bodyparser.json() )
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
})


function initConnection()
{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'wolfdb'
    })
}

app.get('/games/:id', (req, res) => 
{
    initConnection()

    connection.connect()
    
    connection.query(`SELECT * FROM games WHERE id = ${req.params.id} `, (error, results, fields) => {
       console.log(results)
       res.send(results)
    })

    connection.end()
})

app.post('/create', (req, res) => {

    if(req.body == null)
    {
        res.sendStatus(400)
        return
    }

    initConnection()
    connection.connect()
    connection.query(`INSERT INTO games VALUES (id,${req.body.creator},
        ${req.body.players},
        ${req.body.wolves}, 
        ${req.body.hunter}, 
        ${req.body.sear}, 
        ${req.body.bearwatcher}, 
        ${req.body.medic})`, (error, results, fields) => {
       
       console.log(fields)
       console.log('Game created successfully')
       console.log(error)
       res.send(req.body)
    })
    connection.end()
})

app.get('/join/:gameHostName', (req, res) => {
    initConnection()
    connection.connect()
    connection.query(`SELECT * FROM games WHERE id=${req.body.params.gameHostName}`,(error, results, fields) => {

        res.send(results.json());
    })
    
})

app.post('/join/', (req, res) => {

    initConnection()
    connection.connect()

    connection.query(`SELECT * FROM games WHERE creator='${req.body.gameHostName}'`, (error, results, fields) => {
        if(error)
        {
            console.log('sending error...')
            console.log(error)
            res.send({'message':'Game not found'})
        }
        else{
            //console.log(results)
            connection.query(`INSERT INTO players VALUES ('${req.body.playerName}', '${req.body.gameHostName}')`,(error2, results2, fields2) => {
                if(error2)
                {
                    console.log(error2)
                    res.send({'message':'Unexepected error when trying to join'})
                }
                else if(results2){
                    console.log(results)
                    res.send(results)
                }
                
          })
        }
       

    })


    
   
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})