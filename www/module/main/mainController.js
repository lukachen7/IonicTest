(function () {
	//严格模式
	'use strict';
	angular.module('IonicNav')
		.controller('MenuNavController',['$scope','$state','HttpService','ACKeyRule','UserData','CommonService',
			function ($scope,$state,HttpService,ACKeyRule,UserData,CommonService) {
				
			}
		])
		.controller('TabsMainController',['$scope','$state','HttpService','ACKeyRule','UserData','CommonService',
			function ($scope,$state,HttpService,ACKeyRule,UserData,CommonService) {
				
			}
		])
		.controller('TabsIndexController',['$scope','$state','HttpService','ACKeyRule','UserData','CommonService',
			function ($scope,$state,HttpService,ACKeyRule,UserData,CommonService) {
				$scope.imgArr = [{address:"img/ad_pic01.jpg"},{address:"img/ad_pic02.jpg"},{address:"img/ad_pic03.jpg"}];
			}
		])
		.controller('TabsFuncMenuController',['$scope','$state','HttpService','ACKeyRule','UserData','CommonService','$location',
			function ($scope,$state,HttpService,ACKeyRule,UserData,CommonService,$location) {
				$scope.funcMenuSelected=1;
				$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
					if(toState.name == 'navMenu.tabsMain.tabsFuncMenu.funcMenuFirst'){
						$scope.funcMenuSelected = 1;
					}else if(toState.name == 'navMenu.tabsMain.tabsFuncMenu.funcMenuSecond') {
						$scope.funcMenuSelected = 2;
					}
				})
			}
		])
		.controller('FuncMenuFirstController',['$scope','$state','HttpService','ACKeyRule','UserData','CommonService',
			function ($scope,$state,HttpService,ACKeyRule,UserData,CommonService) {
				
			}
		])
		.controller('FuncMenuSecondController',['$scope','$state','HttpService','ACKeyRule','UserData','CommonService',
			function ($scope,$state,HttpService,ACKeyRule,UserData,CommonService) {
				
			}
		])
		.controller('TabsMineController',['$scope','$state','HttpService','ACKeyRule','UserData','CommonService','$timeout',
			function ($scope,$state,HttpService,ACKeyRule,UserData,CommonService,$timeout) {
				$scope.listData=[
					{id:1,name:"one"},
					{id:2,name:"two"},
					{id:3,name:"three"}
				];
				$scope.onRefresh = function(){
					$timeout(function(){
						$scope.$broadcast('scroll.refreshComplete');
					},2000);
				}
				$scope.loadMore = function(){
					$timeout(function(){
						$scope.listData.push({id:0,name:"add"});
						$scope.$broadcast('scroll.infiniteScrollComplete');
					},1000);
				}
			}
		])
}());