module.exports = {
    name: 'help',
    description: 'sends a message for user to check their dms, then sends them the help doc',
    execute(message, args) {
        const fs = require('fs')
        fs.readFile("help_file.txt", (err, data) => {
            if (err) throw err
            const helpfile = data.toString()
            message.reply("Check your dms!")
            message.author.send(helpfile)
            console.log(`helped ${message.author.username} learn what i do`)
          })
    }
}