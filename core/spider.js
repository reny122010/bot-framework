"use strict";

var Exceptions 	 = require("exceptions");
var Interpreter	 = require(__dirname + '/../interpreters');

class Spider {
	constructor(attributes) {
		this.attributes = attributes;

		try {
			this.Descriptor = require(__dirname + '/../descriptors/' + attributes.descriptor_name);
			this.Controller = require(__dirname + '/../controllers/' + attributes.controller_name);
		} catch (err) {
			Exceptions.ILLEGAL_STATE.thro("Problem with loading the description or control components of the application: "+ err)
		}
	}

	run() {
		try {
			var interpreter = this.attributes.load ? Interpreter.load : Interpreter.noload;

			interpreter(
				this.attributes.url, 
				this.attributes.use_proxy,
				this.attributes.preserve_session, 
				this.attributes.context
			).then(function(interpreter_response) {
				this.Descriptor(interpreter_response).then(function(descriptor_response){
					this.Controller(descriptor_response);
				});
			});
		} catch(err) {
			this.run();
		}		
	}
}

module.exports = Spider;