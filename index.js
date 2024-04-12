config = require("dotenv").config();
const logger = require('./logger');

console.log(process.env.CURR_ENVIRONMENT);

logger.log("A message")




