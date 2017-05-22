'use strict';

angular.module('myApp.pizza.insertPizzaService', [])

    .factory('InsertPizzaService', function($firebaseArray) {
        var NewPizzaService = {
            insertNewPizza: function (address, nome_pizza, nome_pizzeria) {
                //add the user to list of users and set the logged value to true
                var ref = firebase.database().ref().child("pizzas");
                // create a synchronized array
                return $firebaseArray(ref).$add({
                    address: address,
                    nome_pizza: nome_pizza,
                    nome_pizzeria: nome_pizzeria
                });
            },
            updatePizza: function (pizzaId) {
                //add the user to list of users and set the logged value to true
                var ref = firebase.database().ref().child("pizzas").child(pizzaId);
                // create a synchronized array
                ref.update({
                    id: pizzaId
                });
            }
        };
        return NewPizzaService;
    });
