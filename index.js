"use strict";

var EventEmitter = require('events');
var Spider 		 = require(__dirname + '/core/spider');
var Exceptions 	 = require("exceptions");

const attributes = ['url', 'description_name', 'controller_name'];

class Bot {
	constructor() {
		this.events = new EventEmitter();
	}

	checkAttributes(options) {
		return new Promise(function(resolve, reject) {    
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
			this.checkAttributes(options).then(function(response){
				//Send the event of initialize 
				EventEmitter.emit('initialize', {err: false});
				Spider.execute(response);
			});	
		} 
		catch (err) {
			EventEmitter.emit('initialize', {err: err.mensage});
		}
	}
}

module.exports = Bot;
