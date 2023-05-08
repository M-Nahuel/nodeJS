console.log('Hey!');
console.warn('Warning!!');
console.error(new Error('There\'s an error!'));
console.log(process);
console.log(process.env);
console.log(process.env[2]);

for (let i=2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

const os = require('os');
console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());
