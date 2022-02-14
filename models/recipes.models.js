const db = require('../db')

exports.fetchAllRecipes = (exclude_ingredients) => {
    let sqlQuery = `SELECT * FROM recipes`

    safeArray = []

    if (exclude_ingredients) {
        const array = exclude_ingredients.split(',')
        array.forEach((element) => {
            if (element[element.length -1] === 's') {
                array.push(element.slice(0, element.length -1))
            }
        })

        sqlQuery += ' WHERE'

        array.forEach((ingredient, index) => {
            safeArray.push(`%"${ingredient}"%`)
            sqlQuery += ` ingredients NOT LIKE $${index + 1} `
            if (index !== array.length -1) sqlQuery += 'AND'
        })
    }

    return db
    .query(sqlQuery, safeArray)
    .then(({rows}) => {
        rows.map(recipe => {recipe.ingredients = JSON.parse(recipe.ingredients)})
        return rows
    })
}