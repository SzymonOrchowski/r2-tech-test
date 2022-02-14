const db = require('../')
const format = require('pg-format')

const seed = (data) => {
    return db
    .query(`DROP TABLE IF EXISTS recipes;`)
    .then(()=>{
        return db
        .query(`CREATE TABLE recipes (
            id SERIAL UNIQUE PRIMARY KEY,
            original_id VARCHAR(15),
            imageUrl VARCHAR(255),
            instructions TEXT,
            ingredients TEXT);`)
    })
    .then(()=>{
        return db
        .query(
            format(`INSERT INTO recipes (original_id, imageUrl, instructions, ingredients) VALUES %L;`,
            data.map(recipe => {
                return [recipe.id, recipe.imageUrl, recipe.instructions, JSON.stringify(recipe.ingredients)]
            }))
        )
    })
}

module.exports = { seed }