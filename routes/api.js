const apiRouter = require('express').Router();

const { getAllRecipes, getRecipeById, postRecipe } = require('../controllers/recipes.controllers')

apiRouter.route('/').get((_, res) => {
  res.json({ message: 'ok' });
});
apiRouter.route('/recipes').get(getAllRecipes).post(postRecipe)
apiRouter.route('/recipes/:id').get(getRecipeById)

module.exports = apiRouter;
