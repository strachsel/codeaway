import main from './main.html';
export default function(angularModule) {

    /**
     * Controller:
     */
    angularModule.directive('main', function() {
        return {
            replace: true,
            restrict: 'E',
            template:  main,
            controller: ['$scope', '$anchorScroll', '$location', function($scope, $anchorScroll, $location) {
                $scope.mainActive = true;
        
            }]
        };
    });
}
