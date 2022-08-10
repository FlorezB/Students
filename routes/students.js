const express = require('express')
const app = express()
const students = require ('../students')

app.get('/students',(req,res)=>{
    res.json(students)
})

app.post('/students', (req, res) => {
    const student = req.body
    const { name } = req.name
    // {
    //   name: req.body.name,
    // }
    
    const doublon = students.find(student=>{
        return student.name === name
       } )
   
       if (!doublon){
         students.push(student)
         res.json(student)
       }else{
         res.status(409).send("student already exists")
       }
    // students.push(student)
  
    // res.json(student)
  })

module.exports = app