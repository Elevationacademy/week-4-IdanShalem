const urllib = require('urllib')

urllib.request('http://www.omdbapi.com/?apikey=8bb8083a&t=The Lion King', function(err, response){
    const movie = JSON.parse(response.toString())
    console.log(movie.Released)
})