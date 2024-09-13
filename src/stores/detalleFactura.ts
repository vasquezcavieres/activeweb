





import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IDetalleFactura {
		numeroFactura: string;
transferenciaId: string;
totalTransferencia: string;
costoComision: string;
montoTransferencia: string;
fechaTransferencia: string;

}

export const useDetalleFacturaStore = defineStore("detalleFactura", () => {
  const detalleFacturaErrors = ref({});
  const currentDetalleFactura = ref<IDetalleFactura>({} as IDetalleFactura);
  const allDetalleFacturas = ref<IDetalleFactura[]>([] as Array<IDetalleFactura>);

  function setDetalleFactura(detalleFactura: IDetalleFactura) {
    currentDetalleFactura.value = detalleFactura;
    detalleFacturaErrors.value = {};
  }

  function setDetalleFacturas(detalleFacturas: IDetalleFactura[]) {
    allDetalleFacturas.value = detalleFacturas;
    detalleFacturaErrors.value = {};
  }

  function setDetalleFacturaError(error: any) {
    detalleFacturaErrors.value = { ...error };
  }

  function getDetalleFacturas(id: string) {
    return ApiService.get("detalleFactura/v1/detalleFacturas",id)
      .then(({ data }) => {
        setDetalleFacturas(data);
      })
      .catch(({ response }) => {
        setDetalleFacturaError(response.data.errors);
		throw new Error();
      });
  }

  function getDetalleFactura(id: string) {
    return ApiService.get("detalleFactura", id)
      .then(({ data }) => {
        setDetalleFactura(data);
      })
      .catch(({ response }) => {
        setDetalleFacturaError(response.data.errors);
		throw new Error();
      });
  }

  function createDetalleFactura(params: IDetalleFactura) {
    return ApiService.post("detalleFactura", params)
      .then(({ data }) => {
        setDetalleFactura(data);
      })
      .catch(({ response }) => {
        setDetalleFacturaError(response.data.errors);
		throw new Error();
      });
  }

  function updateDetalleFactura(params: IDetalleFactura) {
    return ApiService.put(`detalleFactura/${params.id}`, params)
      .then(({ data }) => {
        setDetalleFactura(data);
      })
      .catch(({ response }) => {
        setDetalleFacturaError(response.data.errors);
		throw new Error();
      });
  }

  function deleteDetalleFactura(id: string|undefined) {
    return ApiService.delete(`detalleFactura/${id}`)
      .then(({ data }) => {
        setDetalleFactura(data);
      })
      .catch(({ response }) => {
        setDetalleFacturaError(response.data.errors);
		throw new Error();
      });
  }


  return {
    detalleFacturaErrors,
    currentDetalleFactura,
    allDetalleFacturas,
	getDetalleFacturas,
	getDetalleFactura,
	createDetalleFactura,
	updateDetalleFactura,
    deleteDetalleFactura
  };
});




