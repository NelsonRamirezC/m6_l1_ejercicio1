const express = require('express')
const moment = require('moment');
moment.locale("ES"); 

const app = express()

app.get('/', function (req, res) {
  res.send(`
    <ul>
      <li>Día: ${moment().format('dddd')}</li>
      <li>Número día: </li>
      <li>Mes: </li>
      <li>Año: </li>
      <li>Hora: </li>
      <li>Minutos: </li>
      <li>Segundos: </li>
    </ul>
  `)
})

app.listen(3000,() => console.log("Servidor escuchando en http://localhost:3000"))