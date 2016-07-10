(function () {
	//严格模式
	'use strict';
	angular.module('IonicNav')
		.constant('Constants', {
	        defaultGateway:'http://localhost:8080',
	        imageServer:'http://localhost:8080',
	        systemStatus:{login:"login",running:"running"}
	    })
	    .constant("UrlRule", {
	        adminSystem:"/sysadmin/adminsystem.php"
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