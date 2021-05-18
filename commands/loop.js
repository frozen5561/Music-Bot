const { MessageEmbed } = require("discord.js");
const config = require('../config.json')

module.exports.config = { 
    name: 'loop',
    aliases: ['döngü']
}

module.exports.sex = async(client, message, args) => {

if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Botla aynı kanalda olmalısın!**").setTimestamp().setFooter(`${config.EmbedFooter}`));
    
if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Lütfen bir sesli kanala girin!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

if (!client.player.getQueue(message)) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription("**❗️ - Döngüye almak için bir şarkı ekleyin!**").setTimestamp().setFooter(`${config.EmbedFooter}`));

client.player.getQueue(message).repeatMode.then(repeatMode => {
if (repeatMode) { client.player.setRepeatMode(message, false); return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - Döngü başarıyla **devre dışı** bırakıldı!`).setTimestamp().setFooter(`${config.EmbedFooter}`));
   } else { client.player.setRepeatMode(message, true); return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`✔️ - Döngü başarıyla **aktive** edildi!`).setTimestamp().setFooter(`${config.EmbedFooter}`)) } });

};
