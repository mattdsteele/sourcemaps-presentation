class ES6Controller {
  constructor($scope) {
    this.data = 'What';
  }
}

angular.module('nejs', [])
.controller('ES6Controller', ES6Controller);
