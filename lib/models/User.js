const pool = require('../utils/pool');

module.exports = class User {
  id;
  userName;
  #passwordHash; // private class field: hides it from anything outside of this class definition

  constructor(row) {
    this.id = row.id;
    this.userName = row.userName;
    this.#passwordHash = row.password_hash;
  }

  static async insert({ userName, passwordHash }) {
    const { rows } = await pool.query(
      `
      INSERT INTO users (userName, password_hash)
      VALUES ($1, $2)
      RETURNING *
    `,
      [userName, passwordHash]
    );
    return new User(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM users');

    return rows.map((row) => new User(row));
  }

  static async getByUserName(userName) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM users
      WHERE userName=$1
      `,
      [userName]
    );

    if (!rows[0]) return null;

    return new User(rows[0]);
  }

  get passwordHash() {
    return this.#passwordHash;
  }
};
