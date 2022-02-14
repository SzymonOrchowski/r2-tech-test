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

exports.getRecipeById = (id) => {
    let sqlQuery = `SELECT * FROM recipes WHERE original_id LIKE $1`

    return db
    .query(sqlQuery, [`recipe-${id}`])
    .then(({rows}) => {
        rows.map(recipe => {recipe.ingredients = JSON.parse(recipe.ingredients)})
        return rows
    })
}

exports.addRecipe = (body) => {
    return db
    .query('SELECT * FROM recipes')
    .then(({rows}) => {
        recipe = [`recipe-${rows.length}`, body.imageUrl, body.instructions, JSON.stringify(body.ingredients)]
        
        sqlQuery = `INSERT INTO recipes (original_id, imageurl, instructions, ingredients) VALUES ($1, $2, $3, $4) RETURNING *`

        return db
        .query(sqlQuery, recipe)
        .then(({rows}) => {
            rows.map(recipe => {recipe.ingredients = JSON.parse(recipe.ingredients)})
            return rows[0]
        })
    })
}