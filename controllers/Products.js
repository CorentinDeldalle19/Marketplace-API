const { Product } = require('../models/product')

class ProductController{
    // Créer un produit
    static async createProduct (req, res){
        try{
            const { name, price, description } = req.body;
            const product = await Product.create({ name, price, description });
            res.status(201).json(product);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    }

    // Obtenir tous les produits
    static async getProducts (req, res){    
        try{
            const products = await Product.findAll();
            res.status(201).json(products);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    }

    // Obtenir un produit par son ID
    static async getProductById (req, res){
        try{
            const id = req.params.id;
            const product = await Product.findByPk(id);

            if (!product){
                return res.status(404).json({ message : "Product not found"})
            }
            res.status(201).json(product);
        } catch (err){
            res.status(400).json({ message: err.message });
        }
    }

    // Mettre à jour un projet
    static async updateProduct(req, res){
        try{
            const { id } = req.params.id;
            const { name, description, price} = req.body;
            const product = await Product.findByPk(id);

            if (!product){
                return res.status(404).json({ message : "Product not found"})
            }

            await product.update({ name, description, price});
            res.status(201).json(product);
        } catch (err){
            res.status(400).json({ message: err.message });
        }
    }

    // Supprimer un produit
    static async deleteProduct (req, res){
        try{
            const { id } = req.params.id;
            const product = await Product.findByPk(id);

            if (!product){
                return res.status(404).json({ message : "Product not found"})
            }
            await product.detroy();
            res.status(204).json()
        } catch (err){
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = ProductController;