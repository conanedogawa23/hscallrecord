angular.module('receiveService', [])
    .factory('receivedata', receivedata);


function receivedata($http, $window) {
    let datareceived = {};

    datareceived.getData = (request)=>{
        let tokenAuth = $window.localStorage.getItem('token');
        let url = `/index/receiveData?token=${tokenAuth}`;
        let reqData = {request};
        return $http.post(url, reqData).then((data)=>{
            console.log(data.data);
            return data.data.data;
        }).catch((err)=>{
            console.log(err);
            // return err;
        })
    };
    return datareceived;
}