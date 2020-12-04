import Sequelize, { Model } from 'sequelize';

class Phonebook extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        address: Sequelize.STRING,
        obs: Sequelize.STRING,
        created_at: Sequelize.STRING,
        updated_at: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Phonebook;
