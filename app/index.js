import angular from 'angular';
import mainApp from './module';

const appName = 'angular-webpack-seed';
const module = angular.module(appName, [
  mainApp
]);

angular.element(document)
  .ready(() => angular.bootstrap(document, [appName]));

export default module.name;
