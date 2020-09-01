module.exports = {
    name: 'branch',
    description: 'prints branch label, can be beta or live release',
    execute(message, args) {
        message.channel.send('This is the Live Release version of mini-nuk')
        console.log(`${message.author.username} inquired about which me is me that i am that is me`)
    }
}