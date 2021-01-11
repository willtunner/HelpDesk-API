import Token from '../models/Token';

class TokenController {
  async store(req, res) {
    const { token } = req.body;

    const response = await Token.findOne({
      where: { token },
    });

    if (response == null) {
      Token.create({
        token,
      });
    }
  }
}

export default new TokenController();
