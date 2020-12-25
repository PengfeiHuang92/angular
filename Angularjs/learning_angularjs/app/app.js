var myApp = angular.module('myApp', []);
myApp
.controller('myAppController',function($scope){
    $scope.friedRice = [
        {
            itemName : 'Chicken Fired Rice',
            itemPrice : 8.99,
            itemImg: './img/friedRice.png'
        },
        {
            itemName : 'Egg Fired Rice',
            itemPrice : 7.99,
            itemImg: './img/friedRice.png'
        },
        {
            itemName : 'Beef Fired Rice',
            itemPrice : 9.99,
            itemImg: './img/friedRice.png'
        },
        {
            itemName : 'Shrimp Fired Rice',
            itemPrice : 9.99,
            itemImg: './img/friedRice.png'
        }
    ]
});