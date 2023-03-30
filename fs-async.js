const {readFile,writeFile}=require('fs');
console.log('starting task now');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
    })

    const second=result;
    writeFile('./content/abc.txt',`Hey ${first} ,${second}` , (err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log('done with the task');
    });
})
console.log('starting new one');
//here node makes js focus on a user, it shifts inthe meantime to some other course of work if some functionality is taking sotime to execute 