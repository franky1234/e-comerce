module.exports = {
  template: require('./techs.html'),
  controller: TechsController
};

/** @ngInject */
function TechsController($http) {
  var vm = this;

  $http
    .get('http://private-7dfe49-jhonquispe6887.apiary-mock.com/products')
    .then(function (response) {
      vm.techs = response.data;
    });
}
