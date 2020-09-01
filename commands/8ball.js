module.exports = {
    name: '8ball',
    description: 'picks a random response omegalul',
    execute(message, args) {
        const eightBallResponseArray = ['It is physically impossible.', 'Not a chance.', 'just no.', 'no.', 'Probably not.', 'About 50/50', 'Even chance.', 'Perhaps.', 'Ok chance.', 'Probably.', 'Most Likely', '100% yeah.']
        let eightBallChoice = eightBallResponseArray[Math.floor(Math.random()*eightBallResponseArray.length)]
        message.reply(eightBallChoice)
    }
}