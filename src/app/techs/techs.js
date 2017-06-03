module.exports = {
  template: require('./techs.html'),
  controller: TechsController
};

/** @ngInject app/techs/techs.json */
function TechsController($http) {
  var vm = this;

  $http
    .get('http://190.107.60.5:8080/api/products')
    .then(function (response) {
      vm.techs = response.data;
    });
}
