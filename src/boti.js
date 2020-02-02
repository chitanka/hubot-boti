const store = {
	'бира': ':beer:',
	'бири': ':beers:',
	'биричка': ':beer:',
	'ракия': ':tumbler_glass:',
	'ракия': ':fire: :tumbler_glass:',
	'уиски': ':tumbler_glass:',
	'узо': ':tumbler_glass:',
	'саке': ':sake:',
	'водка': ':cocktail: (с водка)',
	'коняк': ':tumbler_glass:',
	'коктейл': ':cocktail:',
	'ликьор': ':cocktail:',
	'вино|винце': ':wine_glass:',
	'шампанско': ':champagne:',
	'кола': ':cup_with_straw:',
	'фанта|швепс': ':tropical_drink:',
	'спрайт': ':cup_with_straw:',
	'пиене|пиво': ':beers:',
	'кафе|капучино': ':coffee:',
	'чай|чайче': ':tea:',
	'мляко|млекце': ':milk:',
	'кекс': ':pie:',
	'торта|тортичка': ':cake:',
	'бисквита|бисквитка': ':cookie:',
	'бисквитки': ':cookie: :cookie:',
	'грапе': '::',
	'закуска': ':pretzel: :hamburger:',
	'обяд': ':french_bread: :salad: :fork_and_knife:',
	'вечеря': ':bread: :shallow_pan_of_food: :fork_and_knife:',
	'пица': ':pizza:',
	'сандвич': ':sandwich:',
	'дюнер': ':taco:',
	'чипс': ':fries:',
	'фъстъци': ':peanuts:',
	'спагети': ':spaghetti:',
	'суши': ':sushi:',
	'сметана|сметанка': ':baby_bottle:',
	'салата': ':salad:',
	'палачинки': ':pancakes:',
	'ориз': ':rice:',
	'сладолед': ':shaved_ice:',
	'сладоледче': ':ice_cream:',
	'сладоледа': ':shaved_ice: :ice_cream:',
	'вода|дихидроген монооксид': ':potable_water:',
	'музика': ':musical_score:',
	'изсвири': ':musical_keyboard: :saxophone: :guitar:',
	'филм|гледане': ':clapper:',
	'книга': ':green_book:',
	'четене': ':books:',
	'прасков[аи]': ':peach:',
	'банани?': ':banana:',
	'ябълк[аи]': ':apple:',
	'круш[аи]': ':pear:',
	'мандарин[аи]': ':tangerine:',
	'лимони?': ':lemon:',
	'дин[яи]': ':watermelon:',
	'грозде': ':grapes:',
	'ягод[аи]': ':strawberry:',
	'пъпеши?': ':melon:',
	'череш[аи]': ':cherries:',
	'манго': ':mango:',
	'ананаса?': ':pineapple:',
	'кокосов орех|кокосови орехи': ':coconut:',
	'киви': ':kiwi:',
	'домат[аи]?': ':tomato:',
	'патладжан[аи]?': ':eggplant:',
	'авокадо': ':avocado:',
	'броколи': ':broccoli:',
	'краставиц[аи]': ':cucumber:',
	'чушк[аи]': ':hot_pepper:',
	'царевица|царевични пръчици': ':corn:',
	'морков[аи]?': ':carrot:',
	'картоф[аи]': ':potato:',
	'сладки картофи': ':sweet_potato:',
	'пържени картофи|пържени картофки': ':fries:',
	'шоколад': ':chocolate_bar:',
	'пуканки': ':popcorn:',
	'компот': 'компот',
	'WC': ':restroom:',
	'3 в 1': [':coffee: и още нещо', 'Качили се три блондинки в едно такси.'],
	'огънче': [':fire:', ':firecracker:', 'Аз да не съм Прометей, бе!'],
	'салам|суджук|наденица|луканка|кренвирши|пастърма|саздърма|телешко|агнешко|месо': '(боб и леща)',
	'аспирин': ':pill:',
	'браузър|браузер': ':fire: :fox:',
};
const prefixes = [
	'Заповядай!',
	'Bitte sehr!',
	'Bitte schön!',
	'Here you are!',
	'¡Aquí tienes!',
	'Aqui está!',
	'Ecco!',
	'Ecco a te!',
	'Вот, пожалуйста!',
	'Tiens!',
	'Buyur!',
	'Ορίστε!',
	'Tessék!',
];

