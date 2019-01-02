const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

let alumnoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido_paterno: {
        type: String,
        required: true
    },
    apellido_materno: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Number,
        required: true
    },
    sexo: String,
    foto_id: String,
    fecha_inscripcion: Number
});

alumnoSchema.plugin(mongoosePaginate);

let Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;