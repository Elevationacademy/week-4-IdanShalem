const express = require('express')
const router = express.Router()
const validator = require('validator')

const wordCounter = {
    tea: 2,
    coffe: 87,
    steak: 32,
    pizza: 43
}

const cleanWord = (word) =>  word.replace(/[^a-zA-Z]+/g, '').toLowerCase()

router.get('/sanity', function(req, res){
    res.send('Server up and running')
})

router.get('/word/:word', function(req, res){
    const word = cleanWord(req.params.word)
    const countObj = {}
    if(wordCounter[word]){
        countObj['count'] = wordCounter[word] 
        
    } else{
        countObj['count'] = 0 
    }
    res.send(countObj)
})

router.get('/total', function(req, res) {
    const wordsValues = Object.values(wordCounter)
    const objToSend = { text: 'Total count', count: 0 }
    wordsValues.forEach(word => objToSend.count += word)
    res.send(objToSend)
})

router.post('/word', function(req, res){
    const word = cleanWord(req.body.word)
    const objToSend = {text: `Added ${word}`}
    if(wordCounter[word]){
        wordCounter[word]++
        objToSend['currentCount'] =  wordCounter[word] 
    } else{
       wordCounter[word] = 1
       objToSend['currentCount'] =  wordCounter[word]  
    }
    res.send(objToSend)
})

router.post('/words', function(req, res){
    const numOldWords = Object.keys(wordCounter).length
    const sentence = req.body.sentence
    const sentenceArr = sentence.split(' ')
    const objToSend = {text: `Added ${sentenceArr.length} words, ${numOldWords} already existed`}
    sentenceArr.forEach(word => {
        word = cleanWord(word)
        if(wordCounter[word]){
            wordCounter[word]++
        } else{
            wordCounter[word] = 1
        }
    })
    objToSend['currentCount'] = -1
    res.send(objToSend)
})

module.exports = router