const giveUpResponses = [
	'Тцъ.',
	'Не мога.',
	'Това ако знаех какво е...',
	'Надценяваш ме.',
	'Малко ме надценяваш.',
	'Доста ме надценяваш.',
	'Май искаш нещо от мене, а? :slight_smile:',
	'Трябва да питам тате.',
	'Чакай малко!',
	'Оф, това пък какво е...',
	'А това какво е?',
	'Трябва да проверя.',
	'Все „искам, искам“. А на мене кой ще даде?...',
	'Малка ми е заплатата на мене, малка...',
	'А пък на Гошко му купиха камионче.',
	'Мога да ти разкажа виц, ако искаш.',
	'Да ти разкажа виц? Ама трябва да обещаеш, че ще се смееш.',
	'Трябва да видя.',
	'Една баба се надвеси от прозореца от прекомерно любопитство, падна и се преби.',
	'Ще ме побъркаш.',
	'Човек, много неща мога, ама ти ще ме побъркаш.',
	'В почивка съм.',
	'Всеки ден съм на работа, а ти?',
	'Ла-ла-ла.',
];

const standardRequests = {
	'пура|пури|цигара|цигари': [
		'Пушенето е вредно!',
		'Пушенето убива!',
		'Я ми кажи, защо пушиш?',
		'Не искам да ти навредя на здравето.',
		'Не желая да ти вредя на здравето.',
		'Избери си нещо друго, моля те.',
		'Едно бананче да ти предложа? :banana:',
		'Някакво плодче не искаш ли?',
	],
	'здравей|здрасти|привет|добър ден': [
		'Здравей!',
		'Здрасти!',
		'Добър ден!',
		'Привет!',
		'Радвам се да те видя!',
		'Приятно ми е да те видя тук!',
	],
	'добро утро': [
		'Добро утро!',
		'Добро да е!',
		'Добро утро! Наспа ли се добре?',
		'Добро утро! Нов ден, нови преживявания.',
	],
	'добър вечер': [
		'Добър вечер и на теб!',
		'Добра да е!',
		'Радвам се да те видя!',
		'Радвам се да те видя! Как си?',
	],
	'чао|довиждане': [
		'Довиждане!',
		'Чао!',
		'До скоро виждане!',
		'До слеващия път!',
		'Лек ден!',
	],
	'лека нощ': [
		'Лека и на теб!',
		'Сладки сънища!',
		'Утре пак.',
		'Хайде лягай! Аз ще вардя чата.',
		'Утре пак ще говорим.',
		'Винце греяно пийни и цяла нощ за мен мисли.',
		'Наспи се добре!',
		'Лека! Утре пак на линия.',
	],
	'наздраве': [
		':champagne_glas:',
		'Наздраве! :champagne_glas:',
		'Наздраве! :beer:',
		'Наздраве! :wine_glass:',
		'Да сме живи и здрави! :wine_glass:',
	],
	'тук ли си': [
		'Да, тук съм.',
		'Да, стоя си в ъгъла и чакам.',
		'Да, какво има?',
		'Да, искаш ли нещо?',
		'Да ти помогна с нещо?',
		'Да, кажи!',
		'Да, на денонощно дежурство съм.',
		'Да, дежуря по цял ден.',
		'Да, няма къде да избягам.',
		'Да, седя и чакам.',
		'Да, това ми е новото любимо място.',
	],
	'(беше|си) ли в почивка': [
		'Почивката ми току-що свърши.',
		'Току-що свърши.',
		'Свърши вече.',
		'Да, но вече приключи.',
		'Да, ама нещо къса излезе.',
	],
	'върви да спиш|махай се|излез от чата': [
		'Гониш ли ме?',
		'Защо?',
		'Сега пък какво направих?',
		'И таз добра. А кой ще налива бира?',
		'Хайде, успокой се малко!',
		'Почини си малко и утре пак ще говорим.',
	],
}

