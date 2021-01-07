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

  async update(req, res) {
    const response = await Tracking.findOne({
      where: { code: req.body.code },
      // todo: inclui todas as tabelas relacionadas
      include: [{ all: true }],
    });
    // todo: pega o produto relacionado ao code do rastreio
    // console.log(response.Products[0]);
    // todo: pega o local vindo do front
    // console.log(req.body.local);

    response.local = req.body.local;
    // ? Atualiza o updated_At no banco
    response.updated_At = new Date();
    response.Products[0].name = req.body.product;

    // % Salva no banco
    response.save(); // Se refere ao tracking
    response.Products[0].save(); // Se refere ao Products

    // % Msg de sucesso
    res.send(JSON.stringify('Dados foram atualizados com sucesso!'));
  }
}

export default new ProductController();
