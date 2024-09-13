<template>
    <div>
      <!--begin::Content header-->
  
      <!--end::Content header-->
      <!--begin::Form-->
      <VForm
        class="form-signin d-flex align-items-stretch flex-column"
        @submit="onSubmitForgotPassword"
      >
        <div class="text-center mb-2">
          <img
            class="mb-2"
            src="https://admin.activpay.cl/media/logos/default.png"
            alt=""
            width="120"
          />
          <h3 class="mb-0">Iniciar Sesión</h3>
          <span>Cambia tu contraseña</span>
        </div>
  

        <div v-if="step2" class="d-flex align-items-stretch flex-column">
          <div class="alert alert-success messaging">
            <svg
              data-v-bc4e6392=""
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="exclamation circle"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-exclamation-circle mx-auto b-icon bi"
            >
              <g data-v-bc4e6392="">
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
                ></path>
              </g>
            </svg>
            Hemos enviado tu nueva contraseña.
            <p>Ya puedes iniciar sesión. <a href="/sign-in">Ir al login</a></p>
          </div>
        </div>
        <div
          v-if="!step2 "
          class=" d-flex align-items-stretch flex-column"
        >
          <div class="alert alert-primary messaging">
            <svg
              data-v-bc4e6392=""
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="exclamation circle"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi-exclamation-circle mx-auto b-icon bi"
            >
              <g data-v-bc4e6392="">
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
                ></path>
              </g>
            </svg>
            HOLA,{{usuarioDetails.nombres}} , generaremos una nueva contraseña y la
            enviaremos a tu correo.
          </div>
  
          <!--begin::Action-->
          <button
            ref="kt_login_signin_submit"
            class="btn btn-primary align-self-center"
          >
            Cambiar Clave
          </button>
        </div>
        <p class="mt-3 mb-3 text-muted text-center">
          <a
            href="#"
            v-on:click="$router.push('/login')"
            class="text-dark-60 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            Volver
          </a>
        </p>
        <!--end::Action-->
      </VForm>
      <!--end::Form-->
    </div>
  </template>
  
  <style lang="scss" scoped>
  .spinner.spinner-right {
    padding-right: 3.5rem !important;
  }
  </style>
  
  <script lang="ts">
  import { defineComponent, ref,onMounted } from "vue";
  import { ErrorMessage, Field, Form as VForm } from "vee-validate";
  import { useAuthStore } from "@/stores/auth";
  import type { User } from "@/stores/auth";
  import * as Yup from "yup";
  import Swal from "sweetalert2/dist/sweetalert2.js";
  import { useRouter ,useRoute} from "vue-router";
  export default defineComponent({
    name: "password-reset",
    components: {
      Field,
      VForm,
      ErrorMessage,
    },
    setup() {

    const route = useRoute();
    const tokenRecupetacion = route.params.token;
    const store = useAuthStore();  
    const submitButton = ref<HTMLButtonElement | null>(null);  
      //Create form validation object
      const forgotPassword = Yup.object().shape({
       // email: Yup.string().email().required("Email es requerido").label("Email"),
      });

      onMounted(() => {
        obtenerUsuatioToken(tokenRecupetacion);
    });

    const obtenerUsuatioToken = (tokenRecupetacion) =>{
      store
        .obtenerUsuatioToken(tokenRecupetacion)
        .then(() => {
            usuarioDetails.value = store.user;
        })
        .catch(() => {
          const [error] = Object.values(store.errors);
          Swal.fire({
            text: error,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          })
        });
    }
  
      //Form submit function
      const onSubmitForgotPassword = async (values: any) => {
        values = values as string;
  
        // eslint-disable-next-line
     //   submitButton.value!.disabled = true;
        // Activate loading indicator
       // submitButton.value?.setAttribute("data-kt-indicator", "on");
  
        // dummy delay
        // Send login request
        await store.confirmaRecuperarClave(tokenRecupetacion as string);
  
        const error = Object.values(store.errors);
  
        if (error.length === 0) {
            step2.value = true
          Swal.fire({
            text: "Confirmar recuperar clave exitoso!",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, vamos!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          });
        } else {
          Swal.fire({
            text: error[0] as string,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Try again!",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-danger",
            },
          });
        }
  
        submitButton.value?.removeAttribute("data-kt-indicator");
        // eslint-disable-next-line
          submitButton.value!.disabled = false;
      };

      const step2 =  ref(false);
      const errors = ref([]);
      const client = ref ();

      const usuarioDetails = ref<User>({
        nombres:store.user.nombres,
        apellidos:store.user.apellidos,
        email: store.user.email,
        password: store.user.password,
        api_token: store.user.nombres,
        clave:store.user.clave,
        tokenAcceso: store.user.tokenAcceso,
        codigoRol: store.user.codigoRol,
        rutUsuario:store.user.rutUsuario,
        tokenRecuperacion:store.user.tokenRecuperacion,
        debeCambiarClave:store.user.debeCambiarClave,
        confirmarClave:store.user.confirmarClave,
        tokenUsuario:store.user.tokenUsuario,
  });
  

      return {step2,errors,client,usuarioDetails,
        onSubmitForgotPassword,
        forgotPassword,
        submitButton,
      };
    },
  });
  </script>
  
  <style scoped>
  .messaging {
    font-size: 0.8em;
  }
  .alert-success {
    color: #155724 !important;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  </style>
  