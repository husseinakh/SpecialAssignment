//AC59c786c13d47e642a34d01322c01da63
const accountSid = "AC59c786c13d47e642a34d01322c01da63";
const authToken = "d9395b7a574e176a906eae877e827fd1";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is Hussein trying the assignment",
    from: "+17863530073",
    to: "+491728698602"
  })
  .then(message => console.log(message.sid));
