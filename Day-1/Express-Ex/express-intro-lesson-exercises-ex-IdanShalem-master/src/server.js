require( 'dotenv' ).config()
const express = require( 'express' )
const app = express()
const testRoutes = require( '../utils/routes' )
const port = process.env.SERVER_PORT || 3000
const path = require('path')
const store = require( '../utils/store' )
const books = require( '../utils/books' )


const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.get('/books/:bookID', function (request, response) {
    let id = request.params.bookID
    response.send(data[id])
})

// Exercise 1 serve dist and node_modules here

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use( express.static(path.join(__dirname,'..', 'node_modules')))

/* -------- Do not remove above this line ----------------*/



// Spot check 1 - your code here



// Spot check 2 - your code here



// Spot check 3 - your code here



// Spot check 4 - your code here



// Exercise 1 - your code here



// Exercise 2 - your code here



// Exercise 4 - your code here



// Exercise 6 - your code here






/* -------- Do not remove below this line ----------------*/

let socket = app.listen( port, () => console.log( `Running server on port ${ port }` ) )

module.exports = { app, socket }
