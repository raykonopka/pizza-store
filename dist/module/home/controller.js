(function (app) {
  'use strict';

  app.ngHome = angular.module("homeModule", []);
  app.ngHome.controller('homeCtrl', ['homeFac', 'homeSvc', function (homeFac, homeSvc) {
    var that = this;

    that.hello = "hello home";
    that.facto = homeFac();
    that.servi = homeSvc.msg;
    homeSvc.get('people', Math.round((Math.random() * 9) + 1), function (data) {
      that.swapi = data.name;
    });
  }]);

})(window.pizzaApp);
