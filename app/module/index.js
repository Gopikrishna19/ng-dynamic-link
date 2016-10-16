import angular from 'angular';
import angularSanitize from 'angular-sanitize';

import app from './app';
import compile from './compile';

export default angular.module('module', [
  angularSanitize
])
  .directive(...app)
  .directive(...compile)
  .name;
