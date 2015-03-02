/// <reference path="angular.d.ts" />

module TS {
  class TypeScriptController {
    company: string;
    importantMessage: string;
    constructor() {
      this.company = 'Microsoft';

      this.importantMessage = `Please don't hate me just because I'm from ${this.company}`;
    }
  }

  angular.module('nejs')
  .controller('TypeScriptController', TypeScriptController);
}
