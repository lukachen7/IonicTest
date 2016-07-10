(function () {
	//严格模式
	'use strict';
	angular.module('IonicNav')
		.config(['$ionicConfigProvider','$stateProvider','$urlRouterProvider','$httpProvider','toastrConfig',
			function ($ionicConfigProvider,$stateProvider,$urlRouterProvider,$httpProvider,toastrConfig) {
				//配置Android和IOS上的一些界面可视化参数
                $ionicConfigProvider.platform.ios.tabs.style('standard');
                $ionicConfigProvider.platform.ios.tabs.position('bottom');
                $ionicConfigProvider.platform.android.tabs.style('standard');
                $ionicConfigProvider.platform.android.tabs.position('standard');

                $ionicConfigProvider.platform.ios.views.transition('ios');
                $ionicConfigProvider.platform.android.views.transition('android');//view切换效果

                $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
                $ionicConfigProvider.platform.android.navBar.alignTitle('center');//标题栏文字居中
                //禁止全局缓存，如需缓存view，在该module路由配置
                $ionicConfigProvider.views.maxCache(0);
                
                //隐藏后退键文字
                $ionicConfigProvider.backButton.text("");
        			$ionicConfigProvider.backButton.previousTitleText(false);
                
				//配置http头
//				$httpProvider.defaults.useXDomain = true;
//				$httpProvider.defaults.withCredentials = true;
				delete $httpProvider.defaults.headers.common['X-Requested-With'];
				$httpProvider.defaults.headers['Cache-Control'] = 'no-cache';
				$httpProvider.defaults.headers['Pragma'] = 'no-cache';
				$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
				$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
				$httpProvider.defaults.headers['If-Modified-Since'] = '0';
				$httpProvider.defaults.headers['If-Modified-Since'] = '0';
				
				//配置提示框参数
                angular.extend(toastrConfig, {
                    progressBar: false, //显示进度条
                    closeButton: false, //是否出现关闭按钮
                    closeHtml: '<button>&times;</button>',//关闭按钮
                    maxOpened: 0,//能打开提示的数量 0为不限制
                    newestOnTop: true,//新提示出现在Top
                    positionClass: 'toast-bottom-full-width',//提示出现的位置，该样式重写过
                    preventDuplicates: false, //防止重复触发最后一个提示
                    preventOpenDuplicates: true,//防止重复触发同个提示
                    target: 'body',//作用在body
                    timeOut: 3000//超时设置
                });
                
				//禁止缓存
				$httpProvider.defaults.cache =  false;
				$httpProvider.defaults.transformRequest = [function(data) {
					/**
					 * http参数转换.
					 * @param {Object} obj
					 * @return {String}
					 */
					var param = function(obj) {
						var query = '';
						var name, value, fullSubName, subName, subValue, innerObj, i;

						for (name in obj) {
							value = obj[name];

							if (value instanceof Array) {
								for (i = 0; i < value.length; ++i) {
									subValue = value[i];
									fullSubName = name + '[]' ;//+ '[' + i + ']';
									innerObj = {};
									innerObj[fullSubName] = subValue;
									query += param(innerObj) + '&';
								}
							} else if (value instanceof Object) {
								for (subName in value) {
									subValue = value[subName];
									fullSubName = name + '[' + subName + ']';
									innerObj = {};
									innerObj[fullSubName] = subValue;
									query += param(innerObj) + '&';
								}
							} else if (value !== undefined && value !== null) {
								query += encodeURIComponent(name) + '='
										+ encodeURIComponent(value) + '&';
							}
						}

						return query.length ? query.substr(0, query.length - 1) : query;
					};

					return angular.isObject(data) && String(data) !== '[object File]'
							? param(data)
							: data;
				}];
			}])
}());