import Product from '../models/Product';
import Tracking from '../models/Tracking';

class ProductController {
  async listOne(req, res) {
    const products = await Tracking.findOne({
      // ? Retorna o model de produto vinculado na pesquisa
      include: [{ model: Product }],
      where: { code: req.body.code },
    });
    // console.log(products);
    // return res.json(products);
    return res.send(JSON.stringify(products));
  }
}

export default new ProductController();
