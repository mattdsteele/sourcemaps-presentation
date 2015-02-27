console.log 'inside coffee'

class CoffeeScriptController
  constructor: ->
    @data = 'what'

angular.module 'nejs'
.controller 'CoffeeScriptController', CoffeeScriptController

