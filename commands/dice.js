module.exports = {
    name: 'dice',
    description: 'rolls a die of a specified number of sides',
    execute(message, args) {
      if (!args[0]) {return message.reply('I need a number of sides')}    
      let messageDICE_Result = (Math.floor(
        Math.random() * (parseInt((args[0]), 10))
      ) + 1); //rolls the dice
      if (!isNaN(messageDICE_Result)) {
        message.reply(messageDICE_Result.toString()); //talks back
        console.log(
          `${message.author.username} rolled a d${args[0]}, and got a ${messageDICE_Result.toString()}`
        ); //logs result
      } else {message.reply("Error, result invalid. You most likely put a comma in there, or you're doing this on purpose. Well played.")}
    }
}