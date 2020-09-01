module.exports = {
    name: 'avatar',
    description: 'grabs user avatars',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({format: 'png', dynamic: true})}`)
            console.log(`${message.author.username} has been staring in the mirror for too long.`)
          }
          const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL({format: 'png', dynamic: true})}`
          })
          message.channel.send(avatarList)
          console.log(`${message.author.username} blatantly stole someone's avatar`)
    }
}