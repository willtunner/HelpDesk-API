/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
const os = require('os');
const ip = require('ip');

const axios = require('axios');

// ? Cria Variavel para armazenar os dados retornados da api
let dados;
let totalHeros;
let page = 1900;
let totalPage = Math.ceil(totalHeros / page);

/* axios
  .get('https://api.github.com/users/willtunner')
  .then(function (response) {
    console.log(response.status);
  })
  .catch(function (error) {
    if (error) {
      console.log(error);
    }
  }); */

// ? cria uma função que pesca os dados na api com o axios e retorna
function getHeros() {
  const BASE = 'https://gateway.marvel.com/';
  const URL = 'v1/public/characters';
  // const Caracters = 'v1/public/characters/1011334';
  const timeStamp = 'ts=1612100588';
  const orderBy = 'orderBy=name';
  const limit = 'limit=4';
  const apiKey = 'apikey=441f8e1d35a71620f2cc514653ca8d66';
  const hash = 'hash=67b23bf97ed17c43aaec511386e91116';
  const parameters = `${timeStamp}&${orderBy}&${limit}&${apiKey}&${hash}`;

  const completeUrl = `${BASE}${URL}?${parameters}`;

  console.log(
    '============================= URL COMPLETA ============================='
  );
  console.log(completeUrl);

  return axios.get(
    `${BASE}${URL}?${timeStamp}&${orderBy}&${limit}&${apiKey}&${hash}`
  );
}

// ? Pega os dados retornados da função e armazena na variavel
dados = getHeros();

dados
  .then(function (resposta) {
    // ? pega a resposta e salva o array de todos os heros na variavel
    const heros = resposta.data.data.results;
    console.log(
      '============================= HEROS ============================='
    );
    console.log(heros);
    // ? Faz um map pegando apenas os nomes
    const names = heros.map((heros) => `${heros.id} - ${heros.name}`);
    // ? Mostra no console os nomes retornados
    console.log(
      '============================= NAMES ============================='
    );
    console.log(names);

    console.log(
      '============================= IMAGENS ============================='
    );
    console.log(
      heros.map(
        (heros) => `${heros.thumbnail.path}.${heros.thumbnail.extension}`
      )
    );

    console.log(
      '============================= TOTAL HEROS ============================='
    );
    // ? Pega o numero total de heros
    const total = resposta.data.data;
    totalHeros = total.total;

    console.log(totalHeros);
  })
  .catch(function (error) {
    if (error) {
      // ? Se tiver algum erro printa no catch
      console.log(error);
    }
  });

const controls = {
  next() {
    page++;
    const lastPage = page > totalPage;
    if (lastPage) {
      page--;
    }
  },
  prev() {},
  goTo() {},
};
console.log('============== PAGE ============');
console.log(page);
controls.next();
console.log(page);

console.log('arquitetura', os.arch());
// console.log('cpus', os.cpus());
console.log('cpus', os.cpus().length);

const freeMemory = os.freemem() / 1024 / 1024;
const totalMemory = os.totalmem() / 1024 / 1024;

console.log('free memory', freeMemory);
console.log('total memory', totalMemory);
console.log('%', (freeMemory / totalMemory) * 100);

console.log('plataform', os.platform());

// Dias pc ligado
const up = os.uptime() / 60 / 60 / 24;
console.log('uptime', up);

console.log(ip.address());

// console.log(os.networkInterfaces());
