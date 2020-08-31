const express = require( 'express' )
const app = express()
const path = require('path')

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))


app.get('/priceCheck/:furnitureName', function (request, response) {
    const furnitureName = request.params.furnitureName
    const furniture = (store.find(f => f.name === furnitureName) || null )
    if(furniture){
        response.send({price:furniture.price})
    } else{
        response.send({price:furniture})
    }
    
})

app.get(`/buy/:furnitureName`, function(request, response){
    const furnitureName = request.params.furnitureName
    const furniture = (store.find(f => f.name === furnitureName) || null )
    if(furniture){
        furniture.inventory--
        response.send(furniture)
    } else{
        response.send(furniture)
    }
})

app.get(`/sale`, function(request, response){
    const params = request.query
    if(params.admin === 'true'){
        store.forEach(f => {if(f.inventory > 10){f.price /= 2}})
    } 
    response.send(store)
})

const port = 3000
app.listen( port, () => console.log( `Running server on port ${ port }` ) )