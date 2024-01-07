const { response } = require('express');
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario');


const login = async (req, res = response) => {

    const { nombre, password } = req.body;

    try {

        // Verificar si el email existe
        const usuario = await Usuario.findOne({ nombre });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - nombre'
            });
        }

        // SI el usuario está activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        res.json(
            usuario,
        )

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}



module.exports = {
    login
}
