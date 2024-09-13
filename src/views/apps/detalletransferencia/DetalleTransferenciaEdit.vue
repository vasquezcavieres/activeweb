





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
                      :validation-schema="detalletransferenciasValidator"
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
					            :class="detalletransferenciaDetails.activo?'bg-success':'bg-danger'"
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
                    v-model="detalletransferenciaDetails.activo"
                    >
                    <option :value="true">
                      Vigente
                    </option>
                    <option :value="false">Inactivo</option>
                </Field>
                  <!--end::Select2-->
                  <!--begin::Description-->
                  <div class="text-muted fs-7">
                    Seleccione el estado del detalletransferencia.
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
                  v-model="detalletransferenciaDetails.categoriaId"
                  @change="onChange($event)"
                >
                <option v-for="categoria in categorias" :key="categoria.categoriaId" :value="categoria.categoriaId">{{ categoria.titulo }}</option>
                </Field>
                  <!--end::Select2-->
                  <!--begin::Description-->
                  <div class="text-muted fs-7">
                    Clasificar detalletransferencia es una gran idea
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
                                    name="activo"
                                    class="form-select mb-2"
                                    as="select"
                                    placeholder="Seleccione"
                                    v-model="detalletransferenciaDetails.transferenciaId"
                                    >
                                    <option :value="true">
                                      Related
                                    </option>
                                    <option :value="false">Inactivo</option>
                                </Field>
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
                              >Rut Razon Social</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="10"
                                  name="rutRazonSocial"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Rut Razon Social"
                                  v-model="detalletransferenciaDetails.rutRazonSocial"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="rutRazonSocial" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Rut Razon Social
                                </div>
                                <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Pago Id</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="500"
                              name="pagoId"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Pago Id"
                              v-model="detalletransferenciaDetails.pagoId"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="pagoId" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Pago Id
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Numero Cuenta</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="10"
                                  name="numeroCuenta"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Numero Cuenta"
                                  v-model="detalletransferenciaDetails.numeroCuenta"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="numeroCuenta" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Numero Cuenta
                                </div>
                                <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Tipo Cuenta</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="50"
                              name="tipoCuenta"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Tipo Cuenta"
                              v-model="detalletransferenciaDetails.tipoCuenta"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="tipoCuenta" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Tipo Cuenta
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Banco</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="50"
                              name="banco"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Banco"
                              v-model="detalletransferenciaDetails.banco"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="banco" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Banco
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Monto Transferencia</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="18"
                                  name="montoTransferencia"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Monto Transferencia"
                                  v-model="detalletransferenciaDetails.montoTransferencia"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="montoTransferencia" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Monto Transferencia
                                </div>
                                <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Email Notificacion</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="150"
                              name="emailNotificacion"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Email Notificacion"
                              v-model="detalletransferenciaDetails.emailNotificacion"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="emailNotificacion" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Email Notificacion
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Estado</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="50"
                              name="estado"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Estado"
                              v-model="detalletransferenciaDetails.estado"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="estado" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Estado
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
                                <Prime-Calendar id="dateformat" v-model="detalletransferenciaDetails.fechaTransferencia" :showIcon="true"/>
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
                                  maxlength="18"
                                  name="costoComision"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Costo Comision"
                                  v-model="detalletransferenciaDetails.costoComision"
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
                  :to="{name:'apps-detalletransferencia-listing'}"
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
import { useDetalleTransferenciaStore } from "@/stores/detalleTransferencia";
import type { IDetalleTransferencia } from "@/stores/detalleTransferencia";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import type {ImagenArchivo} from '@/stores/types/ImagenArchivo';
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "detalleTransferencia-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor

  },
  
  setup() {
    const router = useRouter();
    const store = useDetalleTransferenciaStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const imagen_principal = ref<ImagenArchivo>();
    const detalleTransferenciasValidator = Yup.object().shape({
                transferenciaId: Yup.string().required("Es obligatorio").label("Transferencia Id"),
            rutRazonSocial: Yup.string().required("Es obligatorio").label("Rut Razon Social"),
            pagoId: Yup.string().required("Es obligatorio").label("Pago Id"),
      
    });

    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        let formData = new FormData();
        formData.append("file", imagen_principal.value?.archivo);
        formData.append("detalleTransferencia", JSON.stringify(detalleTransferenciaDetails.value));      
        
        store.updateDetalleTransferencia(formData)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "DetalleTransferencia se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-detalleTransferencia-listing" });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.detalleTransferenciaErrors);
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
      obtenerDetalleTransferencia(id);
    });

    const obtenerDetalleTransferencia = (id) =>{
      store
        .getDetalleTransferencia(id)
        .then(() => {
          loading = ref(false);
          detalleTransferenciaDetails.value = store.currentDetalleTransferencia;
          imagen_principal.value = {archivo:null,contenido:detalleTransferenciaDetails.value.imagen};
          //detalleTransferenciaDetails.value.fechaInicio =  moment(store.currentDetalleTransferencia.fechaInicio, "YYYYMMDD hh:mm:ss").toDate();
          //detalleTransferenciaDetails.value.fechaTermino =  moment(store.currentDetalleTransferencia.fechaTermino, "YYYYMMDD hh:mm:ss").toDate();
        })
        .catch(() => {
          const [error] = Object.values(store.detalleTransferenciaErrors);
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
    
    const detalleTransferenciaDetails = ref<IDetalleTransferencia>({
       			transferenciaId : store.currentDetalleTransferencia.transferenciaId,
			rutRazonSocial : store.currentDetalleTransferencia.rutRazonSocial,
			pagoId : store.currentDetalleTransferencia.pagoId,
			numeroCuenta : store.currentDetalleTransferencia.numeroCuenta,
			tipoCuenta : store.currentDetalleTransferencia.tipoCuenta,
			banco : store.currentDetalleTransferencia.banco,
			montoTransferencia : store.currentDetalleTransferencia.montoTransferencia,
			emailNotificacion : store.currentDetalleTransferencia.emailNotificacion,
			estado : store.currentDetalleTransferencia.estado,
			fechaTransferencia : store.currentDetalleTransferencia.fechaTransferencia,
			costoComision : store.currentDetalleTransferencia.costoComision,
    
  });

    let loading = ref(true);
    return {
      submitButton1,
      saveChanges1,
      detalleTransferenciaDetails,
      detalleTransferenciasValidator,
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

