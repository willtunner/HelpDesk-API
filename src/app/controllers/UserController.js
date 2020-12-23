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
    // todo req.userId: criado no middleware para pegar o id do token
    console.log(req.body);

    // const { email, oldPassword } = req.body;

    // const user = await User.findByPk(req.userId);

    // if (email !== user.email) {
    //   // Verifica se o email já existe
    //   const user_email = await User.findOne({
    //     where: { email: req.body.email },
    //   });

    //   if (user_email) {
    //     return res.status(400).json({ error: 'Email existente!' });
    //   }
    // }

    // if (oldPassword && !(await user.checkPassword(oldPassword))) {
    //   return res.status(400).json({ error: 'Senha incorreta!' });
    // }

    // const { id, name, user_name } = await user.update(req.body);

    // return res.json({
    //   id,
    //   name,
    //   email,
    //   user_name,
    // });
  }

  async editprof(req, res) {
    const response = await User.findOne({
      where: {
        id: req.body.id,
        password_hash: req.body.oldPassword,
      },
    });

    if (response === null) {
      res.send(JSON.stringify('Senha antiga não confere!'));
    } else if (req.body.password === req.body.confPassword) {
      // todo: atualiza no banco
      response.password = req.body.password;
      response.save();

      res.send(response);
    } else {
      res.send(JSON.stringify('Nova senha e confirmação não confere!'));
    }
  }
}

export default new UserController();
