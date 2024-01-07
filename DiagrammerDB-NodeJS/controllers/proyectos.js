const { response, request } = require('express');
const Proyecto = require('../models/proyecto');

const getProyecto = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const proyecto = await Proyecto.findById(id);
        res.json(proyecto);
    } catch (error) {
        res.json({ message: error });
    }
}

const getProyectos = async (req = request, res = response) => {
    const { idUser } = req.params;
    const query = { idUser: idUser };
    const proyectos = await Proyecto.find(query);
    res.json(proyectos);
}

const createProyecto = async (req = request, res = response) => {
    //res.json("hola");
    const { nombre, diagramObject, idUser } = req.body;
    const newProyecto = {
        nombre,
        diagramObject,
        idUser
    }
    const proyecto = new Proyecto(newProyecto);
    await proyecto.save();
    res.json(proyecto);
}

const updateProyecto = async (req = request, res = response) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const proyecto = await Proyecto.findByIdAndUpdate(id, resto);

    res.json(proyecto);
}

const deleteProyecto = async (req, res = response) => {
    const { id } = req.params;
    // Fisicamente lo borramos
    const proyecto = await Proyecto.findByIdAndDelete(id);
    //const proyecto = await proyecto.findByIdAndUpdate( id, { estado: false } );

    res.json(proyecto);
}

module.exports = {
    getProyecto,
    getProyectos,
    createProyecto,
    updateProyecto,
    deleteProyecto
}
