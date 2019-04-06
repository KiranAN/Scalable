/// Custom Models of Application
/// appModels.js
/// Control Object creation extension/modification
"use strict";
App.Modules.Models = (function(){

	var service = {};	
	
	// Now private to Models
	function ApiModel(data){
		var prop1= {},prop2 = {};
		prop1 = data.prop1;
		prop2 = data.prop2;
	}

	ApiModel.prototype.truncData = function(){
		return this.prop1.trim();
	}
	
	/*
	ApiModel.prototype.method2 = function(){
		/// TODO:
	}
	etc
	*/
	
	service.getApiModel = function(data){
		return new ApiModel(data);
	}
	
	return service;
})();

