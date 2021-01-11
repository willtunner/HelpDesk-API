import Sequelize, { Model } from 'sequelize';

class Token extends Model {
  static init(sequelize) {
    super.init(
      {
        token: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'token',
      }
    );

    return this;
  }
}

export default Token;
