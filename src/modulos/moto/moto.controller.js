import { inherit } from "@uirouter/core";

export default class MotoController {

  constructor(motoService) {
    var vm = this;
    this.name = 'Moto';
    this.deletar = deletar;

    init();

    function init(){
      motoService.getMotos().then(function abc(resp) {
        vm.motos = resp.data;
      });
    }

    function deletar(moto) {
      motoService.deletarMotos(moto.id_moto);

    }

    


  }
  
}
MotoController.$inject = ['motoService'];
