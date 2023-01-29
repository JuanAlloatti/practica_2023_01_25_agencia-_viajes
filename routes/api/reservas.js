const { getAll } = require('../../models/reservas.models');
const { getById } = require('../../models/travels.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll()
        res.json(result)
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

router.post('/:clientId/:viajeId', async (req, res) => {
    const { clientId } = req.params[0];
    const { viajeId } = req.params[1];
    try {
        const [result] = await hacerReserva(clientId, viajeId);
        res.json(result)
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router;