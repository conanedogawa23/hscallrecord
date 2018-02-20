angular.module('receiveCtrl', ['receiveService'])
    .controller('ReceiveController', ReceiveController);

    function ReceiveController($scope, receivedata){
        const vm = this;
        console.log('in receive controller');
        let location = 'hyderabad';

        vm.requestDataApi = ()=>{
            console.log("in requestDataAPi");
            receivedata.getData(location).then((data)=> {
                vm.srcData = data[0].audiopath;
                console.log(vm.srcData);
            }).catch((err)=> {
                console.log(err);
            });
        }; 
    };