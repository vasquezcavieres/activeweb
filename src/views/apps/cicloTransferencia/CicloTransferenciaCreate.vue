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
                        <!--begin::Card header-->
                        <div class="card-header">
                          <div class="card-title">
                            <h2>General</h2>
                          </div>
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                                                    
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Creado Por</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="150"
                                  name="creadoPor"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Creado Por"
                                  v-model="cicloFacturacionDetails2.creadoPor"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="creadoPor" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Creado Por
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Fecha Creacion</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="cicloFacturacionDetails2.fechaCreacion" :showIcon="true"/>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="fechaCreacion" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Fecha Creacion
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Dia Facturacion</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="10"
                                  name="diaFacturacion"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Dia Facturacion"
                                  v-model="cicloFacturacionDetails2.diaFacturacion"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="diaFacturacion" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Dia Facturacion
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Actualizado Por</label
                            >
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
                                  v-model="cicloFacturacionDetails2.actualizadoPor"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="actualizadoPor" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Actualizado Por
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Fecha Actualizacion</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="cicloFacturacionDetails2.fechaActualizacion" :showIcon="true"/>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="fechaActualizacion" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Fecha Actualizacion
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                             
                         
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
import { useCicloFacturacionStore } from "@/stores/cicloTransferencia";
import type { ICicloFacturacion } from "@/stores/cicloTransferencia";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import type {ImagenArchivo} from '@/stores/types/ImagenArchivo';
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "cicloFacturacion-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor

  },
  
  setup() {
    const router = useRouter();
    const store = useCicloFacturacionStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const imagen_principal = ref<ImagenArchivo>();
    const cicloFacturacionsValidator = Yup.object().shape({
                creadoPor: Yup.string().required("Es obligatorio").label("Creado Por"),
      
    });

    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        let formData = new FormData();
        formData.append("file", imagen_principal.value?.archivo);
        formData.append("cicloFacturacion", JSON.stringify(cicloFacturacionDetails.value));      
        
        store.createCicloFacturacion(formData)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "CicloFacturacion se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-cicloFacturacion-listing" });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.cicloFacturacionErrors);
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
   
    const changeImagenPrincipal = (image)=>{
		imagen_principal.value = image;
	};
    const route = useRoute();
    const id = route.params.id;
    onMounted(() => {     
    //  obtenerCicloFacturacion(id);
    });

    const obtenerCicloFacturacion = (id) =>{
      store
        .getCicloFacturacion(id)
        .then(() => {
          loading = ref(false);
        //  cicloFacturacionDetails.value = store.currentCicloFacturacion;
          //imagen_principal.value = {archivo:null,contenido:cicloFacturacionDetails.value.imagen};
          //cicloFacturacionDetails.value.fechaInicio =  moment(store.currentCicloFacturacion.fechaInicio, "YYYYMMDD hh:mm:ss").toDate();
          //cicloFacturacionDetails.value.fechaTermino =  moment(store.currentCicloFacturacion.fechaTermino, "YYYYMMDD hh:mm:ss").toDate();
        })
        .catch(() => {
          const [error] = Object.values(store.cicloFacturacionErrors);
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
    
    const cicloFacturacionDetails2 = ref<ICicloFacturacion>({
       			creadoPor : store.currentCicloFacturacion.creadoPor,
			fechaCreacion : store.currentCicloFacturacion.fechaCreacion,
			diaFacturacion : store.currentCicloFacturacion.diaFacturacion,
			actualizadoPor : store.currentCicloFacturacion.actualizadoPor,
			fechaActualizacion : store.currentCicloFacturacion.fechaActualizacion,
    
  });

    let loading = ref(true);
    return {
      submitButton1,
      saveChanges1,
      cicloFacturacionDetails2,
      cicloFacturacionsValidator,
      changeImagenPrincipal,
      imagen_principal
    };
  },
});


</script>

	
	export default {
	  state,
	  actions,
	  mutations
	};

