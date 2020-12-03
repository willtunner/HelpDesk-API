// import * as Yup from 'yup';
import UserInfo from '../models/UserInfo';

class UserInfoController {
  // async index(req, res) {}

  async store(req, res) {
    const { idUser, idInfo } = req.body;

    const userInformation = await UserInfo.create({
      idUser,
      idInfo,
    });

    return res.json(userInformation);
  }
}

export default new UserInfoController();
