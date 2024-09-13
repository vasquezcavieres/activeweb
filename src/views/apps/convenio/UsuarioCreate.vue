<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title color-payment"><strong>Designar Administrador</strong></div>
      <!--begin::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
	    <div class="row ">
                            <div class="col-4">
                              <!--begin::Label-->                                                  
                              <Field
                                  name="activo"
                                  class="form-select mb-2"
                                  as="select"
                                  placeholder="Seleccione"
                                  v-model="convenioDetails.rutAdministrador"
                                  @change="onChangeUsuario($event)"
                                  >
                                  <option value="" disabled>Seleccione un Usuario</option>
                                  <option 
                                    v-for="unUsuario in allUsuarios" 
                                    :key="unUsuario.rutUsuario" 
                                    :value="unUsuario.rutUsuario" >{{ unUsuario.nombres + '' + unUsuario.apellidos  }}                                  
                                  </option>
                              </Field>   
                            </div>     
                            <div class="col-8">
                              <Prime-Button
                                    icon="pi pi-save" 
                                    id="kt_account_edificio_details_submit"                                                      
                                    @click="asociarUsuarioAdministrador"
                              >                                  
                              </Prime-Button>
                              <Prime-Button
                              class="ms-2"
                                    icon="pi pi-user-plus"                                   
                                    id="kt_account_edificio_details_submit"
                                    @click="crearUsuarioDialog = true"                
                         
                                    >                            
                              </Prime-Button>
                            </div>                       
      </div>
	</div>
  <div>
    <div class="d-flex justify-content-end">
      <router-link
            class="btn btn-primary pi pi-arrow-left"
            :to="{name:'apps-convenio-edit', params : {id :id} }"
          >    
      </router-link>
      <router-link
            class="btn btn-primary pi pi-arrow-right ms-2"
            :to="{name:'apps-convenio-edificio-listing', params : {id :id} }"
          >    
      </router-link>
    </div>
  </div>

  <Dialog v-model:visible="crearUsuarioDialog" :style="{ width: '65vw' }" header="Crear Usuario" :modal="true">
      <div class="d-flex flex-column flex-xl-row">
        <div>
          <Form
                      id="kt_account_edificio_details_form"
                      class="form d-flex flex-column flex-lg-row"
                      novalidate="novalidate"
                      @submit="saveChanges1()"
                      :validation-schema="usuariosValidator"
                    >
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
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <!-- <div class="col-4">
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
                            <div class="col-4">                    
                              <label class="required form-label">Confirmar Clave</label>                   
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
                            </div>        -->
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
                <button
                  type="submit"
                  id="kt_account_edificio_details_submit"
                  ref="submitButton1"
                  class="btn btn-primary"
                  >
                  <span class="indicator-label">Asociar Usuario</span>
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
      </div>
    <Toast />
  </Dialog>
</div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useUsuarioStore } from "@/stores/usuario";
import { useConvenioStore } from "@/stores/convenio";
import type { IConvenio } from "@/stores/convenio";
import type { IUsuario } from "@/stores/usuario";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
import { number } from "yup/lib/locale";
moment.locale("es");
import Dialog from 'primevue/dialog';
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';

