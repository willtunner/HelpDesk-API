import * as Yup from 'yup';
import { cnpj } from 'cpf-cnpj-validator';
import Company from '../models/Company';

class CompanyController {
  async index(req, res) {
    const companies = await Company.findAll();

    return res.json(companies);
  }

  async store(req, res) {
    const {
      id,
      company,
      phone,
      email,
      cnpj2,
      obs,
      ip_scef,
      mac_scef,
      con_scef,
      ip_nfce,
      mac_nfce,
      con_nfce,
      ip_nfe,
      mac_nfe,
      con_nfe,
      ip_mobile,
      ip_coletor,
      v_estoque,
      v_nfce,
      v_nfe,
      v_sisseg,
      v_checkout,
      status,
    } = req.body;

    // Valida CNPJ
    if (!(await cnpj.isValid(cnpj2))) {
      return res.status(400).json({
        error: 'erro cnpj',
      });
    }

    // Cria o schema para o yup
    const schema = Yup.object().shape({
      company: Yup.string().required('Nome a empresa é obrigatório'),
      cnpj: Yup.string(),
    });

    // Verifica se o schema do yup é valido
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error:
          'Falha na validação, verifique se ao menos o campo empresa está preenchida!',
      });
    }

    const companys = await Company.create({
      id,
      company,
      phone,
      email,
      cnpj,
      obs,
      ip_scef,
      mac_scef,
      con_scef,
      ip_nfce,
      mac_nfce,
      con_nfce,
      ip_nfe,
      mac_nfe,
      con_nfe,
      ip_mobile,
      ip_coletor,
      v_estoque,
      v_nfce,
      v_nfe,
      v_sisseg,
      v_checkout,
      status,
    });
    return res.json(companys);
  }
}

export default new CompanyController();
