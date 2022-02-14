const { fetchAllRecipes, getRecipeById, addRecipe } = require('../models/recipes.models')

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

exports.postRecipe = (req, res, next) => {
    const { body } = req
    addRecipe(body)
    .then((recipe) => {
        res.status(201).send({recipe})
    })
    .catch(next)
}