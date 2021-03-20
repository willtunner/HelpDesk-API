/* eslint-disable no-dupe-keys */
module.exports = {
  // ! LOCAL
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  // password: 'root', // Linux
  password: '29011967log*', // Windows
  database: 'helpdesk',
  define: {
    timestamps: true, // Quando cria algo coloca o create at e update at
    underscored: true,
    underscoredAll: true, // coloca user_id no banco
  },
  // timezone: '-03:00',

};
