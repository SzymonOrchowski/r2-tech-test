const db = require('../')

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
}

module.exports = { seed }