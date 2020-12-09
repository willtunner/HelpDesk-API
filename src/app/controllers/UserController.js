import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAndCountAll();

    return res.json(users);
  }

  async store(req, res) {
    const { name, user_name, email, password, phone, permission } = req.body;
    const { filename } = req.file;

    // Cria o schema para o yup
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      user_name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    // Verifica se o schema do yup é valido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Falha na validação, verifique se os campos estão preenchidos',
      });
    }

    // Verifica se o user name existe
    const userExists = await User.findOne({
      where: { user_name: req.body.user_name },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User name já existe!' });
    }

    // Verifica se o nome existe
    const name_user = await User.findOne({
      where: { name: req.body.name },
    });

    if (name_user) {
      return res.status(400).json({ error: 'Usuario já cadastrado!' });
    }

    // Verifica se o email já existe
    const user_email = await User.findOne({
      where: { email: req.body.email },
    });

    if (user_email) {
      return res.status(400).json({ error: 'Email existente!' });
    }

    const user = await User.create({
      name,
      user_name,
      email,
      password,
      photo: filename,
      phone,
      permission,
    });

    return res.json(user);
  }

  async update(req, res) {
    const { name, user_name, email, password, phone, permission } = req.body;
    const { filename } = req.file;
    const { user_id } = req.params;

    const users = await User.update(
      { id: user_id },
      {
        name,
        user_name,
        email,
        password,
        photo: filename,
        phone,
        permission,
      }
    );

    return res.json(users);
  }
}

export default new UserController();
