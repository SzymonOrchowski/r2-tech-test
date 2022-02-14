const { fetchAllRecipes } = require('../models/recipes.models')

exports.getAllRecipes = (req, res, next) => {
    const { exclude_ingredients } = req.query
    fetchAllRecipes(exclude_ingredients)
    .then((recipes) => {
        res.status(200).send({recipes})
    })
    .catch(next)
}