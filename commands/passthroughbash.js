module.exports = {
  name: "passthroughbash",
  description: "passes a bash shell command through to the server. For authorized use only.",
  shhSecret: true,
  execute(message, args) {
    const { exec } = require("child_process");

    const runnableBash = args.join(" ");
    console.log(`${message.author.username} attempting to run ${runnableBash}`)
    
    exec(runnableBash, (err, stdout, stderror) => {
      if (err) {
        message.reply(err)
        console.error(err)
      } else {
        console.log(`stdout: ${stdout}`)
        console.log(`stderror: ${stderror}`)
        message.reply(`stdout: ${stdout}`)
        message.channel.send(`stderror: ${stderror}`)
      };
    });
  }
}