const { Router } = require("express");
const { getProyecto, 
    getProyectos, 
    createProyecto, 
    deleteProyecto, 
    updateProyecto 
} = require("../controllers/proyectos");

const router = Router();

router.get('/proyecto/:id', getProyecto );

router.get('/:idUser', getProyectos);

router.post('/',createProyecto);

router.put('/:id',updateProyecto);

router.delete('/:id', deleteProyecto);

module.exports = router;