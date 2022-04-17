//7.0
const messages = {
  help: `¡Hola!, soy un bot automático de WhatsApp, creado para hacer más interativos los chats :D... Los comandos que puedes usar son: 

1. Comando Ayuda: ver más informacion sobre el bot y su funcionamiento.

USO: */help* o */ayuda*

2 Comando Spam:. Funciona para enviar un mismo mensaje repetidas veces y sin parar... .Entre mayor sea el número de mensajes, puede tardar más en enviarse.

USO: */spam* _Tu Mensaje_ _<NumeroDeVecesQueSeHaceSpam>_

3. Comando Say: Sirve para que el bot repita lo mismo que dijiste; en otro mensaje.

USO: */say* _Tu mensaje_

4. Comando Send: Funciona para enviar mensajes internos a una persona, aunque no esté en tu lista de contactos o en un grupo.

USO: */send* _TuMensaje_ _<NumeroALQueSeEnvía>_. Los numeros deben ser escritos con su prefijo y número entero, no funciona con menciones ni símbolos (como el -, o +).

5. Comando intspam: Funciona para hacer spam a un numero de mensaje directo, aunque no esté en tus contactos.

USO: */intspam* _Tu Mensaje (sí puede contener espacios)_ _<NúmeroDeSpams>_ _<NumeroObjetivoParaSpam>_. Los numeros deben ser escritos con su prefijo y número entero, no funciona con menciones ni símbolos (como el -, o +)


Bot disponible 24/7`,

sendMessage: `Mensaje enviado, si digitaste el número mal, puede que no llegue a su destino.
*Recuerda escribir todo el numero pegado, incluyendo el prefijo del país al principio.*`,

spam: `Ha ocurrido un error, puede deberse a que intentas enviar más de 100 mensajes, o hay carácteres que no se pueden reconocer en el número (como *+*, *-* o espacios)`,
simbolos: {
  good: '🟢',
  average: '🔵',
  medium: '🟡',
  much:'🔻',
  alert: '❓'
}

}
module.exports = messages;