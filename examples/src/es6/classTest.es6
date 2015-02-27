class ES6Controller {
  constructor($scope) {
    console.log('This is a scope $scope');
    this.data = 'What';
  }
}

angular.module('nejs', [])
.controller('ES6Controller', ES6Controller);

console.log('i am outside here');
