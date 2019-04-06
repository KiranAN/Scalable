/// appNotifier.js
"use strict";
App.Modules.NotifierService = (function Notifier(dataService, dataHandler /*[,notificationService]*/){
	var service = {};

	// Success
	service.onGetSuccess = function(data){
		dataHandler.bindApiModel(data);
		// notificationService.successNotification(msg);
	}
	// Error
	service.onGetError = function(error){
		// log error
		// notificationService.errorNotification(msg);
	}
	// Call API
	service.onGetData = function(event){
		dataService.getData(event, service.onGetSuccess, service.onGetError);
	}
  
	/*
	above methods can be repeated in tandem for other http calls
	*/
	return service;
})(App.Modules.DataService, App.Modules.DataHandlerService, /*[,App.Modules.NotificationService]*/ );