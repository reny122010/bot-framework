var Bot = require(__dirname + '/../');

describe('bot-check', function() {

  	it('Check attribute', async function() {
    	var Spider = new Bot();

    	Spider.initialize({
    		url : '',
    		description_name : '',
    		controller_name : ''
    	});

    	Spider.events.on('initialize', function (text) {
			console.log(text)
		})
  	});
});