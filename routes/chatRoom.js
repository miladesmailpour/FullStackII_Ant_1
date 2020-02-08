const express = require('express')
const router = express.Router()
const chatRoom = require('../models/chatRoom')

// Getting All
router.get('/', async (req, res) => {
    //res.send('Test REST API by REST Client EXTENSION')
    try {
        const chaters = await chatRoom.find()
        res.json(chaters)
    }
    catch (err) {
        res.status(500).json({message : err.message})
    }

})

// Getting one
router.get('/:id', (req, res) => {
    
    res.send(req.params.id)
})

// Creating one
router.post('/', async (req, res) => {
    const chater = new chatRoom({
        name : req.body.name,
        chatToChannel : req.body.chatToChannel
    })
    try {
        const newChater = await chater.save()
        res.status(201).json(newChater)
    }
    catch (err) {
        res.status(400).json({message : err.message})
    }
})

// Updating one, uing patch against put : 
// patchupdate by data which passing by user for example just name, phone or something else
// but put updating all information
router.patch('/', (req, res) => {
    //
})

// Deleting one
router.delete('/:id', (req, res) => {
    //
})

module.exports = router