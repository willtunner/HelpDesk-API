module.exports = {
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

 dialect: 'postgres',
 host: 'ec2-35-175-155-248.compute-1.amazonaws.com',
 username: 'nttjusmvabgthq',
 password: '5c6e7a63c2ee98b2b5918aee92cbfe53d0c8b6edf63f0dd6cc60af151e8540f4*', // Windows
 database: 'dd8jaiuhpeh8e0',
 define: {
   timestamps: true, // Quando cria algo coloca o create at e update at
   underscored: true,
   underscoredAll: true, // coloca user_id no banco
 },
 // timezone: '-03:00',
};
