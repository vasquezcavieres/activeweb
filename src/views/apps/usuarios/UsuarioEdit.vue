

<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <Toast />
    <!--begin::Content-->
    <div class="flex-lg-row-fluid">
      <!--begin::Post-->
      <div>
        <!--begin::Container-->
        <div id="kt_content_container">
          <!--begin::Form-->
		  <Form
                      id="kt_account_edificio_details_form"
                      class="form d-flex flex-column flex-lg-row"
                      novalidate="novalidate"
                      @submit="saveChanges1()"
                      :validation-schema="usuariosValidator"
                    >
            <!--end::Aside column-->
            <!--begin::Main column-->
            <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <!--begin::Tab content-->
              <div class="tab-content">
                <!--begin::Tab pane-->
                <div
                  class="tab-pane fade show active"
                  id="kt_ecommerce_add_product_general"
                  role="tab-panel"
                >
                <div class="d-flex flex-column gap-7 gap-lg-10">                    
                      <!--begin::General options-->
                      <div class="card card-flush py-4">
                        <!--begin::Card body-->
                        <div class="card-body pt-0">   
                          <div class="row">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <div>
                                <label class="required form-label">Rut Usuario</label>
                              </div>                              
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="number"
                                    maxlength="10"
                                    name="rutUsuario"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 rut"
                                    placeholder="Rut Usuario"
                                    v-model="usuarioDetails.rutUsuario"
                                    v-on:keyup="calculaDvUsuario(usuarioDetails.rutUsuario)"
                                  />
                                <Field
                                      type="text"
                                      maxlength="1"
                                      name="rutRazonSocialDv"
                                      class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 rutDv"
                                      placeholder=""
                                      v-model="usuarioDetails.rutUsuarioDv"
                                      readonly
                                    />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="rutUsuario" />
                                    </div>
                                  </div> 
                            </div>
                            <div class="col-4">
                              <label class="form-label">Código País</label>
                                  <Field
                                    type="text"
                                    maxlength="4"
                                    name="codigoPais"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" 
                                    placeholder="Codigo Pais"
                                    v-model="usuarioDetails.codigoPais"
                                    readonly
                                  />    
                            </div>
                            <div class="col-4">                              
                              <label class="form-label">País</label>              
                                  <Field
                                    type="text"
                                    maxlength="50"
                                    name="pais"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Pais"
                                    v-model="usuarioDetails.pais"
                                    readonly
                                  />                                 
                            </div>
                          </div>
                          <div class="row mt-5">
                            <div class="col-4">
                              <label class="required form-label">Nombres</label>
                                  <Field
                                    type="text"
                                    maxlength="100"
                                    name="nombres"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Nombres"
                                    v-model="usuarioDetails.nombres"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="nombres" />
                                    </div>
                                  </div> 
                            </div>
                            <div class="col-4">
                              <label class="required form-label">Apellidos</label>
                                  <Field
                                    type="text"
                                    maxlength="100"
                                    name="apellidos"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Apellidos"
                                    v-model="usuarioDetails.apellidos"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="apellidos" />
                                    </div>
                                  </div>
  
                            </div>
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Email</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="100"
                                    name="email"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Email"
                                    v-model="usuarioDetails.email"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="email" />
                                    </div>
                                  </div>
                            </div>
                            <!--end::Input group-->
                          </div>
                          <div class="row mt-5">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Teléfono</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="100"
                                    name="telefono"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="telefono"
                                    v-model="usuarioDetails.telefono"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="telefono" />
                                    </div>
                                  </div>
                            </div>
                            <div class="col-4">
                                <!--begin::Label-->
                                <label class="required form-label">Perfil</label>
                                <!--end::Label-->   
                                <Field v-slot="{  }" 
                                  name="codigoRol" 
                                  as="select"
                                  class="form-control"    
                                  v-model="usuarioDetails.codigoRol"    
                                  @change="seleccionPerfil($event)"                            
                                  >
                                  <option value="" disabled>Seleccione un Perfil</option>
                                  <option key="ADMINISTRADOR_CONVENIO" value="ADMINISTRADOR_CONVENIO">Administrador Convenio</option>
                                  <option key="COMUNIDAD" value="COMUNIDAD">Comunidad</option>
                                </Field>
                                    <div class="fv-plugins-message-container">
                                      <div class="fv-help-block">
                                        <ErrorMessage name="codigoRol" />
                                      </div>
                                    </div> 
                              </div>
                            <div class="col-4" v-if="mostrarEdificios">
                                <!--begin::Label-->
                                <label class="required form-label">Edificio</label>
                                <!--end::Label-->                                
                                <Field v-slot="{  }" 
                                  name="codigoEdificio" 
                                  as="select"
                                  class="form-control"    
                                  v-model="usuarioDetails.codigoEdificio"                            
                                  >
                                  <option value="" disabled>Seleccione un Edificio</option>
                                  <option v-for="unEdificio in allEdificios" :key="unEdificio.codigoEdificio" :value="unEdificio.codigoEdificio">{{ unEdificio.nombre }}</option>
                                </Field>
                                    <div class="fv-plugins-message-container">
                                      <div class="fv-help-block">
                                        <ErrorMessage name="codigoEdificio" />
                                      </div>
                                    </div> 
                              </div>
                          </div>
                        </div>
                        <!--end::Card header-->
                      </div>
                      <!--end::General options-->
                  </div>
                </div>
                <!--end::Tab pane-->
              </div>
              <!--end::Tab content-->
              <div class="d-flex justify-content-end">
              <!--begin::Button-->
                <router-link
                  :to="{name:'apps-usuario-comunidad-listing'}"
                  id="kt_ecommerce_add_product_cancel"
                  class="btn btn-light me-5"
                  >Cancelar</router-link>
                <!--end::Button-->

                <!--begin::Button-->
             
                <!--end::Button-->
                <!--begin::Button-->
                <button
                  type="submit"
                  id="kt_account_edificio_details_submit"
                  ref="submitButton1"
                  class="btn btn-primary"
                  >
                  <span class="indicator-label"> Guardar </span>
                  <span class="indicator-progress">
                    Espere ...
                    <span
                    class="
                      spinner-border spinner-border-sm
                      align-middle
                      ms-2
                    "
                    ></span>
                  </span>
                </button>
                <!--end::Button-->
              </div>
            </div>
            <!--end::Main column-->
          </Form>
          <!--end::Form-->
        </div>
        <!--end::Container-->
      </div>
      <!--end::Post-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useUsuarioStore } from "@/stores/usuario";
import type { IUsuario } from "@/stores/usuario";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");
import { useEdificioStore } from "@/stores/edificio";

export default defineComponent({
  name: "usuario-edit",
  components: {
    ErrorMessage,
    Field,
    Form
  },
  
  setup() {
    const router = useRouter();
    const store = useUsuarioStore();
    const storeEdificio = useEdificioStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const usuariosValidator = Yup.object().shape({
      rutUsuario: Yup.string().required("Es obligatorio").label("rutUsuario"),
      
    });

 
    const route = useRoute();
    const id = route.params.id;

    onMounted(() => {     
      obtenerUsuario(id);
      buscarEdificios();
      // usuarioDetails.value = {} as IUsuario;
      // usuarioDetails.value.codigoPais = 'CL';
      // usuarioDetails.value.pais = 'CHILE';
      // usuarioDetails.value.codigoRol = 'COMUNIDAD';
    });

    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        // let formData = new FormData();
        // formData.append("usuario", JSON.stringify(usuarioDetails.value));      
        
        store.createUsuario(usuarioDetails.value)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Usuario se ha creado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-usuario-comunidad-listing" });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.usuarioErrors);
            Swal.fire({
                text: error,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                heightAuto: false,
                customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
                },
            });
          });
      }
    };

    const buscarEdificios = () => {
      storeEdificio.getEdificiosAsociados()
        .then(() => {
          
        })
        .catch(() => {
          const [error] = Object.values(storeEdificio.edificioErrors);
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
    };


    const obtenerUsuario = (id) =>{
      store
        .getUsuario(id)
        .then(() => {
          loading = ref(false);
          usuarioDetails.value = store.currentUsuario;
          mostrarEdificios.value =  usuarioDetails.value.codigoRol == "ADMINISTRADOR_CONVENIO" ? false : true;
        })
        .catch(() => {
          const [error] = Object.values(store.usuarioErrors);
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
    
    const usuarioDetails = ref<IUsuario>({
      tokenUsuario : store.currentUsuario.tokenUsuario,
			rutUsuario : store.currentUsuario.rutUsuario,
			rutUsuarioDv : store.currentUsuario.rutUsuarioDv,
			codigoPais : store.currentUsuario.codigoPais,
			pais : store.currentUsuario.pais,
			codigoRol : store.currentUsuario.codigoRol,
			nombres : store.currentUsuario.nombres,
			apellidos : store.currentUsuario.apellidos,
			email : store.currentUsuario.email,
			telefono : store.currentUsuario.telefono,
			clave : store.currentUsuario.clave,
      confirmarClave:store.currentUsuario.confirmarClave,
			ultimaClave : store.currentUsuario.ultimaClave,
			debeCambiarClave : store.currentUsuario.debeCambiarClave,
			fechaCreacion : store.currentUsuario.fechaCreacion,
			fechaActualizacion : store.currentUsuario.fechaActualizacion,
			activo : store.currentUsuario.activo    ,
      codigoEdificio :  store.currentUsuario.codigoEdificio
  });

  const calculateDV = (rut) => {
        const cuerpo = `${rut}`;
        // Calcular Dígito Verificador
        let suma = 0;
        let multiplo = 2;

        // Para cada dígito del Cuerpo
        for (let i = 1; i <= cuerpo.length; i++) {
          // Obtener su Producto con el Múltiplo Correspondiente
          const index = multiplo * parseInt(cuerpo.charAt(cuerpo.length - i));

          // Sumar al Contador General
          suma += index;

          // Consolidar Múltiplo dentro del rango [2,7]
          if (multiplo < 7) {
            multiplo += 1;
          } else {
            multiplo = 2;
          }
  }
  // Calcular Dígito Verificador en base al Módulo 11
  const dvEsperado = 11 - (suma % 11);
  if (dvEsperado === 10) return "K";
  if (dvEsperado === 11) return "0";
  return `${dvEsperado}`;
}

const calculaDvUsuario = (rut) => {
    var dv = calculateDV(rut);
    usuarioDetails.value.rutUsuarioDv = dv;
  }

  
  const allEdificios = computed(() => {
      return storeEdificio.allEdificios;
    });   

    let loading = ref(true);
    const mostrarEdificios = ref(false);

    const seleccionPerfil = (event) => {
    mostrarEdificios.value =  usuarioDetails.value.codigoRol == "ADMINISTRADOR_CONVENIO" ? false : true;
  }

    return {seleccionPerfil,mostrarEdificios,
      buscarEdificios,
      allEdificios,
      calculaDvUsuario,
      submitButton1,
      saveChanges1,
      usuarioDetails,
      usuariosValidator,
    };
  },
});


</script>

<style>
#rutUsuario,
.rut {
  width: 50%;
  float: left;
  margin-right: 6px;
}

#rutUsuarioDv,
.rutDv {
  width: 60px;
  text-align: center;
}

.p-dialog .p-dialog-header .p-dialog-title {
    font-weight: 700;
    font-size: 1.25rem;
    color:#00ced1 !important;
}

.color-payment{
  color: #00ced1 !important;
}
</style>

	
	export default {
	  state,
	  actions,
	  mutations
	};

