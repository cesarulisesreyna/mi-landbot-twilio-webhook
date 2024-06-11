const accountSid = "ACb7d9e3a8e37209575b503f1a9077db2f"; 
const authToken = "03938084d33ec5c379859c179067f240";
const client = require('twilio')(accountSid, authToken);

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const phoneNumber = body.entry.variables.numero; // Asume que "numero" es el nombre de tu variable Landbot

  await client.messages.create({
     body: 'Este es un mensaje de prueba desde Twilio',
     from: 'whatsapp:+14155238886', // Este es un número de prueba de Twilio
     to: `whatsapp:+${phoneNumber}` 
  });

  return {
    statusCode: 200,
    body: 'Mensaje enviado exitosamente'
  };
}
