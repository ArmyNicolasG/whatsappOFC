const joinCommand = (client, message) => {
    let url = message.body.split(' ')[1];
    console.log(`URL: ${url}`);
    let link = url.split('/')[3]
    client.joinGroup(link);
    console.log(`Invite: ${url.split('/')[3]}`)
}

exports.joinCommand = joinCommand;