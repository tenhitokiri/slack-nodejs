const slackBots = require('slackbots');
const axios = require('axios');

const bot = new slackBots({
	token : 'xoxb-654798015975-828117186214-VonZqT5WRbbMauazqRINDHsn',
	name  : 'Testapp'
});

bot.on('open', () => {
	console.log('Bot listo');
});

/* bot.on('start', () => {
	bot.postMessageToChannel('varios', 'Master Bot online :smiley:!!');
});
 */
bot.on('message', async (data) => {
	if (data.type !== 'message' || data.subtype == 'bot_message' || !data.text) return;
	const args = data.text.split(' ');
	const command = args.splice(1, 1)[0];
	const user_id = args.splice(0, 1)[0];
	const params = args.join(' ');

	//<@UQC3F5G6A>

	console.log(`destino: ${user_id}`);
	console.log(`comando: ${command}`);
	console.log(`parametros: ${params}`);

	if (command === 'movie' || 'pelicula') {
		//const res = await axios.get(`http://www.omdbapi.com/?t=${params}&apikey=548a6c69`);
		//console.log(res);
	} else {
		console.log('parametro desconocido');
	}
});
