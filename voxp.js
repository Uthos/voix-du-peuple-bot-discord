const Discord = require('discord.js');
const readline = require('readline');
const client = new Discord.Client();
const token = 'nope';

function Ready_Check(){
    client.on('ready', () => {
        console.log('I am ready!');
    });
}

function Vote() {
    client.on('message', message => {
        if (message.author.bot === false && message.channel.type !== 'dm' && message.content.substr(0, 5) === '!vote') {
            if (message.channel.id !=='439843245879721998') {message.channel.send("Mec, t'es conscient que c'est pas le bon canal ? Les demandes de vote c'est dans l'Assemblée Générale.");}
            else {
                if (message.content.substr(6, 6) === 'server') {
                    if (message.content.substr(13, 4) === 'name') {
                        message.channel.send('TG, ça marche pas vraiment encore.');
                    }
                    else {
                        message.channel.send('TG, ça marche pas vraiment encore.');
                    }
                }
                else {
                message.channel.send('TG, ça marche pas encore.');
                }
            }
        }
        });
}

function Prompt() {
    var chPr = '439843245879721998'
    client.on('message', message => {
        if (message.channel.type === 'dm' && message.author.id === '180381402783678465') {
            if (message.content === "!ag") {
                chPr = '439843245879721998'
            }
            else if (message.content === "!cp") {
                chPr = '439848262518702081'
            }
            else if (message.content === "!pp") {
                chPr = '440179210045358080'
            }
            else if (message.content === "!pa") {
                chPr = '439857769785589781'
            }
            else {
                client.channels.get(chPr).send(message.content)
            }
        }
    });
}


Ready_Check();
Vote();
Prompt();
client.login(token);
