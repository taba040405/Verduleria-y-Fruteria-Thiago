const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', function(request, response){
    var frutasVerduras = [{nombre: 'Lechuga', tipo: 'Verdura', precio: 90, enStock: false},{nombre: 'Manzana', tipo: 'Fruta', precio: 220, enStock: true},
    {nombre: 'Limón', tipo: 'Fruta', precio: 105, enStock: false}, {nombre: 'Naranja', tipo: 'Fruta', precio: 60, enStock: true}, 
    {nombre: 'Mandarina', tipo: 'Fruta', precio: 90, enStock: true}, {nombre: 'Manzana Verde', tipo: 'Fruta', precio: 280, enStock: true},
    {nombre: 'Sandía', tipo: 'Fruta', precio: 65, enStock: true}, {nombre: 'Pera', tipo: 'Fruta', precio: 200, enStock: true},
    {nombre: 'Berenjena', tipo: 'Verdura', precio: 180, enStock: false}, {nombre: 'Morrón Rojo', tipo: 'Verdura', precio: 330, enStock: true},
    {nombre: 'Choclo', tipo: 'Verdura', precio: 190, enStock: false}, {nombre: 'Tomáte Perita', tipo: 'Fruta', precio: 300, enStock: true}];

    response.render('views/index.ejs', {titulo : "Verduleria Thiago", frutasVerduras: frutasVerduras});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});