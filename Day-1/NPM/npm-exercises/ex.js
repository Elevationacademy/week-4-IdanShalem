// //Ex. 1
// //Check whether "shoobert@dylan" is a valid email (should be false)
// const valid = require('validator')

// console.log(valid.isEmail("shoobert@dylan"))

// //Ex. 2
// //Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
// console.log(valid.isMobilePhone("786-329-9958", 'en-US'))

// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"
// //Ultimately, it should print "im so excited"
// console.log(valid.blacklist(text, blacklist).toLowerCase())


const faker = require('faker')

const makeHuman = function(num){
    for(let i = 0; i < num; i++){
        let name = faker.name.findName()
        let img = faker.image.avatar()
        let companyName = faker.company.companyName()
        console.log(`${name}, ${img}, ${companyName}`)
    }
}

makeHuman(2)