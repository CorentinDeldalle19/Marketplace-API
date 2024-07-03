const { Rating } = require('../models/rating');

class RatingController{
    // Créer une évaluation
    static async createRating (req, res){
        try{
            const { rating, comment } = req.body;
            const note = await Rating.create({ rating, comment });
            res.status(201).json(note);
        } catch(err){
            res.status(400).json({ message: err.message })
        }
    }

    // Obtenir toutes les évaluations
    static async getRatings (req, res){
        try{
            const notes = await Rating.findAll();
            res.status(201).json(notes);
        } catch (err){
            res.status(400).json({ message: err.message });
        }
    }

    // Obtenir une évaluation par son ID
    static async getRatingByID (req, res){
        try{
            const { id } = req.params.id;
            const note = await Rating.findByPk(id);

            if (!note){
                return res.status(404).status({ message: "Rating not found !"})
            };
            res.status(201).json(note);
        } catch(err){
            res.status(400).json({ message: err.message })
        }
    }

    // Modifier une évaluation
    static async updateRating (req, res){
        try{
            const { id } = req.params.id;
            const { rating, comment} = req.body;
            const note = await Rating.findByPk(id);

            if(!note){
                return res.status(404).status({ message: "Rating not found !"})
            }

            await Rating.update({ rating, comment });
            res.status(201).json(note);
        } catch(err){
            res.status(400).json({ message: err.message })
        }
    }

    // Supprimer une évaluation
    static async deleteRating (req, res){
        const { id } = req.params.id;
        const note = await Rating.findByPk(id);

        if(!note){
            return res.status(404).status({ message: "Rating not found !"})
        }

        await note.destroy();
        res.status(204).json();
    } catch (error){
        res.status(400).json({ error: error.message });
    }
}

module.exports = RatingController;