
import angular from 'angular';
import uirouter from 'angular-ui-router';

import MotoController from './moto.controller';

import motoService from '../../servicos/moto.service';

export default angular.module('myApp.moto', [uirouter, motoService])
  .controller('MotoController', MotoController)
  .name;

  