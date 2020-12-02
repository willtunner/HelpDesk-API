import Information from '../models/Information';

class InformationController {
  async index(req, res) {
    const information = await Information.findAll();

    return res.json(information);
  }

  async store(req, res) {
    const { title, content, status, priority } = req.body;

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
