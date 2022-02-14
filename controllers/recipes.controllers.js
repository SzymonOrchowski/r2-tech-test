const { fetchAllRecipes, getRecipeById } = require('../models/recipes.models')

exports.getAllRecipes = (req, res, next) => {
    const { exclude_ingredients } = req.query
    fetchAllRecipes(exclude_ingredients)
    .then((recipes) => {
        res.status(200).send({recipes})
    })
    .catch(next)
}

exports.getRecipeById = (req, res, next) => {
    const { id } = req.params
    getRecipeById(id)
    .then((recipe) => {
        res.status(200).send(recipe[0])
    })
    .catch(next)
}