export default defineComponent({
  name: "usuario-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor,
    Dialog,
    Toast
  },
  
  setup() {
    const toast = useToast();
    const router = useRouter();
    const store = useUsuarioStore();
    const storeConvenio = useConvenioStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const crearUsuarioDialog = ref(false);
    const usuariosValidator = Yup.object().shape({
      rutUsuario: Yup.string().required("Es obligatorio").label("rutUsuario"),
          //  codigoRol: Yup.string().required("Es obligatorio").label("Codigo Rol"),      
    });

    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        
        store.createUsuario(usuarioDetails.value)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            obtenerUsuarios();
            toast.add({ severity: 'info', summary: 'Info', detail: 'Usuario Creado', life: 3000 });
            setTimeout(() => {
              crearUsuarioDialog.value = false;
              }, 2000);
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

    const route = useRoute();
    const id = route.params.id;
    const rutAdministradorConvenio = ref<number>(0)

    onMounted(() => {     
      obtenerUsuarios();
      obtenerConvenio(id);
    });

    const obtenerUsuarios = () =>{
      store
        .getUsuariosAdministradorConvenio()
        .then(() => {
          loading = ref(false);      
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

    const allUsuarios = computed(() => {
      return store.allUsuarios;
    });

    
    const obtenerConvenio = (id) =>{
      storeConvenio
        .getConvenio(id)
        .then(() => {
          loading = ref(false);
          convenioDetails.value = storeConvenio.currentConvenio;      
          rutAdministradorConvenio.value = convenioDetails.value.rutAdministrador;
        })
        .catch(() => {
          const [error] = Object.values(storeConvenio.convenioErrors);
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
			codigoPais : 'CL',
			pais : 'CHILE',
			codigoRol : store.currentUsuario.codigoRol,
			nombres : store.currentUsuario.nombres,
			apellidos : store.currentUsuario.apellidos,
			email : store.currentUsuario.email,
			telefono : store.currentUsuario.telefono,
			clave : store.currentUsuario.clave,
			ultimaClave : store.currentUsuario.ultimaClave,
			debeCambiarClave : store.currentUsuario.debeCambiarClave,
			fechaCreacion : store.currentUsuario.fechaCreacion,
			fechaActualizacion : store.currentUsuario.fechaActualizacion,
			activo : store.currentUsuario.activo,
      confirmarClave : store.currentUsuario.confirmarClave,
      codigoEdificio :  store.currentUsuario.codigoEdificio
  });

  const  onChangeUsuario = (event)=> {
            console.log(event.target.value)
            rutAdministradorConvenio.value = event.target.value;
  }  

  const crearUsuarioModal = () => {        
        crearUsuarioDialog.value = true;
    };

  const asociarUsuarioAdministrador = () => {
    
    let formData = new FormData();
        formData.append("convenio", JSON.stringify({}));      
    storeConvenio.asociarUsuarioAdministrador(id as number, rutAdministradorConvenio.value,formData)
          .then(() => {
            loading = ref(false);
          //  submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Convenio se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-convenio-edificio-listing", params: { id: id }, });
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

      
  const convenioDetails = ref<IConvenio>({
      rutRazonSocial : storeConvenio.currentConvenio.rutRazonSocial,
			rutRazonSocialDv : storeConvenio.currentConvenio.rutRazonSocialDv,
			nombrerazonSocial : storeConvenio.currentConvenio.nombrerazonSocial,
			nombreAdministradora : storeConvenio.currentConvenio.nombreAdministradora,
			direccion : storeConvenio.currentConvenio.direccion,
			comuna : storeConvenio.currentConvenio.comuna,
			region : storeConvenio.currentConvenio.region,
			representanteLegal : storeConvenio.currentConvenio.representanteLegal,
			rutRepresentanteLegal : storeConvenio.currentConvenio.rutRepresentanteLegal,
			rutRepresentanteLegalDv : storeConvenio.currentConvenio.rutRepresentanteLegalDv,
			correoContacto : storeConvenio.currentConvenio.correoContacto,
			vendedorId : storeConvenio.currentConvenio.vendedorId,
			porcentajeComision : storeConvenio.currentConvenio.porcentajeComision,
      rutAdministrador :storeConvenio.currentConvenio.rutAdministrador,
      minimoGarantizadoComision: storeConvenio.currentConvenio.minimoGarantizadoComision
    
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

    let loading = ref(true);
    return {id,calculateDV,calculaDvUsuario,
      crearUsuarioModal,
      crearUsuarioDialog,
      convenioDetails,
      obtenerConvenio,
      asociarUsuarioAdministrador,
      onChangeUsuario,
      obtenerUsuarios,allUsuarios,
      submitButton1,
      saveChanges1,
      usuarioDetails,
      usuariosValidator
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

