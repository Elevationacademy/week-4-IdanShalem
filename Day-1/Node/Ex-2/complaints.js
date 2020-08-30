const consts = require('./consts')
const complaintHandler = require('./complaintsHandler')

let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: consts.EMOTIONS
}

complaintHandler.handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
complaintHandler.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
complaintHandler.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."