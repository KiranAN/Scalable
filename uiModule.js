/// Integrate any UI library
/// Change the UILib at run time , uses multi library with ease of handling
/// uiModule.js
"use strict";
App.Modules.UIService = (function UIModule(uiLibs){

	var service = function(){
	}
  
	service.show = function(){
		jquery.bind(); //uiLibs.bind();
	}

	service.open = function(){
		bootstrap.popup(); //uiLibs.popup();
	}

	service.animate = function(){
		jquery.animate();
	}
  
	var init = function(){
		if(uiLibs.length > 1){ 
			jquery = uiLibs[0];
			bootstrap = uiLibs[1];			
		}
	}
  
	init();
  
	return service;
  //etc  
})([jqueryUI,bootstrap] /* jquery*/);