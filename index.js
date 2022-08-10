const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const studentsRoutes = require('./routes/students')

// j'autorise le frontend a acceder a mon server
app.use(cors())

// j'autorise les requetes avec des données
app.use(express.json())

app.use('/', studentsRoutes)

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})