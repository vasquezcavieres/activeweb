import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface IDetalleTransferencia {
	transferenciaId: string;
  rutRazonSocial: string;
  pagoId: string;
  montoPago:string;
  montoTransferencia: string;
  costoComision: string;
}

export const useDetalleTransferenciaStore = defineStore("detalleTransferencia", () => {
  const detalleTransferenciaErrors = ref({});
  const currentDetalleTransferencia = ref<IDetalleTransferencia>({} as IDetalleTransferencia);
  const allDetalleTransferencias = ref<IDetalleTransferencia[]>([] as Array<IDetalleTransferencia>);

  function setDetalleTransferencia(detalleTransferencia: IDetalleTransferencia) {
    currentDetalleTransferencia.value = detalleTransferencia;
    detalleTransferenciaErrors.value = {};
  }

  function setDetalleTransferencias(detalleTransferencias: IDetalleTransferencia[]) {
    allDetalleTransferencias.value = detalleTransferencias;
    detalleTransferenciaErrors.value = {};
  }

  function setDetalleTransferenciaError(error: any) {
    detalleTransferenciaErrors.value = { ...error };
  }

  function getDetalleTransferencias(id: string) {
    return ApiService.get("detalleTransferencia/v1/detalleTransferencias", id)
      .then(({ data }) => {
        setDetalleTransferencias(data);
      })
      .catch(({ response }) => {
        setDetalleTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function getDetalleTransferencia(id: string) {
    return ApiService.get("detalleTransferencia", id)
      .then(({ data }) => {
        setDetalleTransferencia(data);
      })
      .catch(({ response }) => {
        setDetalleTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function createDetalleTransferencia(params: IDetalleTransferencia) {
    return ApiService.post("detalleTransferencia", params)
      .then(({ data }) => {
        setDetalleTransferencia(data);
      })
      .catch(({ response }) => {
        setDetalleTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function updateDetalleTransferencia(params: IDetalleTransferencia) {
    return ApiService.put(`detalleTransferencia/${params.id}`, params)
      .then(({ data }) => {
        setDetalleTransferencia(data);
      })
      .catch(({ response }) => {
        setDetalleTransferenciaError(response.data.errors);
		throw new Error();
      });
  }

  function deleteDetalleTransferencia(id: string|undefined) {
    return ApiService.delete(`detalleTransferencia/${id}`)
      .then(({ data }) => {
        setDetalleTransferencia(data);
      })
      .catch(({ response }) => {
        setDetalleTransferenciaError(response.data.errors);
		throw new Error();
      });
  }


  return {
    detalleTransferenciaErrors,
    currentDetalleTransferencia,
    allDetalleTransferencias,
	getDetalleTransferencias,
	getDetalleTransferencia,
	createDetalleTransferencia,
	updateDetalleTransferencia,
    deleteDetalleTransferencia
  };
});




