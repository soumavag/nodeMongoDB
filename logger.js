var url = 'http://mylogger.io/log'

function log(message){
    //send an HTTP message
    console.log(message)
}

module.exports.log = log;
module.exports.url = url;