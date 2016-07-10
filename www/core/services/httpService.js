(function () {
	//严格模式
	'use strict';
	angular.module('IonicNav')
		.factory('HttpService',['Constants','UrlRule','ACKeyRule','UserData',
			function (Constants,UrlRule,ACKeyRule,UserData) {
				var myService = {
//					resource:$resource(Constants.defaultGateway+UrlRule.adminSystem,{					
//					},{
//						sendRequest:{method:"POST"}
//					}),
//					sendRequest:function($params,$successFunc,$errorFunc){
//						if (!$params.hasOwnProperty("admin")||!$params.hasOwnProperty("password")){
//							$params["admin"]=localStorage.getItem("userName");
//							$params["password"]=localStorage.getItem("userPwd");
//						}
//						myService.resource.sendRequest($params,$successFunc,$errorFunc);
//					}
				}				
				return myService;
			}
		])
}());