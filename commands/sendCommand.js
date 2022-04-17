//7.0
//SEND
const sendCommand = (client, message, messages) => {
    client.startTyping(message.from);
    let sender = message.content.split(' ');
      sender.shift();
    let direction = sender.pop() + '@c.us';
     return new Promise((res, rej) => {
       if(!direction.includes('-')){
         let mensajeEnviar = sender.join(' ');
        client.sendText(direction, mensajeEnviar).then((result) => {console.log('Result: ', result)}).catch((erro) => {console.log('Error: ', erro)})
      res(messages.sendMessage)
  }
      else{rej('Ha ocurrido un error, intenta borrar los espacios, guiones, + y demás símbolos del número')}}).then((result) => {client.sendText(message.from, result).then((result) => {console.log('Result: ', result)}).catch((erro) => {console.log('Error: ', erro)})}).catch((err) => {client.sendText(message.from,'Error:' + err)})
}
exports.sendCommand = sendCommand;