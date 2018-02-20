console.log('in app routes');

angular.module('route', ['ngRoute'])
    .config(($routeProvider)=> {
        $routeProvider
        .when('/',{
            templateUrl: "/app/views/pages/home.html",
            controller: "MainController",
            controllerAs: "main"
        })
        .when('/profile', {
            templateUrl: "/app/views/pages/profile.html",
            controller: "ProfileController",
            controllerAs: "profile"
        })
        .when('/receive', {
            templateUrl: "/app/views/pages/receive.html",
            controller: "ReceiveController",
            controllerAs: "receive"
        });
    })
    // .config(['$httpProvider', function($httpProvider) {  
    // 	$httpProvider.interceptors.push('AuthInterceptor');
	// }]);