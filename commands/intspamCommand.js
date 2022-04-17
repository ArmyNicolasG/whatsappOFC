//7.0
//INTSPAM
const intspamCommand = (client, message, messages) => {
    client.startTyping(message.from);
      let sender = message.content.split(' ');
      sender.shift();
      let direction = sender.pop() + '@c.us';
      let cantidad = parseInt(sender.pop())
       return new Promise((res, rej) => {
         if(cantidad <= 100){
           let mensajeEnviar = sender.join(' ');
           for(let i = 0; i < cantidad; i++){
            client.startTyping(message.from);
            client.sendText(direction, mensajeEnviar).then((result) => {console.log('Result: ', result)}).catch((erro) => {console.log('Error: ', erro)})
           }
        res(`Se están enviando ${cantidad} mensajes al número indicado, si digitaste el número mal, puede que no llegue a su destino. Entre mayor sea el número de mensajes, puede tardar más en enviarse.
        
_Recuerda escribir todo el número pegado, incluyendo el prefijo del país al principio_`)  
    }
        else{rej(messages.spam)}}).then((result) => {client.sendText(message.from, result).then((result) => {console.log('Result: ', result)}).catch((erro) => {console.log('Error: ', erro)})}).catch((err) => {client.sendText(message.from,'Error: ' + err)})
}
exports.intspamCommand = intspamCommand;