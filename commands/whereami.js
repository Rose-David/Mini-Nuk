module.exports = {
    name: 'whereami',
    description: 'shows server information',
    guildOnly: true,
    execute(message, args) {
        try {
            if (message.guild.owner.nickname!==undefined) {
              message.channel.send(`You are in ${message.guild.name}, in the ${message.channel.name} channel.
  This server has ${message.guild.memberCount}, and was created ${message.guild.createdAt}.
  The current owner is ${message.guild.owner.nickname}, and is located on the ${message.guild.region} server, shard ${message.guild.shardID}`)
              console.log(`${message.author.username} learned about their server`)
            }
            else {
              message.channel.send(`You are in ${message.guild.name}, in the ${message.channel.name} channel.
  This server has ${message.guild.memberCount} members, and was created ${message.guild.createdAt}.
  The current owner is ${message.guild.owner.user.tag}, and is located on the ${message.guild.region} server, shard ${message.guild.shardID}`)
              console.log(`${message.author.username} learned about their server`)
            }
          }
          catch(err) {
            message.channel.send('bruh this is my dms')
            console.log(`${message.author.username} is an idiot that doesnt know what dms are`)
          }
    }
}