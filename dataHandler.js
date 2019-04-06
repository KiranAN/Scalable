/// Data Handler
/// dataHandler.js
"use strict";
App.Modules.DataHandlerService = (function DataHandler(models, uiModule){
	// bind to models
	var serivce = {};

	serivce.bindApiModel = function(data){  
		// Do whatever 
		var apiModel = models.getApiModel(data);
		apiModel.truncData();
		uiModule.show(apiModel);	
	}

	return service;
})(App.Modules.Models, App.Modules.UIService);