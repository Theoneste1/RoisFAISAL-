const Patient = require('../models').Patient;

module.exports = {
  list(req, res) {
    return Patient
      .findAll()
      .then((patients) => res.status(200).send(patients))
      .catch((error) => { console.log(error) });
  },

  getById(req, res) {
    return Patient
      .findByPk(req.params.id)
      .then((patient) => {
        if (!patient) {
          return res.status(404).send({
            message: 'patient Not Found',
          });
        }
        return res.status(200).send(patient);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Patient
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
       Description : req.body.Description
      })
      .then((patient) => res.status(201).send(patient))
      .catch((error) =>console.log(error)
        // res.status(400).send(error)
        );
  },

  update(req, res) {
    return Patient
      .findByPk(req.params.id)
      .then(patient => {
        if (!patient) {
          return res.status(404).send({
            message: 'patient Not Found',
          });
        }
        return patient.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
       Description : req.body.Description
          })
          .then((patient) => res.status(200).send({message:'patient updated'}))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Patient
      .findByPk(req.params.id)
      .then(patient => {
        if (!patient) {
          return res.status(400).send({
            message: 'patient Not Found',
          });
        }
        return patient
          .destroy()
          .then(() => res.status(204).send({message:'Patient removed from record!'}))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
