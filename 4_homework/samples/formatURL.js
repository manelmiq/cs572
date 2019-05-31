
const url = require('url');



const urlObject = {
    protocol : 'http',
    host : 'search',
    search : '?q=CS572',
    path : '/search',
};

console.log(url.format(urlObject));