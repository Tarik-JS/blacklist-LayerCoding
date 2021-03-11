
//layercoding //
const db = require("quick.db")
client.on("message", async message => {
  if (message.content.startsWith(prefix + "blacklist")) {
    if (message.author.id !== 'ايدي اونر البوت') return;
    let args = message.content.split(" ").slice(1).join(" ")
    console.log(args)
    let user = message.mentions.users.first() || await client.users.fetch(args);

    if (!user) return message.reply("Please mention someone or id")

    let there = db.get(`bk_${user.id}`)
    if (there) return message.reply("This user already blacklisted.")

    db.set(`bk_${user.id}`, true)
    message.channel.send(`**${user.tag}**, has been blacklisted`)


  }
})



client.on("message", async message => {
  if (message.content.startsWith(prefix + "unblacklist")) {
    if (message.author.id !== 'ايدي اونر البوت') return;
    let args = message.content.split(" ").slice(1).join(" ")

    let user = message.mentions.users.first() || await client.users.fetch(args);
    if (!user) return message.reply("Please mention someone or id")

    let there = db.get(`bk_${user.id}`)
    if (!there) return message.reply("This user is not blacklisted.")

    db.delete(`bk_${user.id}`)
    message.channel.send(`**${user.tag}**, has been unblacklisted`)
  }
})
/*
يجب عليك وضع في كل كود 
    let there = db.get(`bk_${message.author.id}`)
    if(there) return message.reply("you are blacklisted ..")
*/
//مثال
client.on("message", message => {
  if (message.content === '!ping') {
    ///
    let there = db.get(`bk_${message.author.id}`)
    if (there) return message.reply("you are blacklisted ..")
    ///
    return message.reply(`MY PING **${client.ws.ping}ms**`)
  }
})


