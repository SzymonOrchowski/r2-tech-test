const apiRouter = require('express').Router();

const { getAllRecipes, getRecipeById } = require('../controllers/recipes.controllers')

apiRouter.route('/').get((_, res) => {
  res.json({ message: 'ok' });
});
apiRouter.route('/recipes').get(getAllRecipes)
apiRouter.route('/recipes/:id').get(getRecipeById)

module.exports = apiRouter;
