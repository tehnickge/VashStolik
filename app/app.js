console.log(__filename);
const log = require('./log')
const os = require('os');
const { userName: user, sayHi } = require('./test');

console.log(sayHi(user));

log('User-logged')