let money = 3100
let chairPrice = 120

setInterval(function(){
    $.get(`priceCheck/chair`, function(obj){
        if(obj.price < chairPrice){
            $.get(`buy/chair`, function(furniture){ console.log("bought chair for less") })
        } else{
            console.log("still waiting for a price drop...")  
        }
        chairPrice = obj.price
    })
    console.log(chairPrice)
}, 3000)

const priceCheck = function(name){
    $.get(`priceCheck/${name}`, function(obj){
        if(money >= obj.price){
            money -= obj.price
            $.get(`buy/${name}`, function(furniture){
                $('#display').empty().append("<p>Congratulations, you've just bought" +
                ` ${furniture.name} for ${furniture.price}.` +
                ` There are ${furniture.inventory} left now in the store</p>` +
                `<p>You have ${money} left`)
            })
        } else{
            $('#display').empty().append('You should get a job')
        }
    })
}


$('#submit-search').on('click', function(){
    const value = $('#furniture-search').val()
   $.get(`priceCheck/${value}`, function(Obj){
        $('#display').empty().append(`<p>${Obj.price}</p>`)
   })
    $('#furniture-serch').val('')
})

$('#submit-buy').on('click', function(){
    const value = $('#furniture-buy').val()
    priceCheck(value)
    $('#furniture-buy').val('')
})