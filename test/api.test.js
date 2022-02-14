const supertest = require('supertest');
const server = require('../server');

const request = supertest(server);

const db = require('../db');
const testData = require('../db/data/test-data/data.json');
const { seed } = require('../db/seeds/seed');

beforeEach(async () => await seed(testData) )
afterAll(async () => await db.end() )

describe('api-endpoints-test', () => {
    test('/api', async () => {
      const { body } = await request.get('/api').expect(200);
      expect(body.message).toBe('ok');
    });
    test('/api/recipes respond with status code 200, and an array of objects', async () => {
      const { body } = await request.get('/api/recipes').expect(200);
      expect(Array.isArray(body.recipes)).toBe(true);
      expect(body.recipes.length).toBeGreaterThan(0);
    });
    test('/api/recipes reacts to exclude_ingredients query and results with reduced number of results', async () => {
      const fullDatabase = await request.get('/api/recipes');
      const reducedDatabase = await request.get('/api/recipes?exclude_ingredients=flax,kale,lime,double cream,cocoa nibs');
      expect(fullDatabase.body.recipes.length).toBeGreaterThan(reducedDatabase.body.recipes.length);
    });
})
