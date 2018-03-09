 var app = angular.module('app', ['ngRoute']);
app.controller('ctrl', function($scope) {
   $scope.links =[
     { src:"https://cdn.pixabay.com/photo/2018/03/02/18/29/snow-3193865_960_720.jpg", alt:"", caption:""},
     { src:"https://cdn.pixabay.com/photo/2017/08/05/21/42/fireworks-2585843_960_720.jpg", alt:"", caption:""},
     { src:"https://cdn.pixabay.com/photo/2017/09/22/23/57/fire-2777580_960_720.jpg", alt:"", caption:""},
  ];
});
// https://codepen.io/zackahl/pen/RgGaPL?q=bootstrap+navbar&limit=all&type=type-pens
// coursel handler
app.directive('carousel', function($timeout) {
   return {
      restrict: 'E',
      scope: {
        links: '='
      },
      templateUrl: 'carousel.html',
      link: function(scope, element) {
        $timeout(function() {
          $('.carousel-indicators li',element).first().addClass('active');
          $('.carousel-inner .item',element).first().addClass('active');
        });
      }
   }
});
// navigation bar
app.directive('navbar', function() {
   return {
      restrict: 'E',
      templateUrl: 'navbar.html'
      }
});
// routing
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    });
});
