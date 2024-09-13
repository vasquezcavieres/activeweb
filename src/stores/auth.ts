import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  nombres:string;
  apellidos: string;
  email: string;
  password: string;
  api_token: string;
  clave: string;
  tokenAcceso: string;
  codigoRol: string;
  rutUsuario: number;
  debeCambiarClave: boolean;
  tokenUsuario: string;
  confirmarClave: string;
  tokenRecuperacion:string;
  codigoPais:string;
  pais:string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function setAuth(authUser: User) {
    isAuthenticated.value = true;
    user.value = authUser;
    errors.value = {};
    JwtService.saveToken(user.value.tokenAcceso);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function setUser(authUser: User)
  {
    user.value = authUser;
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    JwtService.destroyToken();
  }

  function login(credentials: User) {
    return ApiService.post("usuario/v1/login", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errores);
      });
  }

  function logout() {
    purgeAuth();
  }

  function register(credentials: User) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errores);
      });
  }

  function forgotPassword(email: string) {
    return ApiService.get("usuario/v1/usuario/recuperarClave", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function obtenerUsuatioToken(tokenRecuperacion: string) {
    return ApiService.get("usuario/v1/usuario/obtenerRecuperacion", tokenRecuperacion)
      .then(({data} ) => {
        user.value = data;
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function confirmaRecuperarClave(tokenRecuperacion: string) {
    return ApiService.get("usuario/v1/usuario/confirmaRecuperarClave", tokenRecuperacion)
      .then(() => {
        
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  async function verifyAuth() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      await ApiService.post("usuario/v1/verify_token", { tokenAcceso: JwtService.getToken() })
        .then(async ({ data }) => {
          
          setAuth(data);
          console.log("VERIFICO OK EL TOKEN")
        })
        .catch(({ response }) => {
          setError(response.data.errors);
          purgeAuth();
        });
    } else {
      purgeAuth();
    }
  }


  function cambiarClave(token: string ,params: User) {
    return ApiService.put(`usuario/v1/acceso/cambiarClave/${token}`, params)
      .then(({ data }) => {
        //setConvenio(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
		throw new Error();
      });
  }

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
    obtenerUsuatioToken,
    confirmaRecuperarClave,
    cambiarClave,
  };
});
