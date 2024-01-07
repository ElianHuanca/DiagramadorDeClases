const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],        
    },
    diagramObject: {
        type: Object,//JSON
        allowNull:true,        
    },
    idUser:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required : true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});



ProyectoSchema.methods.toJSON = function() {
    const { __v,_id, ...proyecto  } = this.toObject();
    proyecto.id = _id;
    return proyecto;
}

module.exports = model( 'Proyecto', ProyectoSchema );
