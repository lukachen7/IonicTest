(function () {
	//严格模式
	'use strict';
	//引导,定义全局入口
//	window.ApplicationConfiguration = (function() {
//		//定义主模块
//		var applicationModuleName = 'hospitalApp';
//		var applicationModuleVendorDependencies = ['ui.router','ngResource','ngSanitize'];
//		//模块注入
//		var registerModule = function(moduleName) {
//			//创建分模块
//			angular.module(moduleName, []);
//			//把分模块注入主模块
//			angular.module(applicationModuleName).requires.push(moduleName);
//		};
//		return {
//			applicationModuleName: applicationModuleName,
//			applicationModuleVendorDependencies: applicationModuleVendorDependencies,
//			registerModule: registerModule
//		};
//	})();
	angular.module('IonicNav',['ionic','toastr']);
	angular.module('IonicNav')
		.run(['$rootScope','UserData','$state','HttpService','ACKeyRule','$ionicPlatform',
            function($rootScope,UserData,$state,HttpService,ACKeyRule,$ionicPlatform) {
	            	$ionicPlatform.ready(function() {
				    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				    // for form inputs)
					if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				      cordova.plugins.Keyboard.disableScroll(true);
				
				    }
				    if (window.StatusBar) {
				      // org.apache.cordova.statusbar required
				      StatusBar.styleDefault();
				    }
				});
            	
//              if (localStorage.getItem("userName")&&localStorage.getItem("userPwd")) {                	
//					HttpService.sendRequest({
//						admin:localStorage.getItem("userName"),
//						password:localStorage.getItem("userPwd"),
//						ac:ACKeyRule.login
//					}, function (data) {
//						if(data.state == 0){
//							UserData.loginName=localStorage.getItem("userName");
//      					UserData.loginPwd=localStorage.getItem("userPwd");
//      					$state.go('main.patient');
//						}else{
//							localStorage.removeItem("userName");
//							localStorage.removeItem("userPwd");
//							$state.go('login');
//							alert(data.msg)
//						}
//					})
//				}else{
//					$state.go('login');
//				}
            }]);
}());
