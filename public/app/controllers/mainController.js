console.log('in main controller');

angular.module('mainCtrl', ['authService'])
    .controller('MainController', MainController);

    function MainController($rootScope, $location, Auth) {
        let vm = this;

        vm.value = "this is a test value";

        vm.login = ()=> {
            // vm.process = true;
            console.log(vm.username, vm.password);
            Auth.adminLogin(vm.username, vm.password)
	    		.then((data)=> {
                    console.log(data);
                    $location.path('/profile');
	    		}).catch((err)=> {
	    			console.log("admin login stopped in mainCtrl");
	    		});
        };

        vm.logout = ()=> {
            Auth.logout();
        };

    };