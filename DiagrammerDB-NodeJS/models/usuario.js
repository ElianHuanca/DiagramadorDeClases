const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    estado: {
        type: Boolean,
        default: true
    },
});



UsuarioSchema.methods.toJSON = function() {
    const { __v, password,_id, ...usuario  } = this.toObject();
    usuario.id = _id;
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );
