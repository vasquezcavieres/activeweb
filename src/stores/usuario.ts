import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IUsuario {
tokenUsuario: string;
rutUsuario: string;
rutUsuarioDv: string;
codigoPais: string;
pais: string;
codigoRol: string;
nombres: string;
apellidos: string;
email: string;
telefono: string;
clave: string;
confirmarClave : string;
ultimaClave: string;
debeCambiarClave: string;
fechaCreacion: string;
fechaActualizacion: string;
activo: string;
codigoEdificio:string;
}

export const useUsuarioStore = defineStore("usuario", () => {
  const usuarioErrors = ref({});
  const currentUsuario = ref<IUsuario>({} as IUsuario);
  const allUsuarios = ref<IUsuario[]>([] as Array<IUsuario>);

  function setUsuario(usuario: IUsuario) {
    currentUsuario.value = usuario;
    usuarioErrors.value = {};
  }

  function setUsuarios(usuarios: IUsuario[]) {
    allUsuarios.value = usuarios;
    usuarioErrors.value = {};
  }

  function setUsuarioError(error: any) {
    usuarioErrors.value = { ...error };
  }

  function getUsuarios() {
    return ApiService.get("usuario/v1/usuarios/all")
      .then(({ data }) => {
        setUsuarios(data);
      })
      .catch(({ response }) => {
        setUsuarioError(response.data.errors);
		throw new Error();
      });
  }

  function getUsuariosComunidad() {
    return ApiService.get("usuario/v1/usuarios/comunidad/all")
      .then(({ data }) => {
        setUsuarios(data);
      })
      .catch(({ response }) => {
        setUsuarioError(response.data.errors);
		throw new Error();
      });
  }

  
  function getUsuariosAdministradorConvenio() {
    return ApiService.get("usuario/v1/usuarios/administradorConvenio/all")
      .then(({ data }) => {
        setUsuarios(data);
      })
      .catch(({ response }) => {
        setUsuarioError(response.data.errors);
		throw new Error();
      });
  }

  function getUsuario(id: string) {
    return ApiService.get("usuario/v1/usuario", id)
      .then(({ data }) => {
        setUsuario(data);
      })
      .catch(({ response }) => {
        setUsuarioError(response.data.errors);
		throw new Error();
      });
  }

  function createUsuario(params: IUsuario) {
    return ApiService.post("usuario/v1/usuario", params)
      .then(({ data }) => {
        setUsuario(data);
      })
      .catch(({ response }) => {
        setUsuarioError(response.data.errors);
		throw new Error();
      });
  }

  function updateUsuario(params: IUsuario) {
    return ApiService.put(`usuario/${params.id}`, params)
      .then(({ data }) => {
        setUsuario(data);
      })
      .catch(({ response }) => {
        setUsuarioError(response.data.errors);
		throw new Error();
      });
  }

  function deleteUsuario(id: string|undefined) {
    return ApiService.delete(`usuario/${id}`)
      .then(({ data }) => {
        setUsuario(data);
      })
      .catch(({ response }) => {
        setUsuarioError(response.data.errors);
		throw new Error();
      });
  }


  return {
    usuarioErrors,
    currentUsuario,
    allUsuarios,
	getUsuarios,
  getUsuariosComunidad,
  getUsuariosAdministradorConvenio,
	getUsuario,
	createUsuario,
	updateUsuario,
    deleteUsuario
  };
});




