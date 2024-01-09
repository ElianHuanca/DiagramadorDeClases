
const Usuario = require('../models/usuario');


const nombreExiste = async( nombre = '' ) => {

    // Verificar si el nombre de usuario existe
    const existeNombre = await Usuario.findOne({ nombre });
    if ( existeNombre ) {
        throw new Error(`El nombre de Usuario: ${ nombre }, ya está registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id no existe ${ id }`);
    }
}



module.exports = {
    existeUsuarioPorId,
    nombreExiste
}

