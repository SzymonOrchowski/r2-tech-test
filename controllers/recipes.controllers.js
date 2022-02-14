const { fetchAllRecipes } = require('../models/recipes.models')

exports.getAllRecipes = (req, res, next) => {
    fetchAllRecipes()
    .then((recipes) => {
        res.status(200).send({recipes})
    })
    .catch(next)
}