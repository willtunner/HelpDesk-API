import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ? Verifica se o token existe
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não existe.' });
  }

  // ?  Pega somente o token eliminando a palavra bearer
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // ? Retorna o id e o tempo que expira esse token
    console.log(decoded);

    // todo cria uma variavel dentro do req chamada userId passando o id que vem do token
    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalido.' });
  }
};
