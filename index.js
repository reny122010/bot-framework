"use strict";

var EventEmitter = require('events');
var Spider 		 = require(__dirname + '/core/spider');
var Exceptions 	 = require("exceptions");

const attributes = ['url', 'description_name', 'controller_name'];

class Bot {
	constructor() {
		this.events = new EventEmitter();
	}

	checkAttributes(opt) {
		return new Promise(function(resolve, reject) {
			var options = undefined;

			try {
				options = { ...opt };
			} catch (e) {
				reject(Exceptions.ILLEGAL_STATE.thro("Invalid input parameters, check them: "+ e));
			}

	    	attributes.forEach(function(attr, index) {
				//Check the obrigatory atributes for initialize the bot
				if (!options.hasOwnProperty(attr)) {
					reject(Exceptions.ILLEGAL_STATE.thro("Attibute of initialize the bot has not present: "+ attr));
				} else if (index === Object.keys(options).length - 1) { 
					resolve(options);
				}
			});
	    });
	}

	initialize(options) {
		//Send for checking the obrigatory attributes
		try {
			var _this = this;
			this.checkAttributes(options).then(function(response){
				//Send the event of initialize 
				_this.events.emit('initialize', {error: false});
				Spider.execute(response);
			});	
		} 
		catch (err) {
			_this.events.emit('initialize', {error: err.mensage});
		}
	}
}

module.exports = Bot;
