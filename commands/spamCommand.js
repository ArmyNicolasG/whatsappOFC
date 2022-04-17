//7.0
//SPAM
const spamCommand = (client, message) => {
    client.startTyping(message.from);   
    let spammer = message.content.split(' ');
    spammer.shift();
    let numeroDeMensajes = parseInt(spammer.pop());
    let mensajeEnviar = spammer.join(' ');
    if(numeroDeMensajes <= 100){
        for(let i = 0; i < numeroDeMensajes; i++){
            client.startTyping(message.from);
            client.sendText(message.from, mensajeEnviar)
        }
    }
    console.log(`Spameando ${numeroDeMensajes} mensajes desde ${message.from} de ${message.sender.id}`)  
}
exports.spamCommand = spamCommand;