console.log('in app js');

angular.module("callrec",[`route`, `mainCtrl`, `profileCtrl`, `ngMaterial`, `authService`, `profileService`, `receiveService`, `receiveCtrl`])
    .config(function($mdThemingProvider){
        $mdThemingProvider
            .theme('default')
            // .primaryPalette('pink')
            // .warnPalette('red')
            // .backgroundPalette('grey')
            // // .accentPalette('orange');
            // .disableTheming();
    })