import nav from './nav.html';
export default function(angularModule) {

    /**
     * Controller:
     */
    angularModule.directive('lowerNav', function() {
        return {
            replace: true,
            restrict: 'E',
            template: nav,
            controller: ['$scope', '$anchorScroll', '$location', function($scope, $anchorScroll, $location) {
                $scope.drop = function(x) {
                    var newHash = x;
                    if ($location.hash() !== newHash) {
                        $location.hash(x);
                    } else {
                        $anchorScroll();
                    }
                };
                var selector = 0;
                $scope.selectNext = function(bck, fwd) {
                  if(bck && selector > 0) {
                    selector--;
                  }
                  if(fwd && selector < 2) {
                    selector += 1;
                  }
                  if(selector === 0) {

                  }
                  if(selector === 1) {

                  }
                  if(selector === 2) {

                  }
                };
            }]
        };
    });
}
