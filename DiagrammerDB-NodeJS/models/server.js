const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

const path = require('path');
const http = require('http');
const socketio = require('socket.io');


const Sockets = require('./sockets');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.paths = {
            auth:       '/api/auth',
            usuarios:   '/api/usuarios',
            proyectos:  '/api/proyectos'
        }

        // Conectar a base de datos
        this.conectarDB();

        // Http server
        this.server = http.createServer( this.app );

        // Configuraciones de sockets
        this.io = socketio( this.server, { /* configuraciones */ } );

        // Inicializar sockets
        //this.sockets = new Sockets( this.io );

    }

    async conectarDB() {
        await dbConnection();
    }

    configurarSockets() {
        new Sockets( this.io );
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        //this.app.use( express.static('public') );
        
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
    }

    routes() {
        this.app.use( this.paths.usuarios, require('../routes/usuarios'));
        this.app.use( this.paths.auth, require('../routes/auth'));
        this.app.use( this.paths.proyectos, require('../routes/proyectos'));
    }

    /*listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }*/

    execute(){

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Inicializar sockets
        this.configurarSockets();

        this.server.listen( this.port,()=>{
            console.log('Server corriendo en puerto:', this.port );
        })
    }
}




module.exports = Server;
