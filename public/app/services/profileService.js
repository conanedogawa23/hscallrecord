// angular.module('profileService', [])
//     .factory('ProfileData')

//     function ProfileData ($http, $q){
//         const dataSentFromApi = {};

//         dataSentFromApi.sendDataToApi = (file, data, $window)=> {
//             let tokenAuth = $window.localStorage.getItem('token');
//             console.log(tokenAuth);
//             console.log("data is received : "+data);
//             let url = "/index/fetchData"
//             return http.post(url, {
//                 file, data
//             }).then((data)=> {
//                 console.log(data);
//                 return data.data;
//             }).catch((err)=> {
//                 console.log(err);
//             });
//         };

//         return dataSentFromApi;
//     };

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
            return $http.post(url, file, { transformRequest: angular.identity }).then((data)=>{
                console.log(data);
                return data;
            }).catch((err)=> {
                console.log(err);
            });
        };
        return profile;
    };