/// <reference path="angular.d.ts" />

class TypeScriptController {
  language: string;
  data: string;
  constructor() {
    this.language = 'TypeScript';
    this.data = 'Hello from ' + this.language;
  }
}

angular.module('nejs')
.controller('TypeScriptController', TypeScriptController);
