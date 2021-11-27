const {Router} = require('express');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const router = Router();

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail,
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({min: 6})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const {email, password} = req.body;
        const candidate = await User.findOne({email: email});

        if (candidate) {
            return res.status(400).json('Такой пользователь уже существует');
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password: hashedPassword});
        await user.save();

        res.status(201).json('Пользователь создан')
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