(function () {
	//严格模式
	'use strict';
	angular.module('IonicNav')
		.controller('LoginController',['$scope','$state','HttpService','ACKeyRule','UserData','CommonService','toastr',
			function ($scope,$state,HttpService,ACKeyRule,UserData,CommonService,toastr) {
				$scope.data=UserData;
				$scope.onLogin = function(){
					toastr.success("ijfiiiiieeee");
				}
				$scope.testRequest = function(){
					cordova.exec(function(data) {
						var jsonData = JSON.parse(data);
                    		HttpService.testRequest(
                    			jsonData,
                    			function (data2) {
								alert(JSON.stringify(data2))
							})								                
	                 },
	                 function(err) {alert(err);},
	                 "GetEncrypt",
	                 "getEncryptResult",
	                 [(new Date()).getTime().toString(),JSON.stringify({
	                 	'date':'2017-01-03',
	                    'org':'CAN',
	                    'dst':'PEK'})]
	                ); 					
				}
			}
		])
}());