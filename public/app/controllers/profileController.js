angular.module('profileCtrl', [])
    .controller('ProfileController', ProfileController);
    
    function ProfileController($rootScope, $document) {
        let vm = this;
        vm.value = "this is a profile";
        vm.dataSending = {};
        vm.sendData = ()=> {
            console.log(vm.dataSending);
        }
        
        vm.handleFiles = (data)=> {
            console.log(data.target.files);
        };
    };