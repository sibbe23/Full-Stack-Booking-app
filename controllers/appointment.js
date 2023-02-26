const Appointment = require("../models/appointment");

exports.bookAppointment = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = String(req.body.phone);
  Appointment.create({
    name: name,
    email: email,
    phone: phone,
  })
    .then((res) => {
      console.log("Created Product");
    })
    .catch((err) => console.log(err));
};
exports.getAllAppointments = (req, res, next) => {
  Appointment.findAll()
    .then((appointments) => {
      return res.json({appointments})
      })
    .catch((err) => console.log(err));
};

exports.deleteAppontment = (req, res, next) => {
  const id = req.params.id;
  Appointment.findByPk(id)
    .then((appointment) => {
      return appointment.destroy();
    }).then(result=>{
      console.log("deleted");
    })
    .catch((err) => console.log(err));
};
exports.getEditAppointment = (req, res, next) => {
  // const editMode = req.query.edit;
  // if (!editMode) {
  //   return res.redirect("/");
  // }
  const id = req.params.id;
  Appointment.findByPk(id)
  .then(appointment=>{
    return res.json({appointment});
  }).catch(err=>console.log(err));

};
exports.updateAppointment = (req, res, next) => {
  const id = req.params.id;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  const updatedPhone = req.body.phone;
  Appointment.findByPk(id)
  .then(appointment=>{
    appointment.name=updatedName;
    appointment.email=updatedEmail;
    appointment.phone=updatedPhone;
    return appointment.save();
  })
  .then(result=>{
    console.log("Updated");
    return res.json({result});
    
  })
  .catch(err=>console.log(err));
};
