angular.module('authService', [])
    .factory('Auth', Auth)
    .factory('AuthToken', AuthToken)
    // .factory('AuthInterceptor', AuthInterceptor);
    
    function Auth($http, $q, AuthToken) {
		const authFactory = {};

		authFactory.adminLogin = (username, password) =>{
			console.log("in admin login");
            console.log(username+" is the ad-username and password is :"+password);
			const url = '/index/login';
	        return $http.post(url, {
	            username: username,
	            password: password
	        })
	        .then(function(data) {
                console.log(data);
	            AuthToken.setToken(data.data.token);
	            return data.data;
	        }).catch((err)=>{
	        	console.log("values not posted to the url");
	        });
		};

		authFactory.logout = function() {
			console.log("in the logout authFactory");
	        AuthToken.setToken(); //resetting the token
	        console.log(AuthToken.setToken());
	    };

	    authFactory.isLoggedIn = function() {
	        if (AuthToken.getToken()){
	            return true;
	        }
	        else {
	            return false;
	        }
	    };

	    // authFactory.getUser = function() {
	    //     if (AuthToken.getToken()){
	    //         return $http.get('/api/me', { headers: {'x-access-token': AuthToken.getToken()}, params: {'token': AuthToken.getToken()} });
	    //     }    
	    //     else { 
	    //         $q.reject({
	    //             message: "User has no token!"
	    //         });
	    //     }
	    // };

	    return authFactory;
    };
    
    function AuthToken($window) {
		const authTokenFactory = {};
		
		authTokenFactory.setToken = function(token){
			if(token) {
				return $window.localStorage.setItem('token', token);
			} else {
				return $window.localStorage.removeItem('token', token);
			}
		};

		authTokenFactory.getToken = function() {
			return $window.localStorage.getItem('token');
		}

		return authTokenFactory;
	};