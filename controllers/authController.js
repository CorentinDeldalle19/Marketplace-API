const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthController{
    static async register(req, res){
        try{
            const { name, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({ name, email, password: hashedPassword });
            res.status(201).json(user);
        } catch (err){
            res.status(400).json({ error: err.message });
        }
    }

    static async login(req, res){
        try{
            const { email, password } = req.body;
            const user = await User.findOne({ where : { email }});
            if (!user){
                return res.status(404).json({ error: 'User not found' });
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword){
                return res.status(401).json({ error: error.message});
            }
            const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.status(200).json({ token });
        } catch (err){
            res.status(400).json({ error: err.message});
        }
    }

    static async authenticateToken(req, res){
        const token = req.headers['authorization'];
        if (!token){
            return res.sendStatus(403);
        }
        jwt.verify(token, 'your_jwt_secret', (err, user) => {
            if (err){
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    }
}

module.exports = AuthController;