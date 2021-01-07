/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
import QRCode from 'qrcode';
import Product from '../models/Product';
import Tracking from '../models/Tracking';

class TrackingController {
  async store(req, res) {
    let trackingId = '';
    const { user_id, code, local } = req.body;

    // Todo: Inseri na tabela tracking
    await Tracking.create({
      user_id,
      code,
      local,
    }).then((response) => {
      trackingId += response.id;
    });

    // Todo: já cadastra automático o produto
    await Product.create({
      name: req.body.product,
      tracking_id: trackingId,
    });

    // todo: Gera o QRCode passando o cod do produto
    QRCode.toDataURL(req.body.code).then((url) => {
      QRCode.toFile('./uploads/qrcode/code.png', req.body.code);

      res.send(JSON.stringify(url));
    });

    // ? manda para o frontend o code
    // return res.json(track);
  }


}

export default new TrackingController();
