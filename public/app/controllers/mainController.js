console.log('in main controller');

angular.module('mainCtrl', [])
    .controller('MainController', MainController);

    function MainController($rootScope) {
        let vm = this;

        vm.value = "this is a test value";
    };