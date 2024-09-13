import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export interface IEdificio {
  codigoEdificio: string;
  codigoArea: string;
  nombre: string;
  codigoPais: string;
  pais: string;
  direccion: string;
  ciudad: string;
  comuna: string;
  centroCosto: string;
  rutRazonSocial: string;
  rutRazonSocialDv: string;
  nombrerazonSocial: string;
  fechaDesde: Date ;
  fechaHasta: Date ;
  tipoCuenta: string;
  numeroCuenta: number;  
  banco: string;
  codigoTipoAbono : string;
  correoContacto: string;
  codigoBanco :string,
  emailNotificacion: string;
  maquinasInstaladas: number;
  porcentajeComision: string;
  minimoGarantizadoComision: number;
  giro: string
}

export const useEdificioStore = defineStore("edificio", () => {
  const edificioErrors = ref({});
  const currentEdificio = ref<IEdificio>({} as IEdificio);
  const allEdificios = ref<IEdificio[]>([] as Array<IEdificio>);
  const allEdificiosConvenio = ref<IEdificio[]>([] as Array<IEdificio>);

  function setEdificio(edificio: IEdificio) {
    currentEdificio.value = edificio;
    edificioErrors.value = {};
  }

  function setEdificios(edificios: IEdificio[]) {
    allEdificios.value = edificios;
    edificioErrors.value = {};
  }

  function setEdificiosConvenio(edificios: IEdificio[]) {
    allEdificiosConvenio.value = edificios;
    edificioErrors.value = {};
  }

  function setEdificioError(error: any) {
    edificioErrors.value = { ...error };
  }

  function getEdificios() {
    return ApiService.get("edificio/v1/edificios/all")
      .then(({ data }) => {
        setEdificios(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }

  function getEdificiosAsociados() {
    return ApiService.get("edificio/v1/edificiosAsociados/all")
      .then(({ data }) => {
        setEdificios(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }

  function getEdificiosConvenio(rutRazonSocial) {
    return ApiService.get(`edificio/v1/edificiosConvenio/${rutRazonSocial}`)
      .then(({ data }) => {
        setEdificiosConvenio(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }

  function getEdificio(id: string) {
    return ApiService.get("edificio/v1/edificio", id)
      .then(({ data }) => {
        setEdificio(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }

  function getEdificioComunidad(id: string) {
    return ApiService.get("edificio/v1/edificioComunidad", id)
      .then(({ data }) => {
        setEdificio(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }

  function createEdificio(params: IEdificio) {
    return ApiService.post("edificio/v1/edificio", params)
      .then(({ data }) => {
        setEdificio(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }

  function updateEdificio(codigoEdificio : string, params: IEdificio) {
    return ApiService.put(`edificio/v1/edificio/${codigoEdificio}`, params)
      .then(({ data }) => {
        setEdificio(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }

  function deleteEdificio(id: string|undefined) {
    return ApiService.delete(`edificio/${id}`)
      .then(({ data }) => {
        setEdificio(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }
  
  function asociarEdificios(rutRazonSocial,params) {
    return ApiService.put(`edificio/v1/asociarEdificios/${rutRazonSocial}`, params)
      .then(({ data }) => {
        setEdificio(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }

  async function obtenerEdificios(params: IEdificio) {
    return await ApiService.post("edificio/v1/edificiosConvenio", params)
      .then(async({ data }) => {
        setEdificiosConvenio(data);
      })
      .catch(({ response }) => {
        setEdificioError(response.data.errors);
		throw new Error();
      });
  }

  return {asociarEdificios,getEdificiosConvenio,obtenerEdificios,
    edificioErrors,
    currentEdificio,
    allEdificios,
    allEdificiosConvenio,
    getEdificios,
    getEdificio,
    createEdificio,
    updateEdificio,
    deleteEdificio,
    getEdificiosAsociados,
    getEdificioComunidad
  };
});




