import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ITransferencia {
	transferenciaId: number;
  totalTransferencia: string;
  costoComision: string;
  fechaTransferencia: string;
  numeroPagos: number;
  codigoConvenio: number;
  numeroCuenta:number;
  tipoCuenta:number;  
  banco:string;
  emailNotificacion : string;
  estado: string;
  montoTransferencia:string;
  codigoEdificio:string |null;
}

export const useTransferenciaStore = defineStore("transferencia", () => {
  const transferenciaErrors = ref({});
  const currentTransferencia = ref<ITransferencia>({} as ITransferencia);
  const allTransferencias = ref<ITransferencia[]>([] as Array<ITransferencia>);

  function setTransferencia(transferencia: ITransferencia) {
    currentTransferencia.value = transferencia;
    transferenciaErrors.value = {};
  }

  function setTransferencias(transferencias: ITransferencia[]) {
    allTransferencias.value = transferencias;
    transferenciaErrors.value = {};
  }

  function setTransferenciaError(error: any) {
    transferenciaErrors.value = { ...error };
  }

  function getTransferencias() {
    return ApiService.get("transferencia/v1/transferencias/all")
      .then(({ data }) => {
        setTransferencias(data);
      })
      .catch(({ response }) => {
        setTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function getAllTransferencias(params: ITransferencia) {
    return ApiService.post("transferencia/v1/transferencias/all",params)
      .then(({ data }) => {
        setTransferencias(data);
      })
      .catch(({ response }) => {
        setTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function getTransferencia(id: string) {
    return ApiService.get("transferencia/v1/transferencia", id)
      .then(({ data }) => {
        setTransferencia(data);
      })
      .catch(({ response }) => {
        setTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  
  function getTransferenciaPorConvenio(codigoConvenio: string) {
    return ApiService.get("transferencia/v1/transferencias/convenio", codigoConvenio)
      .then(({ data }) => {
        setTransferencias(data);
      })
      .catch(({ response }) => {
        setTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

    
  function getTransferenciaPorEdificio(codigoEdificio: string) {
    return ApiService.get("transferencia/v1/transferencias/edificio", codigoEdificio)
      .then(({ data }) => {
        setTransferencias(data);
      })
      .catch(({ response }) => {
        setTransferenciaError(response.data.errors);
		throw new Error();
      });
  }


  function createTransferencia(params: ITransferencia) {
    return ApiService.post("transferencia", params)
      .then(({ data }) => {
        setTransferencia(data);
      })
      .catch(({ response }) => {
        setTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function updateTransferencia(params: ITransferencia) {
    return ApiService.put(`transferencia/${params.id}`, params)
      .then(({ data }) => {
        setTransferencia(data);
      })
      .catch(({ response }) => {
        setTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function deleteTransferencia(id: string|undefined) {
    return ApiService.delete(`transferencia/${id}`)
      .then(({ data }) => {
        setTransferencia(data);
      })
      .catch(({ response }) => {
        setTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function aprobarTransferencia(params: ITransferencia) {
    return ApiService.post(`transferencia/v1/transferencia/aprobar`, params)
      .then(({ data }) => {
        setTransferencia(data);
      })
      .catch(({ response }) => {
        setTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  return {
    getAllTransferencias,
    aprobarTransferencia,
    getTransferenciaPorConvenio,
    transferenciaErrors,
    currentTransferencia,
    allTransferencias,
    getTransferencias,
    getTransferencia,
    createTransferencia,
    updateTransferencia,
    deleteTransferencia,
    getTransferenciaPorEdificio
  };
});




