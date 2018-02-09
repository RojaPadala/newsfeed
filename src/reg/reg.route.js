function routes($stateProvider) {
    $stateProvider
     .state('reg',
 {
           url: '/reg',
           template: require('./reg.html'),
    controller: 'RegController',
      controllerAs: 'regCtrl',
        });
}
routes.$inject = ['$stateProvider'];
export default routes;