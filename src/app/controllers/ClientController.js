import Client from '../models/Client';
// import Company from '../models/Company';

class ClientController {
  async index(req, res) {
    const users = await Client.findAndCountAll({
      include: { association: 'companies' },
    });

    return res.json(users);
  }

  async list_user(req, res) {
    const { client_id } = req.params;

    const client = await Client.findByPk(client_id, {
      include: { association: 'companies' },
    });

    if (!client) {
      return res.status(400).json({
        error: 'id do cliente não encontrado!',
      });
    }

    return res.json(client);
  }

  // ! coments danger
  // ? coments information
  // * coments sucess
  // TODO: coments todo
  //  Better Comments
  //  Path Autocomplete

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
