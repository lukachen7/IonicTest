(function () {
	//严格模式
	'use strict';
	angular.module('IonicNav')
		.constant('Constants', {
	        defaultGateway:'http://10.95.68.22:8090/mobileoa-shell-app/',
	        imageServer:'http://localhost:8080',
	        urlEnding:'',
	        systemStatus:{login:"login",running:"running"}
	    })
	    .constant("UrlRule", {
	        testRequest:"flightSeat/getInfoByCityPair",
	    })
	    .constant("ACKeyRule", {
	        login:"login"
	    })
	   	.value("UserData", {
	        loginName:"",
	        loginPwd:""
	    })
	   	.value("SystemData",{
	   		systemStatus:"login"
	   	}) 	
}());