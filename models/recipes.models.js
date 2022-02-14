const db = require('../db')

exports.fetchAllRecipes = () => {
    let sqlQuery = `SELECT * FROM recipes`

    return db
    .query(sqlQuery)
    .then(({rows}) => {
        rows.map(recipe => {recipe.ingredients = JSON.parse(recipe.ingredients)})
        return rows
    })
}