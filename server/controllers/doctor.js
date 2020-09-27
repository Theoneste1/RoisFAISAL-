const Doctor = require('../models').Doctor;

module.exports = {
  list(req, res) {
    return Doctor
      .findAll()
      .then((doctors) => res.status(200).send(doctors))
      .catch((error) => { console.log(error) });
  },

  getById(req, res) {
    return Doctor
      .findByPk(req.params.id)
      .then((doctor) => {
        if (!doctor) {
          return res.status(404).send({
            message: 'doctor Not Found',
          });
        }
        return res.status(200).send(doctor);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Doctor
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
          email: req.body.email,
        idNumber:req.body.idNumber,
        phoneNumber:req.body.phoneNumber
      })
      .then((doctor) => res.status(201).send(doctor))
      .catch((error) =>console.log(error)
        // res.status(400).send(error)
        );
  },

  update(req, res) {
    return Doctor
      .findByPk(req.params.id)
      .then(doctor => {
        if (!doctor) {
          return res.status(404).send({
            message: 'doctor Not Found',
          });
        }
        return doctor.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
              email: req.body.email,
            idNumber:req.body.idNumber,
            phoneNumber:req.body.phoneNumber
          })
          .then((doctor) => res.status(200).send({message:'doctor updated'}))
            .catch((error) => {
                console.log(error);
                res.status(400).send(error)
            });
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Doctor
      .findByPk(req.params.id)
      .then(doctor => {
        if (!doctor) {
          return res.status(400).send({
            message: 'doctor Not Found',
          });
        }
        return doctor
          .destroy()
          .then(() => res.status(204).send({message:'doctor removed from record!'}))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
