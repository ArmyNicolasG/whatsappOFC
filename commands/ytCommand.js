const key = require("../keys/youtubeKey.js");
const ytCommand = (axios, client, message) => {
    client.startTyping(message.from);
    let search = message.body.split(' ');
    search.shift();
    search = search.join('%20');
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${search}&maxResults=1&type=video&part=snippet`)
        .then( ( data ) => {
            if(data.data.items[0]){
                client.sendImage(message.from,`${data.data.items[0].snippet.thumbnails.high.url}`,`YT-Search-Thumbnail`,`${data.data.items[0].snippet.title}\n\nhttps://youtube.com/watch?v=${data.data.items[0].id.videoId}`);
            }
            else{
                client.sendText(message.from, 'No se encontraron resultados para la búsqueda :(');
            }
        })
        .catch( err => console.log(err));
    client.stopTyping(message.from);
}

exports.ytCommand = ytCommand;