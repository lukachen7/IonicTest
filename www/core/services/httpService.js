(function () {
	//严格模式
	'use strict';
	angular.module('IonicNav')
		.factory('HttpService',['$resource','Constants','UrlRule','ACKeyRule','UserData',
			function ($resource,Constants,UrlRule,ACKeyRule,UserData) {
				return $resource("",
                    {
                        TOKEN: function () {
//                          if(!!UserInfoServices.getUser()){
//                              return UserInfoServices.getUser().token
//                          }else{
                                return null
//                          }
                        }
                    }, {
                        testRequest:{method: "get", url: Constants.defaultGateway + UrlRule.testRequest + Constants.urlEnding}, //合并查询接口
                        
                    }
               )
			}
		])
}());