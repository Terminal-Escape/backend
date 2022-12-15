



-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS rooms CASCADE;
DROP TABLE IF EXISTS rooms_objects CASCADE;
DROP TABLE IF EXISTS user_items CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS objects CASCADE;
DROP TABLE IF EXISTS users CASCADE;

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
('door', false),
('axe', false),
('keyRing', false),
('rope', false),
('firstAidKit', false);


INSERT INTO items (
    item_name,
    item_description,
    item_secret
)
VALUES 
('Key', 'A small Key for a small lock', null),
('Weathered Paper', 'A piece of paper, crumpled and weathered.', 'The numbers 5, 1, 3 can be made out.'),
('Lantern', 'A small handleheld lantern emitting a dim light', null),
('Journal', 'A worn leather bound journal.', 'Nothing much of use seems to be in the Journal, but the final page has been ripped out. The following can be read on the remaining scraps of paper: Doo... Co... 51...'),
('Axe', 'A Wood cutting axe, dulled and weathered from years of use.', null),
('Key Ring', 'A ring of keys found in the ignition of the RV', null),
('Rope', 'A length of rope, about 20 feet long.', null),
('First Aid kit', 'A first aid kit equipped with bandages and burn cream', null),
('Food Stuffs', 'A smorgasbord of non-perishable food', null);


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
(1, 'Door', 'A wooden door locked tight from the inside. A combination lock is keeping the latch closed.', 'The door hangs open revealing a dark path into the forest.', null, null),
(2, 'Dock', 'A small dock reaching just a few feet into the lake. On the left a row boat sits on the lake bed swamped and sunken into the water. You manage to untie the rope that was once mooring it to the dock. You coil the rope and sling it over your shoulder. This might be useful later.', 'A small dock reaching just a few feet into the lake. On the left a row boat sits on the lake bed swamped and sunken into the water. There does not seem to be anything else here. The view is nice though.', null, null),
(2, 'Fire pit', 'A fire pit ringed with large stones. The warm glow of coals reveal evidence of a recent fire. Chairs and plates litter the ground around the firepit indicating that whoever was here likely left in a hurry. A wood splitting axe leans against one of the large stones. You pick it up, just in case.', 'A fire pit ringed with large stones. The warm glow of coals reveal evidence of a recent fire. Chairs and plates litter the ground around the firepit indicating that whoever was here likely left in a hurry', null, null),
(2, 'Tent', 'A small blue popup tent that sits against the edge of the forest. The flap hangs open revealing two sleeping bags on the ground and the back panel of the tent is in tatters. With a quick search you find a first aid kit and put it in your backpack.', 'The same small blue popup tent as before. The shreds of the back panel rustle in a breeze as you shudder at the idea of what tore it open. A quick search reveals nothing else of use.', null, null),
(2, 'Bear Box', 'A large metal box that campsites typically require campers store their food in lest bears be drawn to it. This one is covered in scratches and dents but remains closed. A large paddle lock is currently preventing you from opening it.', 'Using a key from the keyring you found in the RV you unlock the box. It opens with a loud creak revealing a smorgasbord of food. Overwhelmed by the rumble in your gut you begin eating.', null, null),
(2, 'RV', 'An old RV that has seen better days. The door is severely damaged and hangs open. Entering the RV you see that the inside is just as bad, if not worse than the outside. Tables smashed, windows broken, seating ripped apart. Most things in the RV are not salvageable but you find a set of keys in the ignition. Turning them has no effect but you put them in your pocket just in case.', 'It is just as you left it, searching through the trash and broken things you find nothing else that can be of use.', null, null),
(2, 'Bear', 'A huge grizzly bear standing several feet taller than you emerges from the forest at a sprint. Before you can react they close the distance between you and them. They are not very long, but your last moments are spent in agony.', 'A huge grizzly bear standing several feet taller than you emerges from the forest at a sprint. As it closes the distance between you, you ready your axe. The fight is quick, though the bear manages to strike you before you dispatch it. You are losing blood fast and need to find something to bandage your wound.', 'A huge grizzly bear standing several feet taller than you emerges from the forest at a sprint. As it closes the distance between you, you ready your axe. The fight is quick, though the bear manages to strike you before you dispatch it. Using the First Aid Kit you found in the tent you wrap your wound tightly, stopping the bleeding just as you begin to feel faint. As you return to the food you hear a blood-curdling scream from further down the path.', null);

INSERT INTO rooms (
    room_name,
    room_description
)
VALUES
('hunting cabin', 'The room is a sparsely furnished hunting cabin. With log walls and a plank floor. Behind you is a Bunk Bed with three beds all neatly made. To the right of you is a small Desk. A lantern sitting on the desk offers the only dim light in the room. To the left of you is a small lock box, beaten and worn from years of use. To the left of you is a small glass window sitting above the lockbox. In front of you is a closed wooden door.'),
('campground', 'You stand at the edge of a small campground, clearly abandoned, with trash and items scattered about. To your right you see a Fire Pit with chairs and plates scattered about. To your right you see a lake with a small Dock reaching out into it. To your left you see an RV with the door handing wide open. In front of you, you see a small Popup Tent nestled near the edge of the campground.');


INSERT INTO rooms_objects (
    rooms_id,
    objects_id
)
VALUES 
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11);




CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username VARCHAR,
  password_hash VARCHAR NOT NULL
);

-- SELECT
-- 	rooms
-- FROM
-- 	rooms
--     LEFT JOIN rooms_objects on rooms.id = rooms_objects.rooms_id
--     LEFT JOIN objects on rooms_objects.objects_id = objects.id

	



