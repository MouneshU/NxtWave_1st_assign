const { Router } = require('express');
const router = Router();
const { create } = require('../models/user');
const { create: _create } = require('../models/address');

router.post('/register', async (req, res) => {
    const { name, address } = req.body;

    try {
        const userId = await create(name);
        await _create(userId, address);
        res.status(201).json({ message: 'User and address created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
