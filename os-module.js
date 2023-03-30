const os=require('os');
//info about curent user
const user=os.userInfo();
console.log(user);

//method system uptime in settings
console.log(`the system uptime is ${os.uptime()} seconds`)


const currentOS={
    name:os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS);