const express = require('express')

const app = express()
app.use(express.json())

const notes = []
// POST notes
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message : "note created successfully"
    })
})
// GET notes
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes
    })
})
// DELETE notes
app.delete('/notes/:id',(req,res)=>{
    const id = req.params.id
    delete notes[id]
    res.status(200).json({
        message : "note deleted successfully"
    })
})
// PATCH notes
app.patch('/notes/:id',(req,res)=>{
    const index = req.params.id
    const description = req.body.description
    notes[index].description = description
    res.status(200).json({
        message : "note updated successfully"
    })
})

module.exports = app