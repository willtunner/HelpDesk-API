import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const { name, user_name, email, password, phone, permission } = req.body;

    const user = await User.create({
      name,
      user_name,
      email,
      password,
      phone,
      permission,
    });

    return res.json(user);
  }
}

export default new UserController();
