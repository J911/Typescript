function echoFunction(message: string, callback) {
    return callback(message);
}

let responseMessage = echoFunction("Hello world!", message => message);
console.log(responseMessage);