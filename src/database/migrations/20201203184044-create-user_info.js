module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('info_tech', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL', // Quando usuario for deletado seta para null esse chamado
        allowNull: false,
      },
      info_id: {
        type: Sequelize.INTEGER,
        references: { model: 'informations', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL', // Quando usuario for deletado seta para null esse chamado
        allowNull: false,
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
    return queryInterface.dropTable('info_tech');
  },
};
