angular.module('profileService', [])
    .factory('Profiledata', Profiledata);

    function Profiledata($http, $window) {
        const profile = {};
        console.log('in profiledata');
        profile.sendDataToApi = (file)=> {
            // let requestData = [
            //     file, data
            // ];
            let tokenAuth = $window.localStorage.getItem('token');
            console.log(file);
            let url = `/index/fetchData?token=${tokenAuth}`
            console.log(url);
            // let val = {a:'a', file};
            return $http.post(url, file, { transformRequest: angular.identity, headers: {'Content-Type': undefined} }).then((data)=>{
                console.log(data);
                return data;
            }).catch((err)=> {
                console.log(err);
            });
        };
        return profile;
    };