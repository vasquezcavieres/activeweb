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
            :validation-schema="conveniosValidator"
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
                        <div class="card-body pt-0">
                          <div class="row mt-5">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Nombre Administradora</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="500"
                                    name="nombreAdministradora"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Nombre Administradora"
                                    v-model="convenioDetails.nombreAdministradora"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="nombreAdministradora" />
                                    </div>
                                  </div>
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Nombre Administradora
                                  </div> -->
                                  <!--end::Description-->  
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Razón Social</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="500"
                                    name="nombrerazonSocial"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Nombrerazon Social"
                                    v-model="convenioDetails.nombrerazonSocial"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="nombrerazonSocial" />
                                    </div>
                                  </div>
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Nombrerazon Social
                                  </div> -->
                                  <!--end::Description-->   
                            </div>
                            <!--end::Input group-->                   
                            <!--begin::Input group-->
                            <div class="col-4">
                                <!--begin::Label-->
                                <div>
                                  <label class="required form-label">Rut Razón Social</label>
                                </div>                                
                                <!--end::Label-->                            
                                <!--begin::Input-->
                                    <Field
                                      type="number"
                                      maxlength="10"
                                      name="rutRazonSocial"
                                      class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 rut"
                                      placeholder="Rut Razon Social"
                                      v-model="convenioDetails.rutRazonSocial"
                                      v-on:keyup="calculaDvConvenio(convenioDetails.rutRazonSocial)"
                                    />
                                    <Field
                                    type="text"
                                    maxlength="1"
                                    name="rutRazonSocialDv"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 rutDv"
                                    placeholder=""
                                    v-model="convenioDetails.rutRazonSocialDv"
                                    readonly
                                  />
                                    <div class="fv-plugins-message-container">
                                      <div class="fv-help-block">
                                        <ErrorMessage name="rutRazonSocial" />
                                      </div>
                                    </div>
                                    <!--end::Input-->
                                    <!--begin::Description-->
                                    <!-- <div class="text-muted fs-7">
                                      Ingrese Rut Razon Social
                                    </div> -->
                                    <!--end::Description-->  
                            </div>
                            <!--end::Input group-->
                          </div>  
                          
                          <div class="row mt-5">
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
                                    v-model="convenioDetails.direccion"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="direccion" />
                                    </div>
                                  </div>
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Direccion
                                  </div> -->
                                  <!--end::Description-->
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
                                    maxlength="100"
                                    name="comuna"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Comuna"
                                    v-model="convenioDetails.comuna"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="comuna" />
                                    </div>
                                  </div>
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Comuna
                                  </div> -->
                                  <!--end::Description-->     
                            </div>
                            <!--end::Input group-->         
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Región</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="100"
                                    name="region"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Region"
                                    v-model="convenioDetails.region"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="region" />
                                    </div>
                                  </div>
                            </div>
                            <!--end::Input group-->       
                          </div>
                          <div class="row mt-5">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Representante Legal</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="100"
                                    name="representanteLegal"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Representante Legal"
                                    v-model="convenioDetails.representanteLegal"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="representanteLegal" />
                                    </div>
                                  </div>
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Representante Legal
                                  </div> -->
                                  <!--end::Description-->
                            </div>
                            <!--end::Input group-->     
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <div>
                                <label class="required form-label">Rut Representante Legal</label>
                              </div>                              
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="number"
                                    maxlength="10"
                                    name="rutRepresentanteLegal"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 rut"
                                    placeholder="Rut Representante Legal"
                                    v-model="convenioDetails.rutRepresentanteLegal"
                                    v-on:keyup="calculaDvRepresentanteLegal(convenioDetails.rutRepresentanteLegal)"
                                  />
                                  <Field
                                  type="text"
                                  maxlength="1"
                                  name="rutRepresentanteLegalDv"
                                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 rutDv"
                                  placeholder=""
                                  v-model="convenioDetails.rutRepresentanteLegalDv"
                                  readonly
                                />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="rutRepresentanteLegal" />
                                    </div>
                                  </div>
                            </div>
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
                                    v-model="convenioDetails.correoContacto"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="correoContacto" />
                                    </div>
                                  </div>
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Correo Contacto
                                  </div> -->
                                  <!--end::Description-->
                            </div>
                            
                          </div>                            
                          <div class="row mt-5">                                             
                            <!--begin::Input group-->
                            <div class="col-4">             
                              <label class="required form-label">Giro</label>                        
                                  <Field
                                    type="number"
                                    maxlength="10"
                                    name="giro"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Giro"
                                    v-model="convenioDetails.giro"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="giro" />
                                    </div>
                                  </div>         
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
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
                                    v-model="convenioDetails.porcentajeComision"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="porcentajeComision" />
                                    </div>
                                  </div>                            
                            </div>
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Mínimo Garantizado (valor en UF)</label>
                              <Field
                                    type="number"
                                    maxlength="53"
                                    name="minimoGarantizadoComision"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Mínimo Garantizado (valor en UF)"
                                    v-model="convenioDetails.minimoGarantizadoComision"
                                  />
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
                  :to="{name:'apps-convenio-listing'}"
                  id="kt_ecommerce_add_product_cancel"
                  class="btn btn-light me-5">Cancelar</router-link>
                <!--end::Button-->
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
import { useConvenioStore } from "@/stores/convenio";
import type { IConvenio } from "@/stores/convenio";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "convenio-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor
  },
  
  setup() {
    const router = useRouter();
    const store = useConvenioStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const conveniosValidator = Yup.object().shape({
      nombreAdministradora:Yup.string().required("Es obligatorio").label("Nombre Administradora"),   
      nombrerazonSocial :Yup.string().required("Es obligatorio").label("Razón Social"),      
      rutRazonSocial :Yup.string().required("Es obligatorio").label("Rut Razón Social"),      
      direccion: Yup.string().required("Es obligatorio").label("Dirección"),      
      comuna: Yup.string().required("Es obligatorio").label("Comuna"),      
      region: Yup.string().required("Es obligatorio").label("Región"),      
      representanteLegal: Yup.string().required("Es obligatorio").label("Representante Legal"),      
      rutRepresentanteLegal: Yup.string().required("Es obligatorio").label("Rut Representante Legal"),      
      correoContacto: Yup.string().required("Es obligatorio").label("Correo Contacto"),  
      giro: Yup.string().required("Es obligatorio").label("Giro"), 
    });

    const route = useRoute();
    const id = route.params.id;
    onMounted(() => {     
      convenioDetails.value = {} as IConvenio;
    });   

    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");

        store.createConvenio(convenioDetails.value)
          .then(() => {
           // convenioDetails.value = {} as IConvenio;
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Convenio se ha creado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              let id =convenioDetails.value.rutRazonSocial;
              convenioDetails.value = {} as IConvenio;
              router.push({ name: "apps-convenio-admin-create", params: { id: id } });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.convenioErrors);
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
    
    const convenioDetails = ref<IConvenio>({
      rutRazonSocial : store.currentConvenio.rutRazonSocial,
			rutRazonSocialDv : store.currentConvenio.rutRazonSocialDv,
			nombrerazonSocial : store.currentConvenio.nombrerazonSocial,
			nombreAdministradora : store.currentConvenio.nombreAdministradora,
			direccion : store.currentConvenio.direccion,
			comuna : store.currentConvenio.comuna,
			region : store.currentConvenio.region,
			representanteLegal : store.currentConvenio.representanteLegal,
			rutRepresentanteLegal : store.currentConvenio.rutRepresentanteLegal,
			rutRepresentanteLegalDv : store.currentConvenio.rutRepresentanteLegalDv,
			vendedorId : store.currentConvenio.vendedorId,
			porcentajeComision : store.currentConvenio.porcentajeComision,
      rutAdministrador :store.currentConvenio.rutAdministrador,
      minimoGarantizadoComision: store.currentConvenio.minimoGarantizadoComision    ,
      correoContacto :store.currentConvenio.correoContacto,
      giro :store.currentConvenio.giro,
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

const calculaDvConvenio = (rut) => {
    var dv = calculateDV(rut);
    convenioDetails.value.rutRazonSocialDv = dv;
  }

  const calculaDvRepresentanteLegal = (rut) => {
    var dv = calculateDV(rut);
    convenioDetails.value.rutRepresentanteLegalDv = dv;
  }


    return {calculateDV,calculaDvConvenio,calculaDvRepresentanteLegal,
      submitButton1,
      saveChanges1,
      convenioDetails,
      conveniosValidator
    };
  },
});
</script>

<style>
#rutRazonSocial,
.rut {
  width: 60%;
  float: left;
  margin-right: 6px;
}

#rutRazonSocialDv,
.rutDv {
  width: 70px;
  text-align: center;
}
</style>
<style scoped>
::v-deep(b) {
    display: block;
}

::v-deep(.p-card-body) {
    padding: 2rem;
}
</style>

	
	export default {
	  state,
	  actions,
	  mutations
	};

