module.exports = {
    name: 'rng',
    description: 'random number generator',
    execute(message, args) {
      if (args[1]===undefined) {return message.reply("You didn't add both numbers. What exactly are you expecting me to do here?")}
      let messageRNG_difference = args[1]-args[0]
      let messageRNG_Result = Math.floor(
        Math.random() * (parseInt(messageRNG_difference, 10) + 1)
      ) + parseInt(args[0], 10);
      if (!isNaN(messageRNG_Result)) {
        message.reply(messageRNG_Result.toString());
        console.log(
          `helped ${
            message.author.username
          } find ${messageRNG_Result.toString()}`
          );
      }
      else {message.reply("Error, result invalid. You most likely put a comma in there, or you're doing this on purpose. Well played.")}
        
    }
}