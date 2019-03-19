routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);
      
      let motoState = {
        name: 'moto',
        url: '/moto',
        templateUrl: './modulos/moto/moto.view.html',
        controller: 'MotoController',
        controllerAs: 'vm'
      }
      $stateProvider.state(motoState);
      
      $urlRouterProvider.otherwise('/home')  
}