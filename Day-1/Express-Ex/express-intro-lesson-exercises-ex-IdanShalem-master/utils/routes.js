const express = require('express')
const router = express.Router()
const store = require( '../utils/store' )
const books = require( '../utils/books' )

router.get( '/shutdown', () => {
    console.log('Server stopped by shutdown route')
    process.exit()
} )

router.get( '/store', ( request, response ) => response.send( store ) )

router.get( '/item/:name', ( request, response ) => {
    function fibn(a, s){let b=0;for(const c of s){if(c.name===a)return b;b++}return-1}
    const index = fibn( request.params.name, store )
    response.send( store[ index ] )
} )

router.get( '/books', ( request, response ) => {
    response.json( books )
} )

module.exports = router
