siteApp.controller('RegisterController', ['$scope', '$http', function($scope, $http){
    /* [START] Default Variable */
    $scope.baseURL = APP.baseUrl;
    $scope.register = {};
    /* [END] Default Variable */
    
    $scope.upload = function() {
        var userData = $scope.register;
        var tncOptin = 0;
        var emailOptin = 0;
        
        if(userData.tnc_optin == undefined){
            tncOptin = 0;
        } else if (userData.tnc_optin == true){
            tncOptin = 1;
        } else {
            tncOptin = 0;
        }

        if(userData.email_optin == undefined){
            emailOptin = 0;
        } else if (userData.email_optin == true){
            emailOptin = 1;
        } else {
            emailOptin = 0;
        }
        
        var fd = new FormData();
        fd.append('first_name', userData.first_name);
        fd.append('last_name', userData.last_name);
        fd.append('email', userData.email);
        fd.append('state_id', userData.state_id);
        fd.append('city', userData.city);
        fd.append('zip', userData.zip);
        fd.append('image', userData.image);
        fd.append('tnc_optin', tncOptin);
        fd.append('email_optin', emailOptin);
        
        $('#confirmRegistration').text('Uploading...');
        
        $http.post(
            $scope.baseURL + 'register',
            fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }
        ).then(function(response) {
            $('#confirmRegistration').text('Uploading...');
            if(response.data.status == true){
                window.location.href = $scope.baseURL + 'quiz';
            } else {
                $('#confirmRegistration').text('Submit & start Quiz');
            }
        }, function(response) {
            $('#confirmRegistration').text('Submit & start Quiz');
            $scope.errors = response.data;
        });
    }, function() {
        console.log('ERR');
    };
}]);
