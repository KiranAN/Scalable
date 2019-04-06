/// dataService.js
"use strict";
App.Modules.DataService = (function DataFetcher(baseService){
 
	var service = {};

	service.getData = function(success, error){
		baseService.getData(appConstants.GET,appConstants.JSON_TYPE,success,error);
	}

	service.getBinary = function(success, error){
		baseService.getBinary(appConstants.GET,appConstants.BINARY_TYPE,success,error);
	} 

	return service;
 // or any async calls
})(App.Modules.BaseService);