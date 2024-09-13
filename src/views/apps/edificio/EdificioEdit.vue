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
                      :validation-schema="edificiosValidator"
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
                          <div class="row mt-5">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Nombre</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="100"
                                    name="nombre"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Nombre"
                                    v-model="edificioDetails.nombre"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="nombre" />
                                    </div>
                                  </div> 
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Código Edificio</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="50"
                                    name="codigoEdificio"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Codigo Edificio"
                                    v-model="edificioDetails.codigoEdificio"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="codigoEdificio" />
                                    </div>
                                  </div>
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Código Área</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="50"
                                    name="codigoArea"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Codigo Area"
                                    v-model="edificioDetails.codigoArea"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="codigoArea" />
                                    </div>
                                  </div>  
                            </div>
                            <!--end::Input group-->  
                          </div>  
                          <div class="row mt-5">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="form-label">Código País</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="4"
                                    name="codigoPais"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Codigo Pais"
                                    v-model="edificioDetails.codigoPais"
                                    readonly
                                  />
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="form-label">País</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="50"
                                    name="pais"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Pais"
                                    v-model="edificioDetails.pais"
                                    readonly
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="pais" />
                                    </div>
                                  </div>                        
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Dirección</label>
                              <!--end::Label-->             
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="100"
                                    name="direccion"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Direccion"
                                    v-model="edificioDetails.direccion"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="direccion" />
                                    </div>
                                  </div>
                            </div>
                            <!--end::Input group-->
                          </div>       
                          <div class="row mt-5">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Ciudad</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="50"
                                    name="ciudad"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Ciudad"
                                    v-model="edificioDetails.ciudad"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="ciudad" />
                                    </div>
                                  </div>
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Comuna</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="50"
                                    name="comuna"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Comuna"
                                    v-model="edificioDetails.comuna"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="comuna" />
                                    </div>
                                  </div>
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Centro Costo</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="50"
                                    name="centroCosto"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Centro Costo"
                                    v-model="edificioDetails.centroCosto"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="centroCosto" />
                                    </div>
                                  </div>
                            </div>
                            <!--end::Input group-->
                          </div> 
                          <div class="row mt-5">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Máquinas Instaladas</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="number"
                                    maxlength="10"
                                    name="maquinasInstaladas"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Máquinas Instaladas"
                                    v-model="edificioDetails.maquinasInstaladas"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="maquinasInstaladas" />
                                    </div>
                                  </div> 
                            </div>
                            <div class="col-4">             
                              <label class="required form-label">Giro</label>                        
                                  <Field
                                    type="text"                                    
                                    name="giro"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Giro"
                                    v-model="edificioDetails.giro"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="giro" />
                                    </div>
                                  </div>         
                            </div> 
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">% Comisión</label>
                              <!--end::Label-->
                                                              <!--begin::Input-->
                                  <Field
                                    type="number"
                                    maxlength="10"
                                    name="porcentajeComision"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Porcentaje Comision"
                                    v-model="edificioDetails.porcentajeComision"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="porcentajeComision" />
                                    </div>
                                  </div>                            
                            </div>
                          </div>   
                          <div class="row mt-5">
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Mínimo Garantizado (valor en UF)</label>
                              <Field
                                    type="number"
                                    maxlength="53"
                                    name="minimoGarantizadoComision"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Mínimo Garantizado (valor en UF)"
                                    v-model="edificioDetails.minimoGarantizadoComision"
                                  />
                            </div>
                          </div>

                          <div class="row mt-5">
                            <div class="card-header">
                          <div class="card-title">
                            <h2 class="color-payment">Datos Bancarios</h2>
                          </div>
                        </div>
                          </div>
                          <div class="row mt-5">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Numero Cuenta</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="number"
                                    maxlength="10"
                                    name="numeroCuenta"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Numero Cuenta"
                                    v-model="edificioDetails.numeroCuenta"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="numeroCuenta" />
                                    </div>
                                  </div>
                              </div>
                              <!--end::Input group-->  
                              <!--begin::Input group-->
                              <div class="col-4">
                                <!--begin::Label-->
                                <label class="required form-label">Tipo Cuenta</label>
                                <!--end::Label-->                                
                                <Field v-slot="{ value }" 
                                  name="tipoCuenta" 
                                  as="select"
                                  class="form-control "
                                  v-model="edificioDetails.codigoTipoAbono"
                                  >
                                  <option value="" disabled>Seleccione Tipo de cuenta</option>
                                  <option v-for="tipoCuenta in allTipoAbonos" :key="tipoCuenta.codigoTipoAbono.toString()" :value="tipoCuenta.codigoTipoAbono.toString()">{{ tipoCuenta.nombre }}</option>
                                </Field>

                                <!--begin::Input-->
                                    <!-- <Field
                                      type="text"
                                      maxlength="100"
                                      name="tipoCuenta"
                                      class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                      placeholder="Tipo Cuenta"
                                      v-model="edificioDetails.tipoCuenta"
                                    /> -->
                                    <div class="fv-plugins-message-container">
                                      <div class="fv-help-block">
                                        <ErrorMessage name="tipoCuenta" />
                                      </div>
                                    </div> 
                              </div>
                              <!--end::Input group-->  
                              <!--begin::Input group-->
                              <div class="col-4">
                                <!--begin::Label-->
                                <label class="required form-label">Banco</label>
                                <!--end::Label-->

                                <!-- <Prime-Dropdown v-model="edificioDetails.banco" :options="allBancos"  optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" /> -->

                                <Field v-slot="{ value }" 
                                  name="banco" 
                                  as="select"
                                  class="form-control "
                                  v-model="edificioDetails.codigoBanco"
                                  >
                                  <option value="" disabled>Seleccione un Banco</option>
                                  <option v-for="banco in allBancos" 
                                    :key="banco.codigoBanco.toString()" 
                                    :value="banco.codigoBanco.toString()"                                   
                                    >{{ banco.nombre }}
                                  </option>
                                </Field>
                                    <div class="fv-plugins-message-container">
                                      <div class="fv-help-block">
                                        <ErrorMessage name="banco" />
                                      </div>
                                    </div>
                              </div>
                              <!--end::Input group-->                            
                          </div>    
                          <div class="row mt-5">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Correo Contacto</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="500"
                                    name="correoContacto"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Correo Contacto"
                                    v-model="edificioDetails.correoContacto"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="correoContacto" />
                                    </div>
                                  </div>
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Email Notificación</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="300"
                                    name="emailNotificacion"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Email Notificación"
                                    v-model="edificioDetails.emailNotificacion"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="emailNotificacion" />
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
                <button
                  type="submit"
                  id="kt_account_edificio_details_submit"
                  ref="submitButton1"
                  class="btn btn-primary"
                  >
                  <span class="indicator-label"> Crear </span>
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
import { useEdificioStore } from "@/stores/edificio";
import { useBancoStore } from "@/stores/banco";
import { useTipoAbonoStore } from "@/stores/tipoAbono";
import type { IEdificio } from "@/stores/edificio";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "edificio-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor

  },
  
  setup() {
    const router = useRouter();
    const store = useEdificioStore();
    const bancoStore = useBancoStore();
    const tipoAbonoStore = useTipoAbonoStore();

    const submitButton1 = ref<HTMLElement | null>(null);
    const edificiosValidator = Yup.object().shape({
      codigoEdificio: Yup.string().required("Es obligatorio").label("Codigo Edificio"),
      nombre: Yup.string().required("Es obligatorio").label("Nombre"),
      direccion: Yup.string().required("Es obligatorio").label("Direccion"),
      centroCosto: Yup.string().required("Es obligatorio").label("Centro Costo"),
      tipoCuenta: Yup.string().required("Es obligatorio").label("Tipo Cuenta"),
      banco: Yup.string().required("Es obligatorio").label("Banco"),
      giro: Yup.string().required("Es obligatorio").label("Giro"),
      ciudad: Yup.string().required("Es obligatorio").label("Ciudad"),
      comuna: Yup.string().required("Es obligatorio").label("Comuna"),
      maquinasInstaladas: Yup.string().required("Es obligatorio").label("Maquinas Instaladas"),
      porcentajeComision: Yup.string().required("Es obligatorio").label("Porcentaje Comision"),
      numeroCuenta: Yup.string().required("Es obligatorio").label("Numero Cuenta"),
    });

    const route = useRoute();
    const id = route.params.id;
    onMounted(() => {     
      obtenerEdificio(id);
      buscarBancos();
      buscarTiposAbonos();
      edificioDetails.value = {} as IEdificio;
      edificioDetails.value.codigoPais = 'CL';
      edificioDetails.value.pais = 'CHILE';
      edificioDetails.value.codigoBanco = '504';
    });


    const obtenerEdificio= (id) =>{
      store
        .getEdificio(id)
        .then(() => {
          edificioDetails.value = store.currentEdificio;         
        })
        .catch(() => {
          const [error] = Object.values(store.edificioErrors);
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
    
    const buscarBancos = () => {
      bancoStore.getBancos()
        .then(() => {
          
        })
        .catch(() => {
          const [error] = Object.values(store.edificioErrors);
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
        
    const buscarTiposAbonos = () => {
      tipoAbonoStore.getTipoAbonos()
        .then(() => {
          
        })
        .catch(() => {
          const [error] = Object.values(store.edificioErrors);
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
    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");

        store.updateEdificio(id as string,edificioDetails.value)
          .then(() => {
                  submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Edificio se ha creado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-dashboard" });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.edificioErrors);
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
    
    const edificioDetails = ref<IEdificio>({
      codigoEdificio : store.currentEdificio.codigoEdificio,
			codigoArea : store.currentEdificio.codigoArea,
			nombre : store.currentEdificio.nombre,
			codigoPais : store.currentEdificio.codigoPais,
			pais : store.currentEdificio.pais,
			direccion : store.currentEdificio.direccion,
			ciudad : store.currentEdificio.ciudad,
			comuna : store.currentEdificio.comuna,
			centroCosto : store.currentEdificio.centroCosto,
			rutRazonSocial : store.currentEdificio.rutRazonSocial,
      fechaDesde : store.currentEdificio.fechaDesde,
      fechaHasta : store.currentEdificio.fechaHasta,
      tipoCuenta:store.currentEdificio.tipoCuenta,
      numeroCuenta:store.currentEdificio.numeroCuenta,      
      banco : store.currentEdificio.banco,
      codigoBanco :store.currentEdificio.codigoBanco,
      codigoTipoAbono : store.currentEdificio.codigoTipoAbono, 
      correoContacto :store.currentEdificio.correoContacto,
      emailNotificacion : store.currentEdificio.emailNotificacion,
      maquinasInstaladas : store.currentEdificio.maquinasInstaladas,
      porcentajeComision: store.currentEdificio.porcentajeComision,
  minimoGarantizadoComision: store.currentEdificio.minimoGarantizadoComision,
  giro: store.currentEdificio.giro,

  });

  const allBancos = computed(() => {
      return bancoStore.allBancos;
    });   

    const allTipoAbonos = computed(() => {
      return tipoAbonoStore.allTipoAbonos;
    });   



    return {
      allBancos,
      allTipoAbonos,
      submitButton1,
      saveChanges1,
      edificioDetails,
      edificiosValidator,
      buscarBancos,
      buscarTiposAbonos,
      obtenerEdificio

    };
  },
});


</script>

	
	export default {
	  state,
	  actions,
	  mutations
	};

