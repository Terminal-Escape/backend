



-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS rooms CASCADE;
DROP TABLE IF EXISTS rooms_objects CASCADE;
DROP TABLE IF EXISTS user_items CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS objects CASCADE;

CREATE TABLE user_items (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item_name VARCHAR,
    item_true BOOLEAN 
);

CREATE TABLE items (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item_name VARCHAR,
    item_description VARCHAR,
    item_secret VARCHAR
);

CREATE TABLE objects (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    rooms_id BIGINT,
    object_name VARCHAR,
    object_description VARCHAR,
    object_secret_one VARCHAR,
    object_secret_two VARCHAR,
    object_secret_three VARCHAR
);

CREATE TABLE rooms (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    room_name VARCHAR,
    room_description VARCHAR
);

CREATE TABLE rooms_objects (
    rooms_id BIGINT,
    objects_id BIGINT,
    FOREIGN KEY (rooms_id) REFERENCES rooms(id),
    FOREIGN KEY (objects_id) REFERENCES objects(id)
);


INSERT INTO user_items (
  item_name,
  item_true
) VALUES 
('key', false),
('weathered paper', false),
('lantern', false),
('journal', false),
('door', false);

INSERT INTO items (
    item_name,
    item_description,
    item_secret
)
VALUES 
('Key', 'A small Key for a small lock', null),
('Weathered Paper', 'A Peice of paper, crumpled and weathered.', 'The numbers 5, 1, 3 can be made out.'),
('Lantern', 'A small handleheld lantern emitting a dim light', null),
('Journal', 'A worn leather bound journal.', 'The final page has been ripped out but the following can be read from top to bottom on the remaining scraps of page: Doo... Co... 7');

INSERT INTO objects (
    rooms_id,
    object_name,
    object_description,
    object_secret_one,
    object_secret_two,
    object_secret_three
)
VALUES 
(1,'Desk', 'A small wooden desk with a lit lantern and a journal on the surface.', 'A small wooden desk with a lit lantern on the surface', 'A small wooden desk with a leather bound journal on the surface.', 'A small wooden desk with nothing on it. Cause you took it all...'),
(1, 'Bunk Beds', 'A set of three bunk beds. All neatly made. Searching the beds you find a Small Key under the pillow of the bottom bunk.', 'A set of three bunk beds. you messed all the blankets up though.', null, null),
(1,'A Small metal Lock Box', 'A small metal lockbox beaten and weathered. It is currently locked.', 'A small metal lockbox. Beaten and weathered. You unlock it with the key you found. inside you find a Weathered Piece of Paper. The paper has the numbers 5, 1, 3.', 'A small metal lockbox. Beaten and weathered. It sits open and empty.', null),
(1, 'Window', 'A small glass window divided into 4 sections with wooden trim. It is too dark outside to see anything. There seems to be something written on the glass but you cant make it out in the dim light.', 'A small glass window divided into 4 sections with wooden trim. With the light of the lantern you can make out the numbers 4, 2, 6.', null, null),
(1, 'Door', 'A wooden door locked tight from the inside. A combination lock is keepiong the latch closed.', 'The door hangs open revealing a dark path into the forrest.', null, null);


INSERT INTO rooms (
    room_name,
    room_description
)
VALUES
('hunting cabin', 'The room is a sparsely furnished hunting cabin. With log walls and a plank floor. Behind you is a Bunk Bed with three beds all neatly made. To the right of you is a small Desk. A lantern sitting on the desk offers the only dim light in the room. To the left of you is a small lock box, beaten and worn from years of use. To the left of you is a small glass window sitting above the lockbox. In front of you is a closed wooden door.');


INSERT INTO rooms_objects (
    rooms_id,
    objects_id
)
VALUES 
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL
);

-- SELECT
-- 	rooms
-- FROM
-- 	rooms
--     LEFT JOIN rooms_objects on rooms.id = rooms_objects.rooms_id
--     LEFT JOIN objects on rooms_objects.objects_id = objects.id

	



