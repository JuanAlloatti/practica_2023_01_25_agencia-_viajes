const { getAll, getById, create, update, deleteById } = require('../../models/clients.model');

const router = require('express').Router();

// ---------->> GET <<----------
router.get('/', async (req, res) => {
    try {
        const [result] = await getAll()
        res.json(result)
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

router.get('/:clientId', async (req, res) => {
    const { clientId } = req.params;
    try {
        const [result] = await getById(clientId);
        if (result.length === 0) {
            res.json({ fatal: "El cliente solicitado no ha sido encontrado" });
        }
        res.json(result[0]);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

// ---------->> POST << ----------
router.post('/', async (req, res) => {

    try {
        const [result] = await create(req.body);
        const [cliente] = await getById(result.insertId)
        res.json(cliente[0])
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

// ---------->> PUT << ----------
router.put('/:clientId', async (req, res) => {
    const { clientId } = req.params
    try {
        const [result] = await update(clientId, req.body);
        const [cliente] = await getById(clientId);
        res.json(cliente[0]);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

// ---------->> DELETE << ----------
router.delete('/:clientId', async (req, res) => {
    const { clientId } = req.params;
    try {
        const [result] = await deleteById(clientId);
        res.json({ message: 'Se ha borrado el cliente' });
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router;