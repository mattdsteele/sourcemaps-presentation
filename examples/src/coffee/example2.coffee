square = (x) -> x * x

class CoffeeScriptController
  constructor: ->
    @list = [1..10]

    @math = 
      square: square

  squares: ->
    @math.square num for num in @list

angular.module 'nejs'
.controller 'CoffeescriptController', CoffeeScriptController

