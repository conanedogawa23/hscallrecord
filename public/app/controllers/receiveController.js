angular.module('receiveCtrl', ['receiveService'])
    .controller('ReceiveController', ReceiveController);

    function ReceiveController($scope, receivedata){
        const vm = this;
        console.log('in receive controller');
        vm.location = 'hyderabad';
        vm.status = false;
        vm.requestDataApi = ()=>{
            console.log("in requestDataAPi");
            receivedata.getData(vm.location).then((data)=> {
                vm.srcData = data[0].audiopath;
                console.log(vm.srcData);
                vm.status = true;
            }).catch((err)=> {
                console.log(err);
            });
        }; 
    };