//9.0
//INDEX
const os = require('os');
const axios = require("axios");
const venom = require('venom-bot');
const messages = require('./commands/messages.js');
const helpCommand = require('./commands/helpCommand.js');
const spamCommand = require('./commands/spamCommand.js');
const sayCommand = require('./commands/sayCommand.js');
const sendCommand = require('./commands/sendCommand.js');
const intspamCommand = require('./commands/intspamCommand.js');
const joinCommand = require('./commands/joinCommand.js');
const ytCommand = require('./commands/ytCommand.js');

venom.create().then((client) => start(client)).catch((erro) => {console.log(erro);});
function start(client){

  let prefix = '/';
  //setInterval( () => { getStats.getStats(client, messages) } , 1000 * 60 * 60);

  client.onMessage((message) => {

    //HELP
    if(message.body.startsWith(prefix + 'help') || message.body.startsWith(prefix + 'ayuda') || message.body.startsWith(prefix + 'menu')) {
      //helpCommand.helpCommand(client, message, messages);
      client.sendText(message.from, `Comandos:

/menu

/yt _búsqueda_

/say _mensaje_

/spam _mensaje_ 5

24/7 ON. 
`)
    }

    //SPAM
    else if((message.body.startsWith(prefix + 'spam')) || (message.body.startsWith(prefix + 'spam') && message.fromMe == true)){
      spamCommand.spamCommand(client, message);
    }

    //SAY
    else if(message.body.startsWith(prefix + 'say')){
      sayCommand.sayCommand(client, message);
    }

    //SEND
    else if(message.body.startsWith(prefix + 'send')){
      sendCommand.sendCommand(client, message, messages);
    }

    //SPAM INTERNO
    else if(message.body.startsWith(prefix + 'intspam')){
      intspamCommand.intspamCommand(client, message, messages);
    }

    //JOIN
    else if(message.body.startsWith(prefix + 'join')){
      joinCommand.joinCommand(client, message);
    }

    //YOUTUBE
    else if(message.body.startsWith(prefix + 'yt')){
      ytCommand.ytCommand(axios, client, message);
    }

    //ERROR
    else if(message.isGroupMsg == false){
      //helpCommand.helpCommand(client, message, messages);
      client.sendText(message.from, `Comandos:

/menu

/yt _búsqueda_

/say _mensaje_

/spam _mensaje_ 5

24/7 ON. 
`)
    }

})}










 