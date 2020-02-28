const expect = require('chai').expect;

var Bot = require(__dirname + '/../');

describe('bot-check', function() {

  	it('Check attribute function', function(done) {
    	var Spider = new Bot();

        var attribute = {
            url : 'https://teste.com.br',
            description_name : 'spider',
            controller_name : 'ctr_spider'
        }

    	Spider.checkAttributes(attribute).then(function(response){
            expect(attribute.url).to.be.equal(response.url);
            expect(attribute.description_name).to.be.equal(response.description_name);
            expect(attribute.controller_name).to.be.equal(response.controller_name);
            done();            
        }).catch(function(error){
           done(error);
        })
  	});
});