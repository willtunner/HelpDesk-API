import Sequelize, { Model } from 'sequelize';

class Tracking extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        code: Sequelize.STRING,
        local: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // Associações
  static associate(models) {
    Tracking.belongsTo(models.User);
    Tracking.hasMany(models.Product);
  }
}

export default Tracking;
