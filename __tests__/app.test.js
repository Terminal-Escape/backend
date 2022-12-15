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
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "item_description": "A small Key for a small lock",
          "item_name": "Key",
          "item_secret": null,
        },
        Object {
          "id": "2",
          "item_description": "A Peice of paper, crumpled and weathered.",
          "item_name": "Weathered Paper",
          "item_secret": "The numbers 5, 1, 3 can be made out.",
        },
        Object {
          "id": "3",
          "item_description": "A small handleheld lantern emitting a dim light",
          "item_name": "Lantern",
          "item_secret": null,
        },
        Object {
          "id": "4",
          "item_description": "A worn leather bound journal.",
          "item_name": "Journal",
          "item_secret": "Nothing much of use seems to be in the Journal, but the final page has been ripped out. The following can be read on the remaining scraps of paper: Doo... Co... 51...",
        },
      ]
    `);
  });

  it('GET /rooms should return a list of rooms', async () => {
    const res = await request(app).get('/api/v1/rooms');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "room_description": "The room is a sparsely furnished hunting cabin. With log walls and a plank floor. Behind you is a Bunk Bed with three beds all neatly made. To the right of you is a small Desk. A lantern sitting on the desk offers the only dim light in the room. To the left of you is a small lock box, beaten and worn from years of use. To the left of you is a small glass window sitting above the lockbox. In front of you is a closed wooden door.",
          "room_name": "hunting cabin",
          "rooms_objects": Array [
            Object {
              "id": 1,
              "object_description": "A small wooden desk with a lit lantern and a journal on the surface.",
              "object_name": "Desk",
              "object_secret_one": "A small wooden desk with a lit lantern on the surface",
              "object_secret_three": "A small wooden desk with nothing on it. Cause you took it all...",
              "object_secret_two": "A small wooden desk with a leather bound journal on the surface.",
              "rooms_id": 1,
            },
            Object {
              "id": 2,
              "object_description": "A set of three bunk beds. All neatly made. Searching the beds you find a Small Key under the pillow of the bottom bunk.",
              "object_name": "Bunk Beds",
              "object_secret_one": "A set of three bunk beds. you messed all the blankets up though.",
              "object_secret_three": null,
              "object_secret_two": null,
              "rooms_id": 1,
            },
            Object {
              "id": 3,
              "object_description": "A small metal lockbox beaten and weathered. It is currently locked.",
              "object_name": "A Small metal Lock Box",
              "object_secret_one": "A small metal lockbox. Beaten and weathered. You unlock it with the key you found. inside you find a Weathered Piece of Paper. The paper has the numbers 5, 1, 3.",
              "object_secret_three": null,
              "object_secret_two": "A small metal lockbox. Beaten and weathered. It sits open and empty.",
              "rooms_id": 1,
            },
            Object {
              "id": 4,
              "object_description": "A small glass window divided into 4 sections with wooden trim. It is too dark outside to see anything. There seems to be something written on the glass but you cant make it out in the dim light.",
              "object_name": "Window",
              "object_secret_one": "A small glass window divided into 4 sections with wooden trim. With the light of the lantern you can make out the numbers 4, 2, 6.",
              "object_secret_three": null,
              "object_secret_two": null,
              "rooms_id": 1,
            },
            Object {
              "id": 5,
              "object_description": "A wooden door locked tight from the inside. A combination lock is keeping the latch closed.",
              "object_name": "Door",
              "object_secret_one": "The door hangs open revealing a dark path into the forest.",
              "object_secret_three": null,
              "object_secret_two": null,
              "rooms_id": 1,
            },
          ],
        },
      ]
    `);
  });

  it('GET /user_items should return a list of user_items', async () => {
    const res = await request(app).get('/api/v1/userItem');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "item_name": "key",
          "item_true": false,
        },
        Object {
          "id": "2",
          "item_name": "weathered paper",
          "item_true": false,
        },
        Object {
          "id": "3",
          "item_name": "lantern",
          "item_true": false,
        },
        Object {
          "id": "4",
          "item_name": "journal",
          "item_true": false,
        },
        Object {
          "id": "5",
          "item_name": "door",
          "item_true": false,
        },
      ]
    `);
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
