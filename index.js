/*require('dotenv').config(); //Cargar toda la importación

const Server = require('./models/server')

const server = new Server() //Creando un objeto de Server

server.listen()
*/

const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8081

//Servidor de contenido estático
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials');


app.get('/', (req, res) => {
    res.render('listarProductos',
    {
        titulo: 'Home',
        nombre: 'Diego López'
    })
})

app.get('/contacto', (req, res) => {
    res.sendFile('contacto')
})

app.get('/clientes', (req, res) => {
    res.render('clientes',
    {
        titulo: 'Listado Clientes',
        nombre: 'Diego López',
        rol1:'Admin'
    })
})

app.listen(puerto, ()=> {
    console.log(`Escuchando por el puerto ${puerto}`)
})
