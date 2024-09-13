<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
      class="form w-100"
      id="kt_login_signin_form"
      @submit="onSubmitLogin"
      :validation-schema="login"
      :initial-values="{ email: '', clave: '' }"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <div class="flex justify-content-center p-fluid">
          <div v-focustrap class="card">
              <div class="field">
                <div class="p-input-icon-right">
                      <i class="pi pi-envelope" />
                <Field
                  type="text"
                  maxlength="500"
                  name="email"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Email Usuario"
                  v-model="usuarioLogin.email"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  </div>
                  </div>
              <div class="field">               
                  <Field
                  type="password"
                  maxlength="500"
                  name="clave"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Clave"
                  v-model="usuarioLogin.clave"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="clave" />
                    </div>
                  </div>
              </div>  
              <div class="field">
                <router-link :to="{name: 'password-reset'}">
                  Recuperar Contraseña
                </router-link>
              </div>
          </div>
      </div>
      </div>
      <!--begin::Heading-->
      <!--begin::Actions-->
      <div class="text-center">
        <button
                  type="submit"
                  id="kt_account_edificio_details_submit"
                  ref="submitButton"
                  class="btn btn-primary"
                  >
                  <span class="indicator-label"> Ingresar </span>
                  <span class="indicator-progress">
                    Espere ...
                    <span
                    class="
                      spinner-border spinner-border-sm
                      align-middle
                      ms-2
                    "></span>
                  </span>
                </button>
        <!--begin::Submit button-->
        <!-- <router-link
          :to="{name:'dashboard'}"
          class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label"> Continuar </span>

          <span class="indicator-progress">
            Espere por favor...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </router-link> -->
        <!--end::Submit button-->

        <!--begin::Separator-->
        <div class="d-none text-center text-muted text-uppercase fw-bold mb-5">or</div>
        <!--end::Separator-->

        <!--begin::Google link-->
        <a
          href="#"
          class="d-none btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
        >
          <img
            alt="Logo"
            :src="getAssetPath('media/svg/brand-logos/google-icon.svg')"
            class="h-20px me-3"
          />
          Continue with Google
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a
          href="#"
          class="d-none btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
        >
          <img
            alt="Logo"
            :src="getAssetPath('media/svg/brand-logos/facebook-4.svg')"
            class="h-20px me-3"
          />
          Continue with Facebook
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a href="#" class="d-none btn btn-flex flex-center btn-light btn-lg w-100">
          <img
            alt="Logo"
            :src="getAssetPath('media/svg/brand-logos/apple-black.svg')"
            class="h-20px me-3"
          />
          Continue with Apple
        </a>
        <!--end::Google link-->
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().email().required("Email es requerido").label("Email"),
      clave: Yup.string().required("Clave es requerida").label("Password"),
    });

    //Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Send login request
      await store.login(values);
      const error = Object.values(store.errors);

      if (error.length === 0) {
        if (store.user.debeCambiarClave) {
              router.push({
                name: "change-password",
                params: { token: store.user.tokenRecuperacion },
              });
            }

        else if(store.user.codigoRol == 'USUARIO' )
          router.push({ name: "apps-dashboard-convenio" });
        else
          router.push({ name: "apps-dashboard" });

      } else {
        submitButton.value!.disabled = false;
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "¡Inténtalo de Nuevo!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
     //   submitButton.value!.disabled = false;
    };

    const usuarioLogin = ref<User>({    
      nombres:'',
  apellidos:'',
  email:'',
  password: '',
  api_token:'',
  clave: '',
  tokenAcceso: '',
  codigoRol: '',
  rutUsuario: 0,
  debeCambiarClave: false,
  tokenUsuario: '',
  confirmarClave:'',
  tokenRecuperacion:''
  });

    return {usuarioLogin,
      onSubmitLogin,
      login,
      submitButton,
      getAssetPath,
    };
  },
});
</script>
