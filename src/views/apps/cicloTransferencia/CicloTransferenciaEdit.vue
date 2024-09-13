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
                      :validation-schema="ciclofacturacionsValidator"
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
                            <label class="form-label">Creado Por</label>
                            <!--end::Label-->
                            <!--begin::Input-->
                            <Field
                                    type="text"
                                    maxlength="500"
                                    name="nombreAdministradora"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Nombre Administradora"
                                    v-model="cicloTransferenciaDetails.creadoPor"
                                    disabled
                                  />                          
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="creadoPor" />
                              </div>
                            </div>
                            <!--end::Input-->
                          </div>
                          <!--end::Input group-->                                               
                          <!--begin::Input group-->
                          <div class="col-4">
                            <!--begin::Label-->
                            <div>
                              <label class="form-label">Fecha Creación</label>
                            </div>                            
                            <!--end::Label-->
                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="cicloTransferenciaDetails.fechaCreacion" :showIcon="true" disabled />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="fechaCreacion" />
                                  </div>
                                </div>
                                <!--end::Input-->
                          </div>
                          <!--end::Input group-->                                               
                          <!--begin::Input group-->
                          <div class="col-4">
                            <!--begin::Label-->
                            <div>
                              <label class="required form-label">Dias Transferencia</label>
                            </div>
                            
                            <!--end::Label-->
                            <!--begin::Input-->
                            <MultiSelect v-model="selectedDays" display="chip" :options="days"  placeholder="Seleccione dias" :maxSelectedLabels="3" class="w-full md:w-50rem" />
                                <!-- <Field
                                  type="number"
                                  maxlength="10"
                                  name="diaFacturacion"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Dia Facturacion"
                                  v-model="cicloTransferenciaDetails.diaFacturacion"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="diaFacturacion" />
                                  </div>
                                </div> -->
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Dia Facturacion
                                </div>
                                <!--end::Description-->
                          </div>
                          <!--end::Input group-->
                          </div>
                          <div class="row">
                          <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="form-label">Actualizado Por</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                              <Field
                                type="text"
                                maxlength="150"
                                name="actualizadoPor"
                                class="
                                  form-control form-control-lg form-control-solid
                                  mb-3 mb-lg-0
                                "
                                placeholder="Actualizado Por"
                                v-model="cicloTransferenciaDetails.actualizadoPor"
                                disabled
                              />
                              <div class="fv-plugins-message-container">
                                <div class="fv-help-block">
                                  <ErrorMessage name="actualizadoPor" />
                                </div>
                              </div>
                              <!--end::Input-->
                            </div>
                            <!--end::Input group--> 
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <div>
                                <label class="form-label">Fecha Actualización</label>
                              </div>                            
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Prime-Calendar id="dateformat" v-model="cicloTransferenciaDetails.fechaActualizacion" :showIcon="true" disabled />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="fechaActualizacion" />
                                    </div>
                                  </div>
                                  <!--end::Input-->
                            </div>
                            <!--end::Input group-->                          
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
                  class="btn btn-primary pi pi-arrow-left"
                  :to="{name:'apps-convenio-edificio-listing', params : {id :id} }"
                >    
                </router-link>
                <button
                  type="submit"
                  id="kt_account_edificio_details_submit"
                  ref="submitButton1"
                  class="btn btn-primary ms-2"
                  >
                  <span class="indicator-label"> Guardar Cambios </span>
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
import { useCicloTransferenciaStore } from "@/stores/cicloTransferencia";
import type { ICicloTransferencia } from "@/stores/cicloTransferencia";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import Editor from "primevue/editor";
import MultiSelect from 'primevue/multiselect';
moment.locale("es");

export default defineComponent({
  name: "cicloTransferencia-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    Editor,
    MultiSelect
  },  
  setup() {
    const router = useRouter();
    const store = useCicloTransferenciaStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const cicloTransferenciasValidator = Yup.object().shape({
                //creadoPor: Yup.string().required("Es obligatorio").label("Creado Por"),      
    });

    const selectedDays = ref(null)
    const route = useRoute();
    const id = route.params.id;
    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");       

        cicloTransferenciaDetails.value.diasTrasnferencias =  selectedDays.value;

        let formData = new FormData();       
        formData.append("cicloTransferencia", JSON.stringify(cicloTransferenciaDetails.value));       
                
        store.updateCicloTransferencia(id,formData)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Ciclo Facturación se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-convenio-listing" });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.cicloTransferenciaErrors);
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
   



    onMounted(() => {     
      obtenerCicloTransferencia(id);
    });

    const obtenerCicloTransferencia = (id) =>{
      store
        .getCicloTransferencia(id)
        .then(() => {      
          selectedDays.value =  store.currentCicloTransferencia.diasTrasnferencias;       
          loading = ref(false);
         cicloTransferenciaDetails.value = store.currentCicloTransferencia;      
         cicloTransferenciaDetails.value.fechaCreacion =  moment(store.currentCicloTransferencia.fechaCreacion, "YYYYMMDD hh:mm:ss").toDate();
         cicloTransferenciaDetails.value.fechaActualizacion =  moment(store.currentCicloTransferencia.fechaActualizacion, "YYYYMMDD hh:mm:ss").toDate();
        })
        .catch(() => {
          const [error] = Object.values(store.cicloTransferenciaErrors);
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
    
    const cicloTransferenciaDetails = ref<ICicloTransferencia>({
      codigoConvenio :store.currentCicloTransferencia.codigoConvenio,
      creadoPor :store.currentCicloTransferencia.creadoPor,
			fechaCreacion : store.currentCicloTransferencia.fechaCreacion,
			diasTransferencia :store.currentCicloTransferencia.diasTransferencia,
			actualizadoPor : store.currentCicloTransferencia.actualizadoPor,
			fechaActualizacion : store.currentCicloTransferencia.fechaActualizacion,
      diasTransferencias :store.currentCicloTransferencia.diasTransferencias
    
  });


  const days = ref(["1","2","3","4","10","15","20","25" ]);
    let loading = ref(true);

    return {
      id,
      days,
      selectedDays,
      submitButton1,
      saveChanges1,
      cicloTransferenciaDetails,
      cicloTransferenciasValidator
    };
  },
});


</script>

	
	export default {
	  state,
	  actions,
	  mutations
	};

