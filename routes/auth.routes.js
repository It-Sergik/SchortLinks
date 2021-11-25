const {Router} = require('express');
const User = require('../model/User');
const router = Router();

// /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body;

    } catch (e) {
        res.status(500).json('Ошибкаб попробуйте еще раз');
    }
});

// /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

    } catch (e) {
        res.status(500).json('Ошибкаб попробуйте еще раз');
    }
})

module.exports = router;