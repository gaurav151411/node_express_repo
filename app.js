//npm = global command, comes with node
//npm --version

//local dependency -use it only in this particular project
// npm i <packagename>

//global dependency -use it in any project
//npm install -g <packagename>
//sudo install -g <packagename>(mac)  


// package.json  -manifest file(stores important info about project/package)
// manual approach(create package.json in the root,create proprties etc.)
//npm init
//npm init -y

const _=require('lodash')
const items=[1,[2,[3,[4]]]];
// flattenDeep is method of node js
const newItems=_.flattenDeep(items);
