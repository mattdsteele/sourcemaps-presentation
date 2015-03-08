class Es6Controller {
  constructor() {
    this.fibonacciItems = [];
    this.fib();
  }

  fib() {
    let fibonacci = {
      [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
          next() {
            [pre, cur] = [cur, pre + cur];
            return { done: false, value: cur }
          }
        }
      }
    };

    for (var n of fibonacci) {
      if (n > 100) {
        break;
      }
    this.fibonacciItems.push(n);
    }
  }
}

angular.module('nejs')
.controller('Es6Controller', Es6Controller);
