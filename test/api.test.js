const supertest = require('supertest');
const server = require('../server');

const request = supertest(server);

const db = require('../db');
const testData = require('../db/data/test-data/data.json');
const { seed } = require('../db/seeds/seed');

beforeEach(async () => await seed(testData) )
afterAll(async () => await db.end() )

test('/api', async () => {
  const { body } = await request.get('/api').expect(200);
  expect(body.message).toBe('ok');
});
