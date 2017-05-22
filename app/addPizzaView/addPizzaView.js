'use strict';

angular.module('myApp.addPizzaView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/addPizza', {
            templateUrl: 'addPizzaView/addPizzaView.html',
            controller: 'addPizzaViewCtrl',
            resolve: {
                // controller will not be loaded until $requireSignIn resolves
                // Auth refers to our $firebaseAuth wrapper in the factory below
                "currentAuth": ["Auth", function(Auth) {
                    // $requireSignIn returns a promise so the resolve waits for it to complete
                    // If the promise is rejected, it will throw a $routeChangeError (see above)
                    return Auth.$requireSignIn();
                }]
            }
        })
    }])
    .controller('addPizzaViewCtrl', ['$scope', '$rootScope', 'InsertPizzaService',
        function($scope, $rootScope, InsertPizzaService) {
            $scope.dati = {};
            $scope.dati.feedback = "";
            $rootScope.dati.currentView = "addPizza";
            $scope.addPizza = function() {
                InsertPizzaService.insertNewPizza($scope.dati.address, $scope.dati.nome_pizza, $scope.dati.nome_pizzeria).then(function(ref) {
                    var pizzaId = ref.key;
                    InsertPizzaService.updatePizza(pizzaId);
                    $scope.dati.feedback = "Inserimento effettuato con successo";
                    $scope.dati.address = "";
                    $scope.dati.nome_pizza = "";
                    $scope.dati.nome_pizzeria = "";
                });
            }
        }]);