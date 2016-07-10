(function () {
    "use strict";
    angular.module('IonicNav')
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                .state('navMenu', {
                    url: "/navMenu",
                    abstract: true,
                    views: {
                        'main': {
                            templateUrl: "module/main/template/menuNav.html",
                            controller: "MenuNavController"
                        }
                    }
                })
                .state('navMenu.login', {
                    url: "/login",
                    views: {
                        'navContent': {
                            templateUrl: "module/usercenter/template/login.html",
                            controller: "LoginController"
                        }
                    }
                })
				.state('navMenu.tabsMain', {
                    url: "/tabsMain",
                    abstract: true,
                    views: {
                        'navContent': {
                            templateUrl: "module/main/template/tabsMain.html",
                            controller: "TabsMainController"
                        }
                    }
                })
				.state('navMenu.tabsMain.tabsIndex', {
                    url: "/tabsIndex",
                    views: {
                        'tabsContent': {
                            templateUrl: "module/main/template/tabsIndex.html",
                            controller: "TabsIndexController"
                        }
                    }
                })
				.state('navMenu.tabsMain.tabsFuncMenu', {
                    url: "/tabsFuncMenu",
                    abstract: true,
                    views: {
                        'tabsContent': {
                            templateUrl: "module/main/template/tabsFuncMenu.html",
                            controller: "TabsFuncMenuController"
                        }
                    }
                })
				.state('navMenu.tabsMain.tabsMine', {
                    url: "/tabsMine",
                    views: {
                        'tabsContent': {
                            templateUrl: "module/main/template/tabsMine.html",
                            controller: "TabsMineController"
                        }
                    }
                })
				.state('navMenu.tabsMain.tabsFuncMenu.funcMenuFirst', {
                    url: "/funcMenuFirst",
                    views: {
                        'funcMenuContent': {
                            templateUrl: "module/main/template/funcMenuFirst.html",
                            controller: "FuncMenuFirstController"
                        }
                    }
                })
				.state('navMenu.tabsMain.tabsFuncMenu.funcMenuSecond', {
                    url: "/funcMenuSecond",
                    views: {
                        'funcMenuContent': {
                            templateUrl: "module/main/template/funcMenuSecond.html",
                            controller: "FuncMenuSecondController"
                        }
                    }
                })
                    
                $urlRouterProvider.otherwise('/navMenu/login');
            }]);
}());