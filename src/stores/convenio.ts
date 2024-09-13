import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IConvenio {
		rutRazonSocial: string;
rutRazonSocialDv: string;
nombrerazonSocial: string;
nombreAdministradora: string | null | '';
direccion: string;
comuna: string;
region: string;
representanteLegal: string;
rutRepresentanteLegal: string;
rutRepresentanteLegalDv: string;
correoContacto: string;
vendedorId: string;
porcentajeComision: string;
rutAdministrador: number;
minimoGarantizadoComision: number;
giro: string
}

export const useConvenioStore = defineStore("convenio", () => {
  const convenioErrors = ref({});
  const currentConvenio = ref<IConvenio>({} as IConvenio);
  const allConvenios = ref<IConvenio[]>([] as Array<IConvenio>);

  function setConvenio(convenio: IConvenio) {
    currentConvenio.value = convenio;
    convenioErrors.value = {};
  }

  function setConvenios(convenios: IConvenio[]) {
    allConvenios.value = convenios;
    convenioErrors.value = {};
  }

  function setConvenioError(error: any) {
    convenioErrors.value = { ...error };
  }

  function getConvenios() {
    return ApiService.get("convenio/v1/convenios/all")
      .then(({ data }) => {
        setConvenios(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }

  function getConvenio(id: string) {
    return ApiService.get("convenio/v1/convenio", id)
      .then(({ data }) => {
        setConvenio(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }


 async  function getConvenioAdministrador(rutAdministrador: string) {
    return await ApiService.get("convenio/v1/convenio/administrador", rutAdministrador)
      .then(async ({ data }) => {
        setConvenio(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }

  function getConvenioEdificio(id: string) {
    return ApiService.get("convenio/v1/convenio/edificio", id)
      .then(({ data }) => {
        setConvenio(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }

  function createConvenio(params: IConvenio) {
    return ApiService.post("convenio/v1/convenio", params)
      .then(({ data }) => {
        setConvenio(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }

  function updateConvenio(rutRazonSocial: number ,params: IConvenio) {
    return ApiService.put(`convenio/v1/convenio/${rutRazonSocial}`, params)
      .then(({ data }) => {
        setConvenio(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }

  function deleteConvenio(id: string|undefined) {
    return ApiService.delete(`convenio/${id}`)
      .then(({ data }) => {
        setConvenio(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }

  
  function asociarUsuarioAdministrador(rutRazonSocial: number ,rutUsuario: number ,params: IConvenio) {
    return ApiService.put(`convenio/v1/asociarUsuarioAdministrador/${rutRazonSocial}/${rutUsuario}`,params)
      .then(({ data }) => {
        setConvenio(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }

  return {
    getConvenioEdificio,
    getConvenioAdministrador,
    asociarUsuarioAdministrador,
    convenioErrors,
    currentConvenio,
    allConvenios,
	getConvenios,
	getConvenio,
	createConvenio,
	updateConvenio,
    deleteConvenio
  };
});




