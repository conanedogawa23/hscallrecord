angular.module('receiveCtrl', ['receiveService'])
    .controller('ReceiveController', ReceiveController);

    function ReceiveController($scope, receivedata, $sce){
        const vm = this;
        console.log('in receive controller');
        vm.location = 'hyderabad';
        vm.status = false;
        vm.requestDataApi = ()=>{
            console.log("in requestDataAPi");
            receivedata.getData(vm.location).then((data)=> {
                $scope.srcUrl = `data:audio/mp3;base64,${data}`;
                // let f = new File('/hewettsoft/hscallrecord/public/app/views/images/SampleAudio_0.4mb.mp3');
                // console.log(f);
                vm.status = true;
            }).catch((err)=> {
                console.log(err);
            });
        }; 
    };