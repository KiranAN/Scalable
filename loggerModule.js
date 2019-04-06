/// loggerModule.js
"use strict";
App.Modules.LoggerService = (function Logger(){
	var service = {};
	
	service.logError = function(msg){
		console.error(msg);		
	}
	
	service.logSuccess = function(msg){
		console.log(msg || "success");		
	}
	
	service.logInfo = function(msg){
		console.info(msg || "success");		
	}
	
	return service;
})();