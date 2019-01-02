const express = require('express');
const alumnosCtrl = require('../controllers/alumnos.controller');
let router = express.Router();

router.route('/')
  .get(alumnosCtrl.index)
  .post(alumnosCtrl.create);

router.route('/:id')
  .get(alumnosCtrl.show)
  .put(alumnosCtrl.update)
  .delete(alumnosCtrl.destroy);

module.exports = router;