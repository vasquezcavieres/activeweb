<template>
    <div style="zoom:150%">
      <!--begin::Content header-->
  
      <!--end::Content header-->
      <!--begin::Form-->
      <VForm
        class="form-signin d-flex align-items-stretch flex-column"
        @submit="onSubmitForgotPassword"
        :validation-schema="usuariosValidator"
      >
        <div class="text-center mb-2">
          <img
            class="mb-2"
            src="https://admin.activpay.cl/media/logos/default.png"
            alt=""
            width="100"
          />
        </div>
        <hr />
        <div class="text-center mb-2">
          <!-- <h3 class="mb-0">Iniciar Sesión</h3> -->
          <span>Cambia tu contraseña</span>
        </div>
  
        <div
          role="alert"
          v-show="errors.length > 0"
          v-bind:class="{ show: errors.length }"
          class="alert alert-primary"
        >
          <div class="alert-text" v-for="(error, i) in errors" :key="i">
            {{ error }}
          </div>
        </div>
  
        <div v-if="step2" class="d-flex align-items-stretch flex-column">
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
            Su contraseña ha sido cambiada de forma correcta.
            <p>Ya puedes iniciar sesión. <a href="/sig-in">Ir al login</a></p>
          </div>
        </div>
  
        <div v-if="!step2" class=" d-flex align-items-stretch flex-column">
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
            HOLA, para continuar debes cambiar tu contraseña
            temporal.
          </div>
  
          <div class="form-label-group">
            <label class="required form-label">Clave</label>
                           
                                  <Field
                                    type="password"
                                    maxlength="100"
                                    name="clave"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Clave"
                                    v-model="usuarioDetails.clave"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="clave" />
                                    </div>
                                  </div>
          </div>
          <div class="form-label-group">
            <label class="required form-label">Confirmar Clave</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="password"
                                    maxlength="100"
                                    name="confirmarClave"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Confirmar Clave"
                                    v-model="usuarioDetails.confirmarClave"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="confirmarClave" />
                                    </div>
                                  </div>
          </div>
  
          <!--begin::Action-->
          <div
            class="form-group d-flex flex-wrap justify-content-between align-items-center"
          >
            <button
            type="submit"
          ref="submitButton"
          id="kt_password_reset_submit"
              class="btn btn-primary align-self-center"
            >
              Cambiar Clave
            </button>
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
          </div>
        </div>
  
        <!--end::Action-->
      </VForm>
      <!--end::Form-->
    </div>
  </template>

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
    const usuariosValidator = Yup.object().shape({
      clave: Yup.string().required("Clave es requerido").label("clave"),
      confirmarClave :Yup.string().required("Confirmar Clave es requerido").label("confirmarClave"),
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
    const onSubmitForgotPassword = async () => {
      

      // eslint-disable-next-line
   //   submitButton.value!.disabled = true;
      // Activate loading indicator
     // submitButton.value?.setAttribute("data-kt-indicator", "on");

     let formData = new FormData();
      //  formData.append("file", imagen_principal.value?.archivo);
        formData.append("usuario", JSON.stringify(usuarioDetails.value));      
      // dummy delay
      // Send login request
      await store.cambiarClave(tokenRecupetacion as string,formData);

      const error = Object.values(store.errors);

      if (error.length === 0) {
          step2.value = true
        Swal.fire({
          text: "Cambio Clave Exitoso!",
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
      debeCambiarClave : store.user.debeCambiarClave,
      tokenUsuario : store.user.tokenUsuario,
      confirmarClave : store.user.confirmarClave,
      tokenRecuperacion:store.user.tokenRecuperacion,
});
    return {step2,errors,client,usuarioDetails,
      onSubmitForgotPassword,
      usuariosValidator,
      submitButton,
    };
  },
});
</script>
