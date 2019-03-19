import { inherit } from "@uirouter/core";

export default class MotoController {

  constructor(motoService) {
    var vm = this;
    this.name = 'Moto';

    init();

    function init(){
      motoService.getMotos().then(function abc(resp) {
        vm.motos = resp.data;
      });
    }

    


  }
  
}
MotoController.$inject = ['motoService'];
