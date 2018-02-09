angular.module('profileCtrl',['profileService'])
    .controller('ProfileController', ProfileController);
    
    function ProfileController($scope, Profiledata) {
        let vm = this;
        vm.file;
        vm.value = "this is a profile";
        vm.dataSending = {};
        $scope.imageUpload = (event)=> {
            vm.file = event.target.files[0];
            // let formdata = new FormData();

            // formdata.append('file', files);
            // formdata.append('imei', vm.dataSending.imei);
            // formdata.append('executiveno', vm.dataSending.executiveNumber);
        };
        vm.sendData = ()=> {
            console.log(vm.file);
            console.log(vm.dataSending);
            let formdata = new FormData();

            formdata.append('files', vm.file);
            formdata.append('imei', vm.dataSending.imei);
            formdata.append('exec', vm.dataSending.executiveNumber);
            formdata.append('cust', vm.dataSending.customerNumber);
            formdata.append('location', vm.dataSending.location);
            formdata.append('time', vm.dataSending.time);
            // formdata.append('imei', vm.dataSending.imei);

            Profiledata.sendDataToApi(formdata)
            .then(()=> {
                console.log(`sent`);
            }).catch((err)=> {
                console.log(err);
            });
            // ProfileData.sendDataToApi(vm.files, vm.dataSending).then(()=> {
            //     console.log("sent data");
            // }).catch((err)=> {
            //     console.log(err);
            // });
        };
        // vm.handleFiles = (data)=> {
        //     console.log(data.target.files);
        // };
    };