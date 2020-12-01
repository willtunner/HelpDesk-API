import Sequelize, { Model } from 'sequelize';

class Calleds extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        text: Sequelize.STRING,
        tags: Sequelize.STRING,
        solution: Sequelize.STRING,
        phone: Sequelize.STRING,
        connection: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
        company_id: Sequelize.INTEGER,
        client_id: Sequelize.INTEGER,
        chronometer: Sequelize.STRING,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Calleds;
