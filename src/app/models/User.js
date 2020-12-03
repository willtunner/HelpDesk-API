import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        user_name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        photo: Sequelize.STRING,
        phone: Sequelize.STRING,
        longitude: Sequelize.STRING,
        latitude: Sequelize.STRING,
        permission: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // cria um addHook com beforeSave(antes de salvar) e chama uma função
    this.addHook('beforeSave', async (user) => {
      // Se tiver enviado password pelo insominia
      if (user.password) {
        // criptografa a senha e salva em password_hash
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  // Associações
  static associate(models) {
    this.belongsToMany(models.Information, {
      foreignKey: 'user_id',
      through: 'user_info',
      as: 'userInfos',
    });

    this.hasMany(models.UserInfo, { foreignKey: 'user_id', as: 'user1' });
  }

  // verifica se o password confere com o do banco
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  /**
   * Verificar codigo abaixo
   */

  // Verifica se o nome confere
  checkUserName(userName) {
    if (userName === this.user_name) {
      return 'mesmo nome';
    }

    return this;
  }
}

export default User;
