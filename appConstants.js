/// Application constants
/// appConstants.js
"use strict";
var appConstants = (function constants(){
	var constants = {
		GET:"GET",
		POST:"POST",
		JSON_TYPE:"application/json",
		BINARY_TYPE:"application/octet-stream"
		BASE_URL:'/api/'
	};  
	return constants;
})();

Object.freeze(appConstants);
// No modification can be applied to appConstants

/// AppRegistry
var App = {
	Modules:{}
};
