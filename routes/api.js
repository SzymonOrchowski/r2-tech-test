const apiRouter = require('express').Router();

const { getAllRecipes } = require('../controllers/recipes.controllers')

apiRouter.route('/').get((_, res) => {
  res.json({ message: 'ok' });
});
apiRouter.route('/recipes').get(getAllRecipes)

module.exports = apiRouter;
