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
			}
		])
}());