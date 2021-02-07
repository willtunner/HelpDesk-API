/* eslint-disable no-dupe-keys */
module.exports = {
  // ! LOCAL
  /*
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
*/
  // ! HEROKU
  dialect: 'postgres',
  host: 'ec2-18-204-101-137.compute-1.amazonaws.com',
  username: 'lidczdedskhonx',
  password: 'e13c4019646a8b8ae087513979cdb76d4884c9c6672a3ee9aa39c885103cee1d', // Windows
  database: 'dfn3bit9i25u9m',
  define: {
    timestamps: true, // Quando cria algo coloca o create at e update at
    underscored: true,
    underscoredAll: true, // coloca user_id no banco
  },
  // timezone: '-03:00',
};
