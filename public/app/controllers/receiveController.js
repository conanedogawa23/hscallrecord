angular.module('receiveCtrl', ['receiveService'])
    .controller('ReceiveController', ReceiveController);

    function ReceiveController($scope, receivedata){
        const vm = this;
        console.log('in receive controller');
        vm.location = 'hyderabad';
        vm.status = false;
        $scope.srcData = "/app/views/images/Kalimba.mp3";
        console.log($scope.srcData);
        vm.requestDataApi = ()=>{
            console.log("in requestDataAPi");
            receivedata.getData(vm.location).then((data)=> {
                console.log(data);
                vm.status = true;
            }).catch((err)=> {
                console.log(err);
            });
        }; 
    };