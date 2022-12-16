const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /items should return a list of items', async () => {
    const res = await request(app).get('/api/v1/items');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot();
  });

  it('GET /rooms should return a list of rooms', async () => {
    const res = await request(app).get('/api/v1/rooms');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot();
  });

  it('GET /user_items should return a list of user_items', async () => {
    const res = await request(app).get('/api/v1/userItem');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot();
  });

  const fakeUser = {
    userName: 'testuser',
    password: 'testpassword',
  };

  it('creates a new user', async () => {
    const resp = await request(app).post('/api/v1/users').send(fakeUser);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "id": "1",
      }
    `);
    expect(resp.body).toEqual({
      id: expect.any(String),
    });
  });

  it('signs in an existing user', async () => {
    await request(app).post('/api/v1/users').send(fakeUser);
    const res = await request(app)
      .post('/api/v1/users/sessions')
      .send({ userName: 'testuser', password: 'testpassword' });
    expect(res.status).toEqual(200);
  });

  afterAll(() => {
    pool.end();
  });
});