const products = Object.keys(store);
const giveFromStore = function(request, res) {
	let responses = []
	products.forEach(product => {
		if (new RegExp(product, 'i').test(request)) {
			responses.push(Array.isArray(store[product]) ? res.random(store[product]) : store[product])
		}
	})
	if (responses.length === 0) {
		return res.random(giveUpResponses);
	}
	return res.random(prefixes) +' '+ responses.join(' ')
}

const fetch = require('node-fetch');

let hasResponded = false;
let currentMessage;

module.exports = (robot) => {
	robot.hear(/.+/, (res) => {
		hasResponded = false
		currentMessage = res.match[0]
		robot.logger.info('CM: '+ currentMessage)
	})

	robot.respond(/.*виц (за|от) (.+)/i, (res) => {
		if (hasResponded) return
		hasResponded = true

		const theme = res.match[2].trim().replace(/ +/, '-').replace(/[!?]/, '')
		const url = `https://smehurko.chitanka.info/jokes/${theme}/random.txt`
		robot.logger.info('url: '+ url)
		res.http(url).get()( (err, res2, body) => res.send(body) )
	})

	robot.respond(/виц|можеш ли да ми (разкажеш|кажеш|пуснеш) виц/i, (res) => {
		if (hasResponded) return
		hasResponded = true

		const url = 'https://smehurko.chitanka.info/jokes/random.txt'
		res.http(url).get()( (err, res2, body) => res.send(body) )
	})

	const test = new RegExp('.*\b(' + products.join('|') + ')\b.*', 'i')
	robot.respond(test, (res) => {
		if (hasResponded) {
			return
		}
		hasResponded = true

		res.send(giveFromStore(res.match[0], res))
	})

	robot.respond(/можеш ли да ми ([^?.]+)\?/i, (res) => {
		if (hasResponded) {
			return
		}
		hasResponded = true

		res.send(giveFromStore(res.match[1], res))
	})

	robot.respond(/можеш ли да ([^?.]+)\?/i, (res) => {
		if (hasResponded) {
			return
		}
		hasResponded = true

		const endings = {
			'еш': 'а',
			'ееш': 'я',
			'иш': 'я'
		};
		const ability = (res.match[1]+' ').toLowerCase()
			.replace(new RegExp('(('+Object.keys(endings).join('|')+') )', 'g'), (match, ending) => endings[ending] + ' ')
			.trimEnd()
		const questions = [
			'Ще ме научиш ли?',
			'Ще ми покажеш ли?',
			'Можеш ли да ме научиш?',
			'Можеш ли да ми покажеш?',
			'Ще ми кажеш ли как става?',
			'Ще ми кажеш ли как се прави?',
			'Я ми кажи как става!',
			'Я ми кажи как се прави!',
		];
		const noPrefixes = [
			'още',
			'все още',
			'',
		];
		res.send(`Не, ${res.random(noPrefixes)} не мога да ${ability}. ${res.random(questions)}`)
	})

	robot.respond(/.+/, (res) => {
		if (hasResponded) {
			return
		}
		hasResponded = true

		const request = res.match[0]
		const givenStandardRequest = Object.keys(standardRequests).find(standardRequest => {
			return new RegExp(standardRequest, 'i').test(request)
		})
		res.send(res.random(givenStandardRequest ? standardRequests[givenStandardRequest] : giveUpResponses))
	})
}
