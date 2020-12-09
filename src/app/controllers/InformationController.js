import * as Yup from 'yup';
import Information from '../models/Information';

class InformationController {
  async index(req, res) {
    const information = await Information.findAndCountAll();

    return res.json(information);
  }

  async store(req, res) {
    const { title, content, status, priority } = req.body;

    // Cria o schema para o yup
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      content: Yup.string(),
    });

    // Verifica se o schema do yup é valido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Falha na validação, verifique se os campos estão preenchidos',
      });
    }

    // Verifica se o user name existe
    const titleExist = await Information.findOne({
      where: { title: req.body.title },
    });

    if (titleExist) {
      return res.status(400).json({ error: 'Titulo já existe' });
    }

    const information = await Information.create({
      title,
      content,
      status,
      priority,
    });

    return res.json(information);
  }
}

export default new InformationController();
