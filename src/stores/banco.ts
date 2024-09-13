





import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IBanco {
		codigoBanco: string;
nombre: string;

}

export const useBancoStore = defineStore("banco", () => {
  const bancoErrors = ref({});
  const currentBanco = ref<IBanco>({} as IBanco);
  const allBancos = ref<IBanco[]>([] as Array<IBanco>);

  function setBanco(banco: IBanco) {
    currentBanco.value = banco;
    bancoErrors.value = {};
  }

  function setBancos(bancos: IBanco[]) {
    allBancos.value = bancos;
    bancoErrors.value = {};
  }

  function setBancoError(error: any) {
    bancoErrors.value = { ...error };
  }

  function getBancos() {
    return ApiService.get("banco/v1/bancos/all")
      .then(({ data }) => {
        setBancos(data);
      })
      .catch(({ response }) => {
        setBancoError(response.data.errors);
		throw new Error();
      });
  }

  function getBanco(id: string) {
    return ApiService.get("banco", id)
      .then(({ data }) => {
        setBanco(data);
      })
      .catch(({ response }) => {
        setBancoError(response.data.errors);
		throw new Error();
      });
  }

  function createBanco(params: IBanco) {
    return ApiService.post("banco", params)
      .then(({ data }) => {
        setBanco(data);
      })
      .catch(({ response }) => {
        setBancoError(response.data.errors);
		throw new Error();
      });
  }

  function updateBanco(params: IBanco) {
    return ApiService.put(`banco/${params.id}`, params)
      .then(({ data }) => {
        setBanco(data);
      })
      .catch(({ response }) => {
        setBancoError(response.data.errors);
		throw new Error();
      });
  }

  function deleteBanco(id: string|undefined) {
    return ApiService.delete(`banco/${id}`)
      .then(({ data }) => {
        setBanco(data);
      })
      .catch(({ response }) => {
        setBancoError(response.data.errors);
		throw new Error();
      });
  }


  return {
    bancoErrors,
    currentBanco,
    allBancos,
	getBancos,
	getBanco,
	createBanco,
	updateBanco,
    deleteBanco
  };
});




