import angular from 'angular';

class MotoService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:9090/projeto/api";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/moto";
    }
    
    getMotos() {
        return this.$http.get(this.path);
    }

    deletarMotos(id){
        this.$http.delete(this.path+'/'+id);
    }
}

export default angular.module('services.moto-service', [])
.service('motoService', MotoService)
.name;