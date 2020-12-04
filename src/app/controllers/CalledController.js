import Called from '../models/Called';

class CalledController {
  async index(req, res) {
    const calleds = await Called.findAll();

    return res.json(calleds);
  }

  async store(req, res) {
    const {
      title,
      text,
      tags,
      solution,
      phone,
      connection,
      user_id,
      company_id,
      client_id,
      chronometer,
      status,
    } = req.body;

    const client = await Called.create({
      title,
      text,
      tags,
      solution,
      phone,
      connection,
      user_id,
      company_id,
      client_id,
      chronometer,
      status,
    });

    return res.json(client);
  }
}

export default new CalledController();
