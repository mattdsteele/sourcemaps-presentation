class Example2Controller {
  constructor($router) {
    $router.config([
      {
        path: '/',
        redirectTo: '/coffeescript'
      },
      {
        path: '/coffeescript',
        component: 'coffeescript'
      },
      {
        path: '/arnoldc',
        component: 'arnoldc'
      },
      {
        path: '/typescript',
        component: 'typescript'
      },
      {
        path: '/es6',
        component: 'es6'
      }
    ]);
  }
}

angular.module('nejs')
.controller('Example2Controller', Example2Controller);
