const express = require('express')
const app=express()
app.use(express.json())

let notes = []
app.get('/', (req,res)=>{
     res.send('Hello from backend')
})
app.get('/notes', (req,res)=>{
     res.send('Hello from backend')

})
app.post('/notes', (req,res)=>{
     console.log(req.body);
     notes.push(req.body)
     res.json({
          message:"notes created"
     })
})
app.get('/notes', (req,res)=>{
     res.json(notes)
})
app.delete('/notes/:index', (req,res)=>{
     const index = req.params.index
     notes.splice(index,1)
     res.json({
          message:"notes deleted"
     })
})
app.patch('/notes/:index', (req,res)=>{
     const index = req.params.index
     const {title} = req.body
     notes[index].title=title
     res.json({
          message:"notes updated"
     })
})
app.listen(3000,()=>{
     console.log("server is running");     
})