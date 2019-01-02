const Alumno = require('../models/Alumnos');

function index(req, res) {
  Alumno.paginate({},{
    page: req.query.page || 1,
    limit: 1,
    sort: {'_id': -1}
  }).then(docs => {
    res.json(docs);
  }).catch(err => {
    console.log(err);
    res.json(err);
  })
}

function create(req, res) {
  Alumno.create({
    codigo: 'ssdess',
    nombre: 'sssdes',
    apellido_paterno: 'sdesss',
    apellido_materno: 'ssss',
    fecha_nacimiento: 11423111,
    sexo: 'sssdes',
    foto_id: 'sssdes',
    fecha_inscripcion: 3334233,
  }).then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
    res.json(err);
  })
}

function show(req, res) {
  Alumno.findById(req.params.id).then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
    res.json(err);
  })
}

function update(req, res) {
  Alumno.findByIdAndUpdate(req.params.id, {
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    apellido_paterno: req.body.apellido_paterno,
    apellido_materno: req.body.apellido_materno,
    fecha_nacimiento: req.body.fecha_nacimiento,
    sexo: req.body.sexo,
    foto_id: req.body.foto_id,
    fecha_inscripcion: req.body.fecha_inscripcion,
  }, {new: true}).then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
    res.json(err);
  })
}

function destroy(req, res) {
  Alumno.findByIdAndRemove(req.params.id).then(doc => {
    res.json(doc);
  }).catch(err => {
    console.log(err);
    res.json(err);
  })
}

module.exports = {index, create, show, update, destroy}