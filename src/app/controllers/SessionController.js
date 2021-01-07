/* eslint-disable no-unreachable */
import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    console.log(req.body);

    // ? Verifica se o email existe
    const user = await User.findOne({ where: { email } });
    // ? Se user não existir
    if (!user) {
      return res.status(401).json({ error: 'Usuario não existe!' });
    }

    // ? Verifica se a senha não bate
    if (!(await user.checkPassword(password))) {
      // return res.status(401).json({ error: 'Senha incorreta!' });
      res.send(JSON.stringify('error'));
    }

    // todo: Se o usuario existe e a senha bate

    // ? Pega do usuario o id e o name pq o email pode pegar de cima
    const { id, name, user_name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        user_name,
        password,
      },
      // ? 1º parametro payload: {id}
      // ? 2° parametro https://www.md5online.org/ gerar senha para: 'greencodebr' chave: '5d08dbede74f726bec693fc0a78f04e7'
      // ? 3º parametro quanto tempo expira
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });

    res.send(user);
  }
}

export default new SessionController();
