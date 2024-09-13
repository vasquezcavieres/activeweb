import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IArchivoPagoProveedores {
	numeroArchivo: string;
  nombreArchivo: string;
  numeroTransferencias: string;
  fechaCreacion: string;
  rutaArchivo: string;
}

export const useArchivoPagoProveedoresStore = defineStore("archivoPagoProveedores", () => {
  const archivoPagoProveedoresErrors = ref({});
  const currentArchivoPagoProveedores = ref<IArchivoPagoProveedores>({} as IArchivoPagoProveedores);
  const allArchivoPagoProveedoress = ref<IArchivoPagoProveedores[]>([] as Array<IArchivoPagoProveedores>);
  const file = ref([]);

  function setArchivoPagoProveedores(archivoPagoProveedores: IArchivoPagoProveedores) {
    currentArchivoPagoProveedores.value = archivoPagoProveedores;
    archivoPagoProveedoresErrors.value = {};
  }

  function setArchivoPagoProveedoress(archivoPagoProveedoress: IArchivoPagoProveedores[]) {
    allArchivoPagoProveedoress.value = archivoPagoProveedoress;
    archivoPagoProveedoresErrors.value = {};
  }

  function setArchivoPagoProveedoresError(error: any) {
    archivoPagoProveedoresErrors.value = { ...error };
  }
  //https://localhost:7196/api/ArchivoPagoProveedores/v1/archivoPagoProveedores/all
  function getArchivoPagoProveedoress() {
    return ApiService.get("ArchivoPagoProveedores/v1/archivoPagoProveedores/all")
      .then(({ data }) => {
        setArchivoPagoProveedoress(data);
      })
      .catch(({ response }) => {
        setArchivoPagoProveedoresError(response.data.errors);
		throw new Error();
      });
  }

 async  function getFile(id: string) {
    return await ApiService.get("ArchivoPagoProveedores/v1/GetFile",id)
      .then(({ data }) => {
       // setArchivoPagoProveedoress(data);
       file.value = data;
       console.log("llego")
      })
      .catch(({ response }) => {
        setArchivoPagoProveedoresError(response.data.errors);
		throw new Error();
      });
  }

  function getArchivoPagoProveedores(id: string) {
    return ApiService.get("archivoPagoProveedores", id)
      .then(({ data }) => {
        setArchivoPagoProveedores(data);
      })
      .catch(({ response }) => {
        setArchivoPagoProveedoresError(response.data.errors);
		throw new Error();
      });
  }

  function createArchivoPagoProveedores(params: IArchivoPagoProveedores) {
    return ApiService.post("archivoPagoProveedores", params)
      .then(({ data }) => {
        setArchivoPagoProveedores(data);
      })
      .catch(({ response }) => {
        setArchivoPagoProveedoresError(response.data.errors);
		throw new Error();
      });
  }

  function updateArchivoPagoProveedores(params: IArchivoPagoProveedores) {
    return ApiService.put(`archivoPagoProveedores/${params.id}`, params)
      .then(({ data }) => {
        setArchivoPagoProveedores(data);
      })
      .catch(({ response }) => {
        setArchivoPagoProveedoresError(response.data.errors);
		throw new Error();
      });
  }

  function deleteArchivoPagoProveedores(id: string|undefined) {
    return ApiService.delete(`archivoPagoProveedores/${id}`)
      .then(({ data }) => {
        setArchivoPagoProveedores(data);
      })
      .catch(({ response }) => {
        setArchivoPagoProveedoresError(response.data.errors);
		throw new Error();
      });
  }


  return {getFile,
    archivoPagoProveedoresErrors,
    currentArchivoPagoProveedores,
    allArchivoPagoProveedoress,
    file,
	getArchivoPagoProveedoress,
	getArchivoPagoProveedores,
	createArchivoPagoProveedores,
	updateArchivoPagoProveedores,
    deleteArchivoPagoProveedores
  };
});




