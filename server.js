const { response } = require('express');
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, '/views'));

app.use(express.static(__dirname + "/public"));

app.get('/', function(request, response){
    var frutasVerduras = [{nombre: 'Lechuga', tipo: 'Verdura', precio: 90, enStock: false, img: 'https://static.libertyprim.com/files/familles/romaine-large.jpg?1569271844'},
    {nombre: 'Manzana', tipo: 'Fruta', precio: 220, enStock: true, img: 'https://cdn.shopify.com/s/files/1/0356/8687/5195/products/apple-2736410_1920.png?v=1585365986'},
    {nombre: 'Limón', tipo: 'Fruta', precio: 105, enStock: false, img: 'https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/09/11/59b612d1476cf.jpeg'}, 
    {nombre: 'Naranja', tipo: 'Fruta', precio: 60, enStock: true, img: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c16d.png'}, 
    {nombre: 'Mandarina', tipo: 'Fruta', precio: 90, enStock: true, img:'http://pngimg.com/uploads/mandarin/mandarin_PNG51.png  '}, 
    {nombre: 'Manzana Verde', tipo: 'Fruta', precio: 280, enStock: true, img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c116.png'},
    {nombre: 'Sandía', tipo: 'Fruta', precio: 65, enStock: true, img: 'https://bestfruitchile.cl/wp-content/uploads/2021/04/sandia.jpg'}, 
    {nombre: 'Pera', tipo: 'Fruta', precio: 200, enStock: true, img: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c17d.png'},
    {nombre: 'Berenjena', tipo: 'Verdura', precio: 180, enStock: false, img: 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c21a.png'}, 
    {nombre: 'Morrón Rojo', tipo: 'Verdura', precio: 330, enStock: true, img: 'https://www.verduleriavenado.com.ar/wp-content/uploads/2020/04/pimiento-rojo.jpg'},
    {nombre: 'Choclo', tipo: 'Verdura', precio: 190, enStock: false, img: 'https://granjaus.com/wp-content/uploads/2019/04/choclo2.jpg'}, 
    {nombre: 'Tomáte Perita', tipo: 'Fruta', precio: 300, enStock: true, img: 'https://puntovegetal.com.ar/static/media/productos/tomate_perita.png'}];

    response.render('index.ejs', {titulo : "Verduleria Thiago", frutasVerduras: frutasVerduras});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});