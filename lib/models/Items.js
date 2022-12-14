const pool = require('../utils/pool');

module.exports = class Items {
  id;
  item_name;
  item_description;
  item_secret;

  constructor(row) {
    this.id = row.id;
    this.item_name = row.item_name;
    this.item_description = row.item_description;
    this.item_secret = row.item_secret;
  }
  static async getAll() {
    const { rows } = await pool.query(
      `
       SELECT * FROM items 
        `
    );
    return rows.map((itemRow) => new Items(itemRow));
  }
};
