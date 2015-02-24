angular.module('nejs')
.controller('Example1Controller', Example1Controller);

function Example1Controller(Presenters) {
  this.showPresenters = function() {
    this.presenters = Presenters.listPresenters();
  };
}
