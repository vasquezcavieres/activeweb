import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
;

export interface IPago {
		pagoId: string | null;
vendedorId: string | null;
nombreVendedor: string | null;
tokenTransaccion: string | null;
tokenMedioPago: string | null;
codigoMedioPago: string | null;
numeroOrden: string | null;
emailCliente: string | null;
nombreCliente: string | null;
montoPago: string | null;
fechaTransaccion: string | null;
codigoEdificio: string | null;
codigoArea: string | null;
nombreEdificio: string | null;
direccionEdificio: string | null;
ciudadEdificio: string | null;
comunaEdificio: string | null;
centroCosto: string | null;
exitoso: string | null;
codigoAutorizacion: string | null;
fechaPago: string | null;
mesPago: string | null;
anioPago: string | null;
numeroTarjeta: string | null;
notificado: string | null;
codigoNotificacion: string | null;
numeroBoleta: string | null;
urlBoleta: string | null;
fechaBoleta: string | null;
codigoPais: string | null;
pais: string | null;
ultimoIntento: string | null;
boletaAux: string | null;
firma: string | null;
fechaDesde: Date|null;
fechaHasta: Date|null;

}

export const usePagoStore = defineStore("pago", () => {
  const pagoErrors = ref({});
  const currentPago = ref<IPago>({} as IPago);
  const allPagos = ref<IPago[]>([] as Array<IPago>);

  function setPago(pago: IPago) {
    currentPago.value = pago;
    pagoErrors.value = {};
  }

  function setPagos(pagos: IPago[]) {
    allPagos.value = pagos;
    pagoErrors.value = {};
  }

  function setPagoError(error: any) {
    pagoErrors.value = { ...error };
  }

  function getPagos() {
    return ApiService.get("pagos/all")
      .then(({ data }) => {
        setPagos(data);
      })
      .catch(({ response }) => {
        setPagoError(response.data.errors);
		throw new Error();
      });
  }

  async function buscarVentas(params: IPago) {
    return await ApiService.post("pago/v1/pagos/all", params)
      .then(async({ data }) => {
        setPagos(data);
      })
      .catch(({ response }) => {
        setPagoError(response.data.errors);
		throw new Error();
      });
  }

  function getPagosEdificio(codigoEdificio) {
    return ApiService.get(`pago/v1/pagos/edificio/${codigoEdificio}`)
      .then(({ data }) => {
        setPagos(data);
      })
      .catch(({ response }) => {
        setPagoError(response.data.errors);
		throw new Error();
      });
  }

  function getPagosConvenio(codigoConvenio) {
    return ApiService.get(`pago/v1/pagos/convenio/${codigoConvenio}`)
      .then(({ data }) => {
        setPagos(data);
      })
      .catch(({ response }) => {
        setPagoError(response.data.errors);
		throw new Error();
      });
  }


  function getPago(id: string ) {
    return ApiService.get("pago", id)
      .then(({ data }) => {
        setPago(data);
      })
      .catch(({ response }) => {
        setPagoError(response.data.errors);
		throw new Error();
      });
  }

  function createPago(params: IPago) {
    return ApiService.post("pago", params)
      .then(({ data }) => {
        setPago(data);
      })
      .catch(({ response }) => {
        setPagoError(response.data.errors);
		throw new Error();
      });
  }

  function updatePago(params: IPago) {
    return ApiService.put(`pago/${params.id}`, params)
      .then(({ data }) => {
        setPago(data);
      })
      .catch(({ response }) => {
        setPagoError(response.data.errors);
		throw new Error();
      });
  }

  function deletePago(id: string ) {
    return ApiService.delete(`pago/${id}`)
      .then(({ data }) => {
        setPago(data);
      })
      .catch(({ response }) => {
        setPagoError(response.data.errors);
		throw new Error();
      });
  }


  return {
    buscarVentas,
    pagoErrors,
    getPagosEdificio,
    getPagosConvenio,
    currentPago,
    allPagos,
    getPagos,
    getPago,
    createPago,
    updatePago,
    deletePago
  };
});




