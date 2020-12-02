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

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
  }
}

export default Calleds;
