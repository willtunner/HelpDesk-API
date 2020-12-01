// import * as Yup from 'yup';

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
    } = req.body;

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
