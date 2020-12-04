import Sequelize, { Model } from 'sequelize';

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        company: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        obs: Sequelize.STRING,
        ip_scef: Sequelize.STRING,
        mac_scef: Sequelize.STRING,
        con_scef: Sequelize.STRING,
        ip_nfce: Sequelize.STRING,
        mac_nfce: Sequelize.STRING,
        con_nfce: Sequelize.STRING,
        ip_nfe: Sequelize.STRING,
        mac_nfe: Sequelize.STRING,
        con_nfe: Sequelize.STRING,
        ip_mobile: Sequelize.STRING,
        ip_coletor: Sequelize.STRING,
        v_estoque: Sequelize.STRING,
        v_nfce: Sequelize.STRING,
        v_nfe: Sequelize.STRING,
        v_sisseg: Sequelize.STRING,
        v_checkout: Sequelize.STRING,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    // ! o campo 'companies' deve ser o mesmo em cliente
    this.hasMany(models.Client, { foreignKey: 'company_id', as: 'companies' });
  }
}

export default Company;
