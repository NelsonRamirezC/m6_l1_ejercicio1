const express = require('express')
const moment = require('moment');
const randomWords = require('random-words');


moment.locale("ES"); 

const app = express()

app.get('/', function (req, res) {
  res.send(`
    <ul>
      <li>Día: ${moment().format('dddd')}</li>
      <li>Número día: ${moment().format('D')}</li>
      <li>Mes: ${moment().format('MMMM')}</li>
      <li>Año: </li>
      <li>Hora: </li>
      <li>Minutos: </li>
      <li>Segundos: </li>
    </ul>
  `)
})

app.get('/azar', function(req, res){
  console.log(randomWords())
  res.send(`<h1>${randomWords({exactly: 1, maxLength: 10})}</h1>`)
})

app.put('/azar', function(req, res){
  res.send("azar número")
})

app.listen(3000,() => console.log("Servidor escuchando en http://localhost:3000"))