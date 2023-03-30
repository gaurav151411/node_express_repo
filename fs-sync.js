// const fs=require("fs");
// fs.readFileSync()
const {readFileSync,writeFileSync}=require('fs');
console.log('start');
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

//abc.txt will be created it didn't existed earlier
writeFileSync('./content/abc.txt',`${first} ${second}`);
//syncrounously means running line by line 
console.log('done with this task');
console.log('starting next one');

//here node makes js focus on one user only 