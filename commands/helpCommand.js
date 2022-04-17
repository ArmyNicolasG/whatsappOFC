//7.0
//HELP
const helpCommand = (client, message, messages) => {
    client.startTyping(message.from);
    client.sendText(message.from, messages.help)
    .then((result) => {console.log('Result: ', result)}).catch((erro) => {client.sendText(message.from, ('Error: ', erro))});
}
exports.helpCommand = helpCommand;