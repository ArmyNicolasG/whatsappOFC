//7.0
//SAY
const sayCommand = (client, message) => {
    client.startTyping(message.from);
    let spammer = message.content.split(' ');
      spammer.shift();
    let mensajeEnviar = spammer.join(' ');
      client.sendText(message.from, mensajeEnviar).then((result) => {console.log('Result: ', result)}).catch((erro) => {client.sendText(message.from, ('Error: ', erro))})  
}
exports.sayCommand = sayCommand;