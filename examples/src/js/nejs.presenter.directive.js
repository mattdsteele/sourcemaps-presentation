angular.module('nejs')
.directive('nejsPresenter', function() {
  return {
    scope: {
      presenter: '@'
    },
    template: '<div class="presenter"><img ng-src="{{avatarUrl}}"></div>',
    controller: function($scope, Presenters) {
      $scope.avatarUrl = Presenters.imageFor($scope.presenter);
    }
  };
});
