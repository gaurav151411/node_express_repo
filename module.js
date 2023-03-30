//every file in js is a module
//module is an encpsulated code
const {john,peter}=require('./names');
//const name=require('./names');
//names.john will also be same
const sayhi=require('./sayhi');

require('./mind-grenade');
// here if function has been called in other file ,it will be called without assigning any varible in the app.js file
sayhi(john);
sayhi(peter);
