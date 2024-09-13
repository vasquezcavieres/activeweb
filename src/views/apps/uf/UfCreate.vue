





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
                      :validation-schema="ufsValidator"
                    >
            <!--begin::Main column-->
            <div class="d-flex flex-column flex-row-fluid gap-12 gap-lg-10">
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
                            <div class="col-md-4">
                            <!--begin::Label-->
                            <div>
                              <label class="required form-label">Fecha Uf</label>  
                            </div>                            
                            <!--end::Label-->
                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="ufDetails.fechaUf" :showIcon="true"/>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="fechaUf" />
                                  </div>
                                </div>
                                <!--end::Input-->
                          </div>
                          <div class="col-md-4">
                            <!--begin::Label-->
                            <label class="required form-label">Valor</label>
                            <!--end::Label-->
                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="18"
                                  name="valor"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Valor"
                                  v-model="ufDetails.valor"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="valor" />
                                  </div>
                                </div>
                                <!--end::Input-->
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
                  :to="{name:'apps-uf-listing'}"
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
import { useUfStore } from "@/stores/uf";
import type { IUf } from "@/stores/uf";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "uf-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    Editor

  },
  
  setup() {
    const router = useRouter();
    const store = useUfStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const ufsValidator = Yup.object().shape({
      valor: Yup.number().required("Es obligadorio")     
    });

    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        
        store.createUf(ufDetails.value)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Uf se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-uf-listing" });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.ufErrors);
            Swal.fire({
                text: store.ufErrors,
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
    onMounted(() => {     
      ufDetails.value.fechaUf =  moment().toDate();
    });


    
    const ufDetails = ref<IUf>({
      fechaUf : store.currentUf.fechaUf,
			valor : store.currentUf.valor,
    
  });

    let loading = ref(true);
    return {
      submitButton1,
      saveChanges1,
      ufDetails,
      ufsValidator,
    };
  },
});


</script>

	
	export default {
	  state,
	  actions,
	  mutations
	};

