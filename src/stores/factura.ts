import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IFactura {
  numeroFactura: number | undefined | null;
  numeroNotaCredito: number | undefined | null;
  fechaCreacion: Date | undefined;
  montoNeto: number;
  iva: number;
  montoTotal: number;
  rutRazonSocial: number | undefined | null;
  estado: string;
  totalComisiones:number;
  fechaDesde: Date | null;
  fechaHasta: Date | null;
  codigoEdificio: string|null|'';
  nombreEdificio: string|null|'';
  pdfNotaCredito : string;
}

export const useFacturaStore = defineStore("factura", () => {
  const facturaErrors = ref({});
  const currentFactura = ref<IFactura>({} as IFactura);
  const allFacturas = ref<IFactura[]>([] as Array<IFactura>);
  const allFacturasFiltro = ref({});

  function setFactura(factura: IFactura) {
    currentFactura.value = factura;
    facturaErrors.value = {};
  }

  function setFacturas(facturas: IFactura[]) {
    allFacturas.value = facturas;
    facturaErrors.value = {};
  }
  function setFacturas2(facturas: any) {
    allFacturasFiltro.value = facturas;
    facturaErrors.value = {};
  }

  function setFacturaError(error: any) {
    facturaErrors.value = { ...error };
  }


  function getFacturas() {
    return ApiService.get("factura/v1/facturas/all")
      .then(({ data }) => {
        setFacturas(data);
      })
      .catch(({ response }) => {
        setFacturaError(response.data.errors);
		throw new Error();
      });
  }

  function getFactura(id: string) {
    return ApiService.get("factura/v1/factura", id)
      .then(({ data }) => {
        setFactura(data);
      })
      .catch(({ response }) => {
        setFacturaError(response.data.errors);
		throw new Error();
      });
  }

  function createFactura(params: IFactura) {
    return ApiService.post("factura", params)
      .then(({ data }) => {
        setFactura(data);
      })
      .catch(({ response }) => {
        setFacturaError(response.data.errors);
		throw new Error();
      });
  }

  function updateFactura(params: IFactura) {
    return ApiService.put(`factura/${params.id}`, params)
      .then(({ data }) => {
        setFactura(data);
      })
      .catch(({ response }) => {
        setFacturaError(response.data.errors);
		throw new Error();
      });
  }

  function deleteFactura(id: string|undefined) {
    return ApiService.delete(`factura/${id}`)
      .then(({ data }) => {
        setFactura(data);
      })
      .catch(({ response }) => {
        setFacturaError(response.data.errors);
		throw new Error();
      });
  }

  
  function buscarFacturas(params: IFactura) {
    return ApiService.post("factura/v1/facturas/", params)
      .then(({ data }) => {
        setFacturas(data);
      })
      .catch(({ response }) => {
        setFacturaError(response.data.errors);
		throw new Error();
      });
  }

    
  async function obtenerNotaCredito(params: IFactura) {
    return await ApiService.post("factura/v1/factura/obtenerNotaCredito/", params)
      .then(({ data }) => {
        setFactura(data);
      })
      .catch(({ response }) => {
        setFacturaError(response.data.errores);
		throw new Error();
      });
  }



  return {
    obtenerNotaCredito,
    buscarFacturas,
    facturaErrors,
    currentFactura,
    allFacturas,allFacturasFiltro,
	getFacturas,
	getFactura,
	createFactura,
	updateFactura,
    deleteFactura
  };
});




