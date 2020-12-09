import Phonebook from '../models/Phonebook';

class PhonebookController {
  async index(req, res) {
    const calleds = await Phonebook.findAndCountAll();

    return res.json(calleds);
  }

  async store(req, res) {
    const { name, email, phone, address, obs } = req.body;

    const client = await Phonebook.create({
      name,
      email,
      phone,
      address,
      obs,
    });

    return res.json(client);
  }
}

export default new PhonebookController();
