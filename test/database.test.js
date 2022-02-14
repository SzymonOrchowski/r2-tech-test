const db = require('../db');
const testData = require('../db/data/test-data/data.json');
const { seed } = require('../db/seeds/seed');

beforeAll(async () => await seed(testData) )
afterAll(async () => await db.end() )

describe('database-seed-test', ()=>{
  test('Check if seed.js creates proper table structure in database', () => {
    return db
    .query('SELECT * FROM recipes')
    .then(data => {
      expect(data.fields[0].name).toBe('id');
      expect(data.fields[1].name).toBe('original_id')
      expect(data.fields[2].name).toBe('imageurl')
      expect(data.fields[3].name).toBe('instructions')
      expect(data.fields[4].name).toBe('ingredients')
    })
    .catch(err => {
      expect(err).toBe(undefined);
    })
  })
  test('Check if data is seeded into database', () => {
    return db
    .query('SELECT * FROM recipes')
    .then(({rows}) => {
      expect(Array.isArray(rows)).toBe(true)
      expect(rows.length).toBeGreaterThan(0)
      rows.forEach(recipe => {
        expect(recipe).toHaveProperty('original_id')
        expect(typeof recipe.original_id).toBe('string')
        expect(recipe).toHaveProperty('imageurl')
        expect(typeof recipe.imageurl).toBe('string')
        expect(recipe).toHaveProperty('instructions')
        expect(typeof recipe.instructions).toBe('string')
        expect(recipe).toHaveProperty('ingredients')
        expect(typeof recipe.ingredients).toBe('string')
      })
    })
    .catch(err => {
      expect(err).toBe(undefined);
    })
  })
})