const router = require('express').Router();

router.use('/clients', require('./api/clients'));
router.use('/travels', require('./api/travels'));
router.use('/hotels', require('./api/hotels'));
router.use('/reserva', require('./api/reservas'));

module.exports = router;