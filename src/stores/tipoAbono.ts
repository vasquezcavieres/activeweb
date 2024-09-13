import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ITipoAbono {
		codigoTipoAbono: string;
nombre: string;

}

export const useTipoAbonoStore = defineStore("tipoAbono", () => {
  const tipoAbonoErrors = ref({});
  const currentTipoAbono = ref<ITipoAbono>({} as ITipoAbono);
  const allTipoAbonos = ref<ITipoAbono[]>([] as Array<ITipoAbono>);

  function setTipoAbono(tipoAbono: ITipoAbono) {
    currentTipoAbono.value = tipoAbono;
    tipoAbonoErrors.value = {};
  }

  function setTipoAbonos(tipoAbonos: ITipoAbono[]) {
    allTipoAbonos.value = tipoAbonos;
    tipoAbonoErrors.value = {};
  }

  function setTipoAbonoError(error: any) {
    tipoAbonoErrors.value = { ...error };
  }

  function getTipoAbonos() {
    return ApiService.get("tipoAbono/v1/tipoAbonos/all")
      .then(({ data }) => {
        setTipoAbonos(data);
      })
      .catch(({ response }) => {
        setTipoAbonoError(response.data.errors);
		throw new Error();
      });
  }

  function getTipoAbono(id: string) {
    return ApiService.get("tipoAbono", id)
      .then(({ data }) => {
        setTipoAbono(data);
      })
      .catch(({ response }) => {
        setTipoAbonoError(response.data.errors);
		throw new Error();
      });
  }

  function createTipoAbono(params: ITipoAbono) {
    return ApiService.post("tipoAbono", params)
      .then(({ data }) => {
        setTipoAbono(data);
      })
      .catch(({ response }) => {
        setTipoAbonoError(response.data.errors);
		throw new Error();
      });
  }

  function updateTipoAbono(params: ITipoAbono) {
    return ApiService.put(`tipoAbono/${params.id}`, params)
      .then(({ data }) => {
        setTipoAbono(data);
      })
      .catch(({ response }) => {
        setTipoAbonoError(response.data.errors);
		throw new Error();
      });
  }

  function deleteTipoAbono(id: string|undefined) {
    return ApiService.delete(`tipoAbono/${id}`)
      .then(({ data }) => {
        setTipoAbono(data);
      })
      .catch(({ response }) => {
        setTipoAbonoError(response.data.errors);
		throw new Error();
      });
  }


  return {
    tipoAbonoErrors,
    currentTipoAbono,
    allTipoAbonos,
	getTipoAbonos,
	getTipoAbono,
	createTipoAbono,
	updateTipoAbono,
    deleteTipoAbono
  };
});




