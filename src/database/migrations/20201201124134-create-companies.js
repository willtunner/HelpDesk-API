module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('companies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      obs: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ip_scef: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mac_scef: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      con_scef: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ip_nfce: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mac_nfce: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      con_nfce: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ip_nfe: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mac_nfe: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      con_nfe: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ip_mobile: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ip_coletor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      v_estoque: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      v_nfce: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      v_nfe: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      v_sisseg: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      v_checkout: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('companies');
  },
};
