const express = require('express');

const appointmentController = require('../controllers/appointment');

const router = express.Router();

// appointments => GET
router.get('/', appointmentController.getAllAppointments);
router.get('/:id', appointmentController.getEditAppointment);

// appointments => POST
router.post('/booking', appointmentController.bookAppointment);


//// appointments => PUT
router.put('/:id', appointmentController.updateAppointment);

// appointments => DELETE
router.delete('/:id', appointmentController.deleteAppontment);


module.exports = router;
