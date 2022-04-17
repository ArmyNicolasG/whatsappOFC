//8.0
//FUNCIÓN DESHABILITADA
const os = require('os');
const getStats = (client, messages) => {
    let memoriaLibre = os.freemem();
    memoriaLibre = memoriaLibre / 1000000000;
    memoriaLibre = memoriaLibre.toFixed(1);
    let status;
    if( memoriaLibre >= 11.5 ){ status = messages.simbolos.good }
    else if( memoriaLibre < 11.5 && memoriaLibre >= 10 ){ status = messages.simbolos.average }
    else if( memoriaLibre < 10 && memoriaLibre >= 5 ){ status = messages.simbolos.medium }
    else if( memoriaLibre < 5 ){ status = messages.simbolos.much }
    else{ status = messages.simbolos.alert }
    client.sendText('@c.us', `${status} Memoria libre: ${memoriaLibre}GB`)
}
exports.getStats = getStats;