const { getAll, create, update, getById, deleteById } = require('../../models/hotels.model');

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

router.get('/:hotelId', async (req, res) => {
    const { hotelId } = req.params;
    try {
        const [result] = await getById(hotelId);
        if (result.length === 0) {
            res.json({ fatal: "No se ha encontrado el hotel" });
        }
        res.json(result[0]);
    }
    catch (error) {
        res.json({ fatal: error.message });
    }
})

// ---------->> POST << ----------
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [hotel] = await getById(result.insertId)
        res.json(hotel[0]);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }

})

// ---------->> PUT << ----------
router.put('/:hotelId', async (req, res) => {
    const { hotelId } = req.params
    try {
        const [result] = await update(hotelId, req.body);
        const [hotel] = await getById(hotelId);
        res.json(hotel[0]);
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})

// ---------->> DELETE << ----------
router.delete('/hotelId', async (req, res) => {
    const { hotelId } = req.params;
    try {
        const [result] = await deleteById(hotelId);
        res.json({ message: "El hotel se ha borrado" })
    }
    catch (error) {
        res.json({ fatal: error.message })
    }
})












module.exports = router;
