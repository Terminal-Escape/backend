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
          "item_description": "A piece of paper, crumpled and weathered.",
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
        Object {
          "id": "5",
          "item_description": "A Wood cutting axe, dulled and weathered from years of use.",
          "item_name": "Axe",
          "item_secret": null,
        },
        Object {
          "id": "6",
          "item_description": "A ring of keys found in the ignition of the RV",
          "item_name": "Key Ring",
          "item_secret": null,
        },
        Object {
          "id": "7",
          "item_description": "A length of rope, about 20 feet long.",
          "item_name": "Rope",
          "item_secret": null,
        },
        Object {
          "id": "8",
          "item_description": "A first aid kit equipped with bandages and burn cream",
          "item_name": "First Aid kit",
          "item_secret": null,
        },
        Object {
          "id": "9",
          "item_description": "A smorgasbord of non-perishable food",
          "item_name": "Food Stuffs",
          "item_secret": null,
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
          "id": "2",
          "room_description": "The room is a sparsely furnished hunting cabin. With log walls and a plank floor. Behind you is a Bunk Bed with three beds all neatly made. To the right of you is a small Desk. A lantern sitting on the desk offers the only dim light in the room. To the left of you is a small lock box, beaten and worn from years of use. To the left of you is a small glass window sitting above the lockbox. In front of you is a closed wooden door.",
          "room_name": "hunting cabin",
          "rooms_objects": Array [
            Object {
              "id": 6,
              "object_description": "A small dock reaching just a few feet into the lake. On the left a row boat sits on the lake bed swamped and sunken into the water. You manage to untie the rope that was once mooring it to the dock. You coil the rope and sling it over your shoulder. This might be useful later.",
              "object_name": "Dock",
              "object_secret_one": "A small dock reaching just a few feet into the lake. On the left a row boat sits on the lake bed swamped and sunken into the water. There does not seem to be anything else here. The view is nice though.",
              "object_secret_three": null,
              "object_secret_two": null,
              "rooms_id": 2,
            },
            Object {
              "id": 7,
              "object_description": "A fire pit ringed with large stones. The warm glow of coals reveal evidence of a recent fire. Chairs and plates litter the ground around the firepit indicating that whoever was here likely left in a hurry. A wood splitting axe leans against one of the large stones. You pick it up, just in case.",
              "object_name": "Fire pit",
              "object_secret_one": "A fire pit ringed with large stones. The warm glow of coals reveal evidence of a recent fire. Chairs and plates litter the ground around the firepit indicating that whoever was here likely left in a hurry",
              "object_secret_three": null,
              "object_secret_two": null,
              "rooms_id": 2,
            },
            Object {
              "id": 8,
              "object_description": "A small blue popup tent that sits against the edge of the forest. The flap hangs open revealing two sleeping bags on the ground and the back panel of the tent is in tatters. With a quick search you find a first aid kit and put it in your backpack.",
              "object_name": "Tent",
              "object_secret_one": "The same small blue popup tent as before. The shreds of the back panel rustle in a breeze as you shudder at the idea of what tore it open. A quick search reveals nothing else of use.",
              "object_secret_three": null,
              "object_secret_two": null,
              "rooms_id": 2,
            },
            Object {
              "id": 9,
              "object_description": "A large metal box that campsites typically require campers store their food in lest bears be drawn to it. This one is covered in scratches and dents but remains closed. A large paddle lock is currently preventing you from opening it.",
              "object_name": "Bear Box",
              "object_secret_one": "Using a key from the keyring you found in the RV you unlock the box. It opens with a loud creak revealing a smorgasbord of food. Overwhelmed by the rumble in your gut you begin eating.",
              "object_secret_three": null,
              "object_secret_two": null,
              "rooms_id": 2,
            },
            Object {
              "id": 10,
              "object_description": "An old RV that has seen better days. The door is severely damaged and hangs open. Entering the RV you see that the inside is just as bad, if not worse than the outside. Tables smashed, windows broken, seating ripped apart. Most things in the RV are not salvageable but you find a set of keys in the ignition. Turning them has no effect but you put them in your pocket just in case.",
              "object_name": "RV",
              "object_secret_one": "It is just as you left it, searching through the trash and broken things you find nothing else that can be of use.",
              "object_secret_three": null,
              "object_secret_two": null,
              "rooms_id": 2,
            },
            Object {
              "id": 11,
              "object_description": "A huge grizzly bear standing several feet taller than you emerges from the forest at a sprint. Before you can react they close the distance between you and them. They are not very long, but your last moments are spent in agony.",
              "object_name": "Bear",
              "object_secret_one": "A huge grizzly bear standing several feet taller than you emerges from the forest at a sprint. As it closes the distance between you, you ready your axe. The fight is quick, though the bear manages to strike you before you dispatch it. You are losing blood fast and need to find something to bandage your wound.",
              "object_secret_three": null,
              "object_secret_two": "A huge grizzly bear standing several feet taller than you emerges from the forest at a sprint. As it closes the distance between you, you ready your axe. The fight is quick, though the bear manages to strike you before you dispatch it. Using the First Aid Kit you found in the tent you wrap your wound tightly, stopping the bleeding just as you begin to feel faint. As you return to the food you hear a blood-curdling scream from further down the path.",
              "rooms_id": 2,
            },
          ],
        },
        Object {
          "id": "1",
          "room_description": "You stand at the edge of a small campground, clearly abandoned, with trash and items scattered about. To your right you see a Fire Pit with chairs and plates scattered about. To your right you see a lake with a small Dock reaching out into it. To your left you see an RV with the door handing wide open. In front of you, you see a small Popup Tent nestled near the edge of the campground.",
          "room_name": "campground",
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
        Object {
          "id": "6",
          "item_name": "axe",
          "item_true": false,
        },
        Object {
          "id": "7",
          "item_name": "keyRing",
          "item_true": false,
        },
        Object {
          "id": "8",
          "item_name": "rope",
          "item_true": false,
        },
        Object {
          "id": "9",
          "item_name": "firstAidKit",
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
