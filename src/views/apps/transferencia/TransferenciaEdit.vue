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
                      :validation-schema="transferenciasValidator"
                    >
            <!--begin::Aside column-->
            <div
              class="
                d-flex
                flex-column
                gap-7 gap-lg-10
                w-lg-300px
                mb-7
                me-lg-10
              "
            >
              <!--begin::Thumbnail settings-->
              <div class="card card-flush py-4">
                <!--begin::Card header-->
                <div class="card-header">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2>Imagen Principal</h2>
                  </div>
                  <!--end::Card title-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body text-center pt-0">
                  <MixedWidgetImage v-bind:current_photo="imagen_principal" @inFileChange="changeImagenPrincipal"></MixedWidgetImage> 
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Thumbnail settings-->
              <!--begin::Status-->
              <div class="card card-flush py-4">
                <!--begin::Card header-->
                <div class="card-header">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2>Status</h2>
                  </div>
                  <!--end::Card title-->
                  <!--begin::Card toolbar-->
                  <div class="card-toolbar">
                    <div
                      class="rounded-circle w-15px h-15px"
					            :class="transferenciaDetails.activo?'bg-success':'bg-danger'"
                      id="kt_status"
                    ></div>
                  </div>
                  <!--begin::Card toolbar-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body pt-0">
                  <!--begin::Select2-->
                    <Field
                    name="activo"
                    class="form-select mb-2"
                    as="select"
                    placeholder="Seleccione"
                    v-model="transferenciaDetails.activo"
                    >
                    <option :value="true">
                      Vigente
                    </option>
                    <option :value="false">Inactivo</option>
                </Field>
                  <!--end::Select2-->
                  <!--begin::Description-->
                  <div class="text-muted fs-7">
                    Seleccione el estado del transferencia.
                  </div>
                  <!--end::Description-->
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Status-->

              <!--begin::Template settings-->
              <div class="card card-flush py-4">
                <!--begin::Card header-->
                <div class="card-header">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2>Categoría</h2>
                  </div>
                  <!--end::Card title-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body pt-0">
                  <!--begin::Select store template-->
                  <label
                    for="kt_ecommerce_add_product_store_template"
                    class="form-label"
                    >Seleccione</label
                  >
                  <!--end::Select store template-->
                  <!--begin::Select2-->
                  <Field
                  name="idCategoria"
                  class="form-select mb-2"
                  as="select"
                  placeholder="Seleccione"
                  v-model="transferenciaDetails.categoriaId"
                  @change="onChange($event)"
                >
                <option v-for="categoria in categorias" :key="categoria.categoriaId" :value="categoria.categoriaId">{{ categoria.titulo }}</option>
                </Field>
                  <!--end::Select2-->
                  <!--begin::Description-->
                  <div class="text-muted fs-7">
                    Clasificar transferencia es una gran idea
                  </div>
                  <!--end::Description-->
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Template settings-->
            </div>
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
                              >Transferencia Id</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="10"
                                  name="transferenciaId"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Transferencia Id"
                                  v-model="transferenciaDetails.transferenciaId"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="transferenciaId" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Transferencia Id
                                </div>
                                <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Total Transferencia</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="10"
                                  name="totalTransferencia"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Total Transferencia"
                                  v-model="transferenciaDetails.totalTransferencia"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="totalTransferencia" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Total Transferencia
                                </div>
                                <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Costo Comision</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="10"
                                  name="costoComision"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Costo Comision"
                                  v-model="transferenciaDetails.costoComision"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="costoComision" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Costo Comision
                                </div>
                                <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Fecha Transferencia</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="transferenciaDetails.fechaTransferencia" :showIcon="true"/>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="fechaTransferencia" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Fecha Transferencia
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
                <router-link
                  :to="{name:'apps-transferencia-listing'}"
                  id="kt_ecommerce_add_product_cancel"
                  class="btn btn-light me-5"
                  >Cancelar</router-link>
                <!--end::Button-->

                <!--begin::Button-->
                <button
                  type="submit"
                  id="kt_account_edificio_details_submit"
                  ref="submitButton1"
                  class="btn btn-primary"
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
import { useTransferenciaStore } from "@/stores/transferencia";
import type { ITransferencia } from "@/stores/transferencia";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import type {ImagenArchivo} from '@/stores/types/ImagenArchivo';
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "transferencia-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor

  },
  
  setup() {
    const router = useRouter();
    const store = useTransferenciaStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const imagen_principal = ref<ImagenArchivo>();
    const transferenciasValidator = Yup.object().shape({
                transferenciaId: Yup.string().required("Es obligatorio").label("Transferencia Id"),
      
    });

    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        let formData = new FormData();
        formData.append("file", imagen_principal.value?.archivo);
        formData.append("transferencia", JSON.stringify(transferenciaDetails.value));      
        
        store.updateTransferencia(formData)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Transferencia se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-transferencia-listing" });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.transferenciaErrors);
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
      obtenerTransferencia(id);
    });

    const obtenerTransferencia = (id) =>{
      store
        .getTransferencia(id)
        .then(() => {
          loading = ref(false);
          transferenciaDetails.value = store.currentTransferencia;
          imagen_principal.value = {archivo:null,contenido:transferenciaDetails.value.imagen};
          //transferenciaDetails.value.fechaInicio =  moment(store.currentTransferencia.fechaInicio, "YYYYMMDD hh:mm:ss").toDate();
          //transferenciaDetails.value.fechaTermino =  moment(store.currentTransferencia.fechaTermino, "YYYYMMDD hh:mm:ss").toDate();
        })
        .catch(() => {
          const [error] = Object.values(store.transferenciaErrors);
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
    
    const transferenciaDetails = ref<ITransferencia>({
       			transferenciaId : store.currentTransferencia.transferenciaId,
			totalTransferencia : store.currentTransferencia.totalTransferencia,
			costoComision : store.currentTransferencia.costoComision,
			fechaTransferencia : store.currentTransferencia.fechaTransferencia,
    
  });

    let loading = ref(true);
    return {
      submitButton1,
      saveChanges1,
      transferenciaDetails,
      transferenciasValidator,
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

