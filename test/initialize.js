const expect  = require('chai').expect;
const Bot     = require(__dirname + '/../');



var attribute = {
    url : 'https://teste.com.br',
    description_name : 'spider',
    controller_name : 'ctr_spider'
};

describe('bot-check', function() {
  	it('Check attribute function', function(done) {
        var Spider = new Bot();

    	Spider.checkAttributes(attribute).then(function(response){
            expect(attribute.url).to.be.equal(response.url);
            expect(attribute.description_name).to.be.equal(response.description_name);
            expect(attribute.controller_name).to.be.equal(response.controller_name);
            done();            
        }).catch(function(error){
           done(error);
        });
  	});

    it('Check events initialize', function(done) {
        var Spider = new Bot();

        Spider.events.on('initialize', function (value) {
            if (value.error) {
                done(value.error);
            } else {
                done();
            }
        });

        Spider.initialize(attribute);
    });
});