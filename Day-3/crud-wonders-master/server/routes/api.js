const express = require('express')
const router = express.Router()

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]

router.get('/wonders', function (req, res) {
    res.send(wonders)
})

router.post('/wonder', function (req, res) {
    wonders.push({
        name: req.body.name,
        location: req.body.location,
        visited: false
    })
    res.end()
})

router.put('/wonder/:wonderID', function (req, res) {
    const wonderName = req.params.wonderID
    wonders.find(w => w.name === wonderName).visited = true
    res.end()
})

router.delete('/wonder/:wonderID', function (req, res) {
    const wonderName = req.params.wonderID
    const index = wonders.findIndex(w => w.name === wonderName)
    wonders.splice(index, 1)
    res.end()
})

module.exports = router