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

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'info_id',
      through: 'user_info',
      as: 'userInfo',
    });
    this.hasMany(models.UserInfo, { foreignKey: 'info_id', as: 'info1' });
  }
}

export default Information;
