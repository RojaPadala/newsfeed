import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './reg.route';
import RegController from './reg.controller';
const regComponent = angular.module('newsfeed.reg', [uirouter])
    .config(routes)
    .controller('RegController', RegController)
     .name;
export default regComponent;