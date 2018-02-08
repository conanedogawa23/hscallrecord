console.log('in app routes');

angular.module('route', ['ngRoute'])
    .config(($routeProvider)=> {
        $routeProvider
        .when('/',{
            templateUrl: "/app/views/pages/home.html",
            controller: "MainController",
            controllerAs: "main"
        })
    })
    // .config(['$httpProvider', function($httpProvider) {  
    // 	$httpProvider.interceptors.push('AuthInterceptor');
	// }]);