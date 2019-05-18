/// eventsHandler.js
"use strict";
App.Modules.EventsService = (function EventsModule(notifier){
	// bind it to appropriate click/hover/ any other methods
	// Call Notifier methods
	var service = {};

	service.registerEvents = function(){
		document.getElementById('btnClick').addEventListener('click',notifier.getData(event));
	}

	return service;
  
})(App.Modules.NotifierService);
https://medium.com/@kiranan1988/developing-custom-scalable-vanilla-javascript-app-39a54d026cd5