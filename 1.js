// const util= require("util")
// const setTimeoutPromise=util.promisify(setTimeout)

const {promisify} = require('util');
const sleep = promisify(setTimeout);

let z;
const f= async ()=>{
  console.log('z', z)
  await sleep(()=>{z=3},1000)
  console.log('z', z)
}

f()