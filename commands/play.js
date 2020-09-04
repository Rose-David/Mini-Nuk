module.exports = {
    name: 'play',
    description: 'plays songs from yt',
    guildOnly: true,
    execute(message, args, client) {
        console.log("attempting playback")
        const YouTube = require('simple-youtube-api')
        const youtube = new YouTube(process.env.YOUTUBE_SECRET)
        const ytdl = require('ytdl-core')
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {return message.reply('join a voice channel first lol')}
        
        if (args[0].toLowerCase().startsWith('http') || args[0].toLowerCase().startsWith('https') || args[0].toLowerCase().startsWith('www.') || args[0].toLowerCase().startsWith('youtube.')) {
            try {
                voiceChannel.join().then(connection => {
                    const stream = ytdl(args[0], { filter: 'audioonly' });
                    const dispatcher = connection.play(stream);

                    message.reply('vaild youtube link recognized, playing.')
                    
                    client.on('message', message => {
                        console.log("message received")
                        dispatcher.end()
                    });
                    dispatcher.on('finish', () => voiceChannel.leave())
                }).catch((error) => {
                    message.reply('Invalid youtube URL!')
                }); 
            } catch(err) {
                return message.reply('Invalid youtube URL.')
            }
        } else {
            if (!args.join(' ').split(' | ')[1]) {
                youtube.searchVideos(args.join(' ').split(' | ')[0], 1).then(results => {
                    console.log(`single search requested, ${results.length} retrieved.`)
                    voiceChannel.join().then(connection => {
                        const stream = ytdl(results[0].url, { filter: "audioonly"});
                        const dispatcher = connection.play(stream);
                        message.reply(`video found: ${results[0].title} by ${results[0].channel.title}.
                        url: ${results[0].shortURL}`)
        
                        dispatcher.on('finish', () => voiceChannel.leave());
                    })
                })
                
                
            } else {
                const placing = args.join(' ').split(' | ')[1].trim()
                youtube.searchVideos(args.join(' ').split(' | ')[0], placing).then(results => {
                    console.log(`${results.length} videos retrieved`)
                    voiceChannel.join().then(connection => {
                        const stream = ytdl(results[placing-1].url, { filter: "audioonly"});
                        const dispatcher = connection.play(stream);
                        message.reply(`video found: ${results[placing-1].title} by ${results[placing-1].channel.title}.
                        url: ${results[placing-1].shortURL}`)
        
                        dispatcher.on('finish', () => voiceChannel.leave());
                    })
                })
                
            }
        }
    },
    stop(message, args, client) {
        console.log('stop')
        dispatcher.end()
        message.guild.voiceConnection.leave();
    }
}