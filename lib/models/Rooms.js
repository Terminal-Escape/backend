const pool = require('../utils/pool');

module.exports = class Rooms {
  id;
  room_name;
  room_description;
  rooms_objects;

  constructor(row) {
    this.id = row.id;
    this.room_name = row.room_name;
    this.room_description = row.room_description;
    this.rooms_objects = row.rooms_objects;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT 
 rooms.*,
 COALESCE(
   json_agg(to_jsonb(objects))
   FILTER (WHERE objects.id IS NOT NULL), '[]'
   ) as rooms_objects from rooms
   LEFT JOIN rooms_objects on rooms.id = rooms_objects.rooms_id
   LEFT JOIN objects on rooms_objects.objects_id = objects.id
   GROUP BY rooms.id
      `
    );
    return rows.map((room) => new Rooms(room));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT *
        FROM rooms
        WHERE id=$1
        `,
      [id]
    );
    if (!rows[0]) {
      return null;
    }
    return new Rooms(rows[0]);
  }
};
