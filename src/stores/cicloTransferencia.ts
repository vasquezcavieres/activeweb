import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface ICicloTransferencia {
  codigoConvenio: string;
	creadoPor: string;
  fechaCreacion: Date;
  diasTransferencia: string;
  actualizadoPor: string;
  fechaActualizacion: Date;
  diasTransferencias: []
}

export const useCicloTransferenciaStore = defineStore("cicloTransferencia", () => {
  const cicloTransferenciaErrors = ref({});
  const currentCicloTransferencia = ref<ICicloTransferencia>({} as ICicloTransferencia);
  const allCicloTransferencias = ref<ICicloTransferencia[]>([] as Array<ICicloTransferencia>);

  function setCicloTransferencia(cicloTransferencia: ICicloTransferencia) {
    currentCicloTransferencia.value = cicloTransferencia;
    cicloTransferenciaErrors.value = {};
  }

  function setCicloTransferencias(cicloTransferencias: ICicloTransferencia[]) {
    allCicloTransferencias.value = cicloTransferencias;
    cicloTransferenciaErrors.value = {};
  }

  function setCicloTransferenciaError(error: any) {
    cicloTransferenciaErrors.value = { ...error };
  }

  function getCicloTransferencias() {
    return ApiService.get("cicloTransferencias/all")
      .then(({ data }) => {
        setCicloTransferencias(data);
      })
      .catch(({ response }) => {
        setCicloTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function getCicloTransferencia(id: string) {
    return ApiService.get(`cicloTransferencia/v1/cicloTransferencia/${id}`)
      .then(({ data }) => {
        setCicloTransferencia(data);
      })
      .catch(({ response }) => {
        setCicloTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function createCicloTransferencia(params: ICicloTransferencia) {
    return ApiService.post("cicloTransferencia", params)
      .then(({ data }) => {
        setCicloTransferencia(data);
      })
      .catch(({ response }) => {
        setCicloTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function updateCicloTransferencia(rutRazonSocial,params: ICicloTransferencia) {
    return ApiService.put(`cicloTransferencia/v1/cicloTransferencia/${rutRazonSocial}`, params)
      .then(({ data }) => {
        setCicloTransferencia(data);
      })
      .catch(({ response }) => {
        setCicloTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function deleteCicloTransferencia(id: string|undefined) {
    return ApiService.delete(`cicloTransferencia/${id}`)
      .then(({ data }) => {
        setCicloTransferencia(data);
      })
      .catch(({ response }) => {
        setCicloTransferenciaError(response.data.errors);
		throw new Error();
      });
  }


  return {
    cicloTransferenciaErrors,
    currentCicloTransferencia,
    allCicloTransferencias,
    getCicloTransferencias,
    getCicloTransferencia,
    createCicloTransferencia,
    updateCicloTransferencia,
    deleteCicloTransferencia
    };
});




