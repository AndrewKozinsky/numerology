import { Markup, Telegraf } from 'telegraf'

// t.me/TGReactAppTestBot
const token = '7070479202:AAHf0K_unvE-Cq-e8SjfLte3CXI4MjwVNlc'
const webAppUrl = 'https://test.explainit.ru'

// Создание бота
const bot = new Telegraf(token)

// Обработчик команды /start
bot.command('start', (ctx) => {
	// Ответ, который бот даст пользователю на команду /start
	ctx.reply(
		'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение.',
		// Markup.keyboard([Markup.button.webApp('Отправить сообщение', webAppUrl)]),
	)
})

// Запуск бота
bot.launch()
