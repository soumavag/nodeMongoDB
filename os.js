//os.js

config = require("dotenv").config();
const logger = require('./logger');

console.log(process.env.CURR_ENVIRONMENT);
logger.log("A message for testing");

//const path = require('path');
//var pathObj = path.parse(__filename);
//console.log(pathObj);
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`)
console.log(`free Memory: ${freeMemory}`)