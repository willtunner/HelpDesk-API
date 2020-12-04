// import * as Yup from 'yup';
import Information from '../models/Information';
import User from '../models/User';
import UserInfo from '../models/UserInfo';

class UserInfoController {
  // async index(req, res) {}

  async store(req, res) {
    const { user_id, info_id } = req.body;

    // Verifica se usuario existe
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Usuario não encontrado' });
    }

    // Verifica se informação existe
    const info = await Information.findByPk(info_id);

    if (!info) {
      return res.status(400).json({ error: 'Informação não existe!' });
    }

    const userInformation = await UserInfo.create({
      user_id,
      info_id,
    });

    return res.json(userInformation);
  }
}

export default new UserInfoController();
