// Convert the domain www.mum.edu to ip equivalent addres
// use dns core module , resolve4

const dns = require('dns');
const {promisify} = require('util');


const getIP = promisify(dns.resolve4);


async function main() {
    try {
        const ip = await getIP('www.mum.edu');
        console.log(ip);
    } catch (e) {
        console.log(e);
    }
}

main();