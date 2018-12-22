const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "399584774592921620"; // ايدي السررفر
var channel = "437328724447199242";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**من قبل رايدر يا كسمك يا @.3bo dà best 🤬 👿#0001  , من قبل رايدر يا كسمك يا @.3bo dà best 🤬 👿#0001  , Raider , Raider , Raider , Raider , Raider , Raider , Raider , Raider , Raider , Raider , Raider , Raider , Raider , Raider , Raider , Raider , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);
