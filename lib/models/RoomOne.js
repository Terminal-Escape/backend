const pool = require('../utils/pool');

module.exports = class RoomOne {
  id;
  room_name;
  room_description;

  constructor(row) {
    this.id = row.id;
    this.room_name = row.room_name;
    this.room_description = row.room_description;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT * FROM rooms
      `
    );
    return rows.map((room) => new RoomOne(room));
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
    return new RoomOne(rows[0]);
  }
};
