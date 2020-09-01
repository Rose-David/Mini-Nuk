module.exports = {
    name: 'whoami',
    description: 'displays info about user',
    execute(message, args) {
        message.channel.send(`You are ${message.author.username}, tag ${message.author.discriminator}.
Your hidden ID is ${message.author.id}, (don't worry, its useless), and you created your account ${message.author.createdAt}`)
        console.log(`$message.author.username} learned about themselves`)
    }
}