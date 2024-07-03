const { User } = require('../models');

class UserController{
    // Créer un nouvel utilisateur
    static async createUser (req, res){
        try{
            const { name, email, password } = req.body;
            const user = await User.create({ name, email, password });
            res.status(201).json(user);
        } catch(err){
            res.status(400).json({ message: err.message })
        }
    }

    // Obtenir tous les utilisateurs
    static async getUsers (req, res){
        try{
            const users = await User.findAll();
            res.status(201).json(users);
        } catch (err){
            res.status(400).json({ message: err.message });
        }
    }

    // Obtenir un utilisateur par son ID
    static async getUserByID (req, res){
        try{
            const { id } = req.params.id;
            const user = await User.findByPk(id);

            if (!user){
                return res.status(404).status({ message: "User not found !"})
            };
            res.status(201).json(user);
        } catch(err){
            res.status(400).json({ message: err.message })
        }
    }

    // Mettre à jour un utilisateur
    static async updateUser (req, res){
        try{
            const { id } = req.params.id;
            const { name, email, password } = req.body;
            const user = await User.findByPk(id);

            if(!user){
                return res.status(404).status({ message: "User not found !"})
            }

            await user.update({ name, email, password });
            res.status(201).json(user);
        } catch(err){
            res.status(400).json({ message: err.message })
        }
    }

    // Supprimer un utilisateur
    static async deleteUser (req, res){
        const { id } = req.params.id;
        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).status({ message: "User not found !"})
        }

        await user.destroy();
        res.status(204).json();
    } catch (error){
        res.status(400).json({ error: error.message });
    }
}

module.exports = UserController;