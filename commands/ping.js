module.exports = {
    name: 'ping',
    description: 'pongs the ping with the ding',
    execute(message, args) {
        message.channel.send('Pong! 🏓')
        console.log(`pong pinged with ${message.author.username}`)
    }
}