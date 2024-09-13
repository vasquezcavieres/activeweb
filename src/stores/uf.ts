import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export interface IUf {
	fechaUf: Date;
  valor: string;
}

export const useUfStore = defineStore("uf", () => {
  const ufErrors = ref({});
  const currentUf = ref<IUf>({} as IUf);
  const allUfs = ref<IUf[]>([] as Array<IUf>);

  function setUf(uf: IUf) {
    currentUf.value = uf;
    ufErrors.value = {};
  }

  function setUfs(ufs: IUf[]) {
    allUfs.value = ufs;
    ufErrors.value = {};
  }

  function setUfError(error: any) {
    ufErrors.value = error;
  }

  function getUfs() {
    return ApiService.get("uf/v1/ufs/all")
      .then(({ data }) => {
        setUfs(data);
      })
      .catch(({ response }) => {
        setUfError(response.data.errors);
		throw new Error();
      });
  }

  function getUf(id: string) {
    return ApiService.get("uf", id)
      .then(({ data }) => {
        setUf(data);
      })
      .catch(({ response }) => {
        setUfError(response.data.errors);
		throw new Error();
      });
  }

  function createUf(params: IUf) {
    return ApiService.post("uf/v1/uf", params)
      .then(({ data }) => {
        setUf(data);
      })
      .catch(({ response }) => {
        setUfError(response.data.errores[0]);
		throw new Error();
      });
  }

  function updateUf(params: IUf) {
    return ApiService.put(`uf/${params.id}`, params)
      .then(({ data }) => {
        setUf(data);
      })
      .catch(({ response }) => {
        setUfError(response.data.errors);
		throw new Error();
      });
  }

  function deleteUf(id: string|undefined) {
    return ApiService.delete(`uf/${id}`)
      .then(({ data }) => {
        setUf(data);
      })
      .catch(({ response }) => {
        setUfError(response.data.errors);
		throw new Error();
      });
  }


  return {
    ufErrors,
    currentUf,
    allUfs,
	getUfs,
	getUf,
	createUf,
	updateUf,
    deleteUf
  };
});




