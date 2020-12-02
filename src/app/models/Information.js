import Sequelize, { Model } from 'sequelize';

class Information extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
        priority: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'informations',
      }
    );
  }
}

export default Information;
