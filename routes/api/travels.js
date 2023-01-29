const { getById, getAll, create, update, deleteById } = require('../../models/travels.model');

const router = require('express').Router();

router.get('', async (req, res) => {
    try {
        const [result] = await getAll()
        res.json(result)
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

router.get('/:viajeId', async (req, res) => {
    const { viajeId } = req.params;
    try {
        const [result] = await getById(viajeId);
        if (result.length === 0) {
            res.json({ fatal: "No se ha encontrado el viaje" });
        }
        res.json(result[0])
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

// ---------->> POST << ----------
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [cliente] = await getById(result.insertId);
        res.json(cliente[0]);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

// ---------->> PUT << ----------
router.put('/:viajeId', async (req, res) => {
    const { viajeId } = req.params;
    try {
        const [result] = await update(viajeId, req.body);
        const [viaje] = await getById(viajeId);
        res.json(viaje[0]);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

// ---------->> DELETE << ----------
router.delete('/:viajeId', async (req, res) => {
    const { viajeId } = req.params
    try {
        const [result] = await deleteById(viajeId);
        res.json({ message: "Se ha eliminado el viaje" })
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router;