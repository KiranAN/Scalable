/// baseService.js
"use strict";
App.Modules.BaseService = (function DataFetcher(){
	var service = {};

	var url = hostname + appConstants.BASE_URL ||"";

	service.setUrl = function(apiCall){
		url = url + apiCall;
	}

	var errorFn = function(error){
		console.log(error);
	}

	service.getData = function(method, contentType, success, error){
		// jquery Ajax 
		$.ajax({
			method:method,
			url:url,
			contentType:contentType,
			success:success,
			error:error || errorFn
		});
	} 

	service.getBinary = function(method, url){
		// xml http
		var xmlHttp= new xmlHttp();
		xmlHttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {			   
			}
		};
		xmlHttp.open(method, url, true);
		xmlHttp.send();
	}

	return service;
 
	// or any async calls
})();