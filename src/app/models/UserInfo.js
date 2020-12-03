import Sequelize, { Model } from 'sequelize';

class UserInfo extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        info_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'info_tech',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user1' });
    this.belongsTo(models.Information, { foreignKey: 'info_id', as: 'info1' });
  }
}

export default UserInfo;
