import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    const users = await Client.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const { name, email, phone, genre, connection, company_id } = req.body;

    const client = await Client.create({
      name,
      email,
      phone,
      genre,
      connection,
      company_id,
    });

    return res.json(client);
  }
}

export default new ClientController();
