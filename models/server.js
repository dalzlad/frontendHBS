const express = require('express')
//Instalar el paquete dotenv

class server{
    
    constructor () {
        this.app = express()

        this.port = process.env.PORT

        this.middlewares()//Seguridad

        this.routes()

    }

     listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

//Exportar la clase server
module.exports = server