const { Order } = require('../models/order')

class OrderController{
    // Créer une commande
    static async createOrder (req, res){
        try{
            const { quantity, totalPrice } = req.body;
            const order = await Order.create({ quantity, totalPrice });
            res.status(201).json(order);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    }

    // Obtenir toutes les commandes
    static async getOrders (req, res){    
        try{
            const orders = await Order.findAll();
            res.status(201).json(orders);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    }

    // Obtenir une commande par son ID
    static async getOrderByID (req, res){
        try{
            const id = req.params.id;
            const order = await Order.findByPk(id);

            if (!order){
                return res.status(404).json({ message : "Order not found"})
            }
            res.status(201).json(order);
        } catch (err){
            res.status(400).json({ message: err.message });
        }
    }

    // Mettre à jour une commande
    static async updateOrder(req, res){
        try{
            const { id } = req.params.id;
            const { quantity, totalPrice } = req.body;
            const order = await Order.findByPk(id);

            if (!order){
                return res.status(404).json({ message : "Order not found"})
            }

            await order.update({ quantity, totalPrice });
            res.status(201).json(order);
        } catch (err){
            res.status(400).json({ message: err.message });
        }
    }

    // Supprimer une commande
    static async deleteOrder (req, res){
        try{
            const { id } = req.params.id;
            const order = await Order.findByPk(id);

            if (!order){
                return res.status(404).json({ message : "Order not found"})
            }
            await order.detroy();
            res.status(204).json()
        } catch (err){
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = OrderController;