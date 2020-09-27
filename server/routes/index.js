var express = require('express');
const patientController = require('../controllers').patient;
const doctorController = require('../controllers').doctor;
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>
  res.render('Get end point is not working')
);

// Patients router
router.get('/api/patient', patientController.list);
router.get('/api/patient/:id', patientController.getById);
router.post('/api/patient', patientController.add);
router.put('/api/patient/:id', patientController.update);
router.delete('/api/patient/:id', patientController.delete);


// Doctors' router
router.get('/api/doctor', doctorController.list);
router.get('/api/doctor/:id', doctorController.getById);
router.post('/api/doctor', doctorController.add);
router.put('/api/doctor/:id', doctorController.update);
router.delete('/api/doctor/:id', doctorController.delete);


module.exports = router;
