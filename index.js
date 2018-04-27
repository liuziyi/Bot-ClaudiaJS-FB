var botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

module.exports = botBuilder(function(request){
	if(request.type === 'facebook'){
		if(request.text.includes('news')){
			const generic = new fbTemplate.Generic();

			return generic
				.addBubble('News', 'Which of the following would you like?')
					.addImage('https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350')
					.addButton('Hacker News', 'https://news.ycombinator.com/')
					.addButton('Hacker Noon', 'https://hackernoon.com/')
				.get();
		}
		
		if(request.text.includes('blogs')){
			const generic = new fbTemplate.Generic();

			return generic
				.addBubble('Blogs', 'Which of the following would you like?')
					.addImage('https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350')
					.addButton('Farnam Street', 'https://www.fs.blog/blog/')
					.addButton('25iq', 'https://25iq.com/')
				.get();
		}

		if(request.text.includes('movies')){
			const generic = new fbTemplate.Generic();

			return generic
				.addBubble('Movies', 'Which of the following would you like?')
					.addImage('https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350')
					.addButton('GV', 'https://www.gv.com.sg/#/')
					.addButton('Cathay', 'http://www.cathaycineplexes.com.sg')
				.get();
		}

		if(request.text.includes('sta')){
			const generic = new fbTemplate.Generic();

			return generic
				.addBubble('STA', 'Which of the following would you like?')
					.addImage('https://images.pexels.com/photos/7753/sun-ball-tennis-court.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350')
					.addButton('Official Login', 'https://www.singtennis.org.sg/admincp/user-login.aspx')
					.addButton('Tournaments', 'https://www.singtennis.org.sg/tournament.aspx')
					.addButton('Main', 'https://www.singtennis.org.sg')
				.get();
		}

		return 'Please select one of the following: news, blogs, movies or sta.'
	}

}, { platforms: ['facebook'] });



