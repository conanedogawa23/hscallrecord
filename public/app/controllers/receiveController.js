angular.module('receiveCtrl', ['receiveService'])
    .controller('ReceiveController', ReceiveController);

    function ReceiveController($scope, receivedata, $sce){
        const vm = this;
        console.log('in receive controller');
        vm.location = 'hyderabad';
        vm.status = false;
        $scope.srcUrl = [];
        $scope.values = [];
        vm.requestDataApi = ()=>{
            console.log("in requestDataAPi");
            receivedata.getData(vm.location).then((data)=> {
                for (let index = 0; index < data.data.length; index++) {
                    $scope.srcUrl[index] = `data:audio/mp3;base64,${data.data[index]}`;
                    $scope.values[index] = data.details[index];                
                }
                // let f = new File('/hewettsoft/hscallrecord/public/app/views/images/SampleAudio_0.4mb.mp3');
                // console.log(f);
                vm.status = true;
            }).catch((err)=> {
                console.log(err);
            });
        }; 
    };