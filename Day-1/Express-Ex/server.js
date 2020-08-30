const express = require('express')

const app = express()

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/maps', function (request, response) {
    response.send("Here's some stuff related to mapssssssssss")
})

app.get('/shoobi', function (request, response) {
    response.send("This here is the shoobi *route*")
})

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})