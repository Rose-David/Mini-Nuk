module.exports = {
    name: 'reverse',
    description: 'reverses message text',
    execute(message, args, bannedStatementsArray) {
      if (bannedStatementsArray.includes(args.join(" ").toLowerCase())) {return message.reply("wow, you definitely are stupid if you thought i was gonna fall for that. you simpleminded buffon, you absolute cretin, you complete bumbling fool. i win.")}  
      message.reply(`${args.join(" ")} backwards is ${args.join(" ").split("").reverse().join("")}`)
      console.log(`helped ${message.author.username} find out what ${args.join(" ")} backwards is`)
    }
}