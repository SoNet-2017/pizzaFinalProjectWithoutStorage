'use strict';

angular.module('myApp.pizza', [
    'myApp.pizza.pizzaService',
    'myApp.pizza.singlePizzaService',
    'myApp.pizza.insertPizzaService'
])

.value('version', '0.1');
