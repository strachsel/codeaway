import social from './social.html';
export default function(angularModule) {

    /**
     * Controller:
     */
    angularModule.directive('social', function() {
        return {
            replace: true,
            restrict: 'E',
            template: social,
            controller: ['$scope', function($scope) {
                // $scope.socialActive = false;
                // $scope.dropSocial = function(x) {
                //     $scope.socialActive = !$scope.socialActive;
                // };
            }]
        };
    });
}
