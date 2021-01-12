const os = require('os');
const ip = require('ip');

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
