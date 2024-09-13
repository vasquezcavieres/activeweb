<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">Edificios Convenio</div>
      <!--begin::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          class="d-flex justify-content-end"
          data-kt-subscription-table-toolbar="base"
        >
          <!--begin::Export-->
          <!-- <button
            @click="exportExcel"
            type="button"
            class="btn btn-light-primary me-3"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Crear
          </button> -->
          <!--end::Export-->
          <button
            @click="asociarEdificio"
            type="button"
            class="btn btn-light-primary me-3"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Asociar Edificio
          </button>

          <!--begin::Add EDIFICIO-->
          <button
            @click="crearEdificio"
            type="button"
            class="btn btn-light-primary me-3"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Crear Edificio
          </button>
          <!--end::Add EDIFICIO-->
           
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <DataTable
        :value="allEdificios"
        :paginator="true"
        :rows="10"
        showGridlines
        dataKey="codigoEdificio"
        :rowHover="true"
        v-model:selection="selectedEdificios"
        v-model:filters="filters1"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        :globalFilterFields="[
          'codigoEdificio','nombre','codigoPais','pais'
        ]"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="flex justify-content-end">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <Prime-InputText
                v-model="filters1['global'].value"
                class="form-control w-250px ps-14"
                placeholder="Buscar"
              />
            </span>
          </div>
        </template>

        <template #empty> No existen datos. </template>
        <template #loading> Cargando información. Por favor espere. </template>
        <Column
          selectionMode="multiple"
          style="width: 3rem"
          :exportable="false"
        ></Column>
        <Column
          field="codigoEdificio"
          header="Codigo Edificio"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.codigoEdificio }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Codigo Edificio"
            />
          </template>
        </Column>
        <Column
          field="codigoArea"
          header="Codigo Area"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.codigoArea }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Codigo Area"
            />
          </template>
        </Column>
        <Column
          field="nombre"
          header="Nombre"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.nombre }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Nombre"
            />
          </template>
        </Column>
        <Column
          field="codigoPais"
          header="Codigo Pais"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.codigoPais }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Codigo Pais"
            />
          </template>
        </Column>
        <Column
          field="pais"
          header="Pais"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.pais }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Pais"
            />
          </template>
        </Column>
        <Column
          field="direccion"
          header="Direccion"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.direccion }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Direccion"
            />
          </template>
        </Column>
        <Column
          field="ciudad"
          header="Ciudad"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.ciudad }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Ciudad"
            />
          </template>
        </Column>
        <Column
          field="comuna"
          header="Comuna"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.comuna }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Comuna"
            />
          </template>
        </Column>
        <Column
          field="centroCosto"
          header="Centro Costo"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.centroCosto }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Centro Costo"
            />
          </template>
        </Column>
        <Column
          field="rutRazonSocial"
          header="Rut Razon Social"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.rutRazonSocial }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Rut Razon Social"
            />
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 15rem">
          <template #body="slotProps">
             <router-link
            class="btn btn-primary"
            :to="{name:'apps-convenio-edificio-pagos' , params : { id : slotProps.data.codigoEdificio }}"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Pagos
          </router-link>
          
          </template>
        </Column>
      </DataTable>
    </div>
    <!--end::Card body-->
    <Dialog v-model:buscar-ventas="deleteEdificioDialog" :style="{ width: '50vw' }" header="Crear Edificio" :modal="true">
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
                        <!--begin::Card header-->
                        <div class="card-header">
                          <div class="card-title">
                            <h2>General</h2>
                          </div>
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                          <div class="row">
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
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Nombre
                                  </div> -->
                                  <!--end::Description-->  
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Codigo Edificio</label>
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
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Codigo Edificio
                                  </div> -->
                                  <!--end::Description-->
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Codigo Area</label>
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
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Codigo Area
                                  </div> -->
                                  <!--end::Description-->   
                            </div>
                            <!--end::Input group-->  
                          </div>  
                          <div class="row">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Codigo Pais</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="4"
                                    name="codigoPais"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Codigo Pais"
                                    v-model="edificioDetails.codigoPais"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="codigoPais" />
                                    </div>
                                  </div>
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Codigo Pais
                                  </div> -->
                                  <!--end::Description-->
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Pais</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="text"
                                    maxlength="50"
                                    name="pais"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Pais"
                                    v-model="edificioDetails.pais"
                                  />
                                  <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                      <ErrorMessage name="pais" />
                                    </div>
                                  </div>
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Pais
                                  </div> -->
                                  <!--end::Description-->
                            </div>
                            <!--end::Input group-->                                               
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Direccion</label>
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
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Direccion
                                  </div> -->
                                  <!--end::Description-->
                            </div>
                            <!--end::Input group-->
                          </div>       
                          <div class="row">
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
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Ciudad
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
                                  <!--end::Input-->
                                  <!--begin::Description-->
                                  <!-- <div class="text-muted fs-7">
                                    Ingrese Centro Costo
                                  </div> -->
                                  <!--end::Description-->
                            </div>
                            <!--end::Input group-->
                          </div> 
                          <div class="row">
                            <!--begin::Input group-->
                            <div class="col-4">
                              <!--begin::Label-->
                              <label class="required form-label">Rut Razon Social</label>
                              <!--end::Label-->
                              <!--begin::Input-->
                                  <Field
                                    type="number"
                                    maxlength="10"
                                    name="rutRazonSocial"
                                    class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                    placeholder="Rut Razon Social"
                                    v-model="edificioDetails.rutRazonSocial"
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
                        </div>
                        <!--end::Card header-->
                      </div>
                      <!--end::General options-->
                  </div>
                </div>
                <!--end::Tab pane-->
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
        <template #footer>                         
          <Button class="btn btn-primary  me-5" @click="deleteEdificioDialog = false"> 
            <span class="indicator-label">Cancelar </span>
          </Button>               
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
        </template>
    </Dialog>

    <Dialog v-model:buscar-ventas="deleteEdificiosDialog" :style="{width: '450px'}" header="Confirmar" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>¿Está seguro de asociar los Edificios seleccionados?</span>
        </div>
        <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteEdificiosDialog = false"/>
            <Button label="Sí" icon="pi pi-check" class="p-button-text" @click="asociarEdifiiosSeleccionados" />
        </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import _ from "lodash";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useRouter ,useRoute} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useEdificioStore } from "@/stores/edificio";
import type { IEdificio } from "@/stores/edificio";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import Dialog from 'primevue/dialog';
import { ErrorMessage, Field, Form } from "vee-validate";
moment.locale("es");

interface Buscador {
  fechaInicio?: Date;
  fechaTermino?: Date;
}

export default defineComponent({
  name: "edificio-list",
  components: {
    DataTable,
    Column,
    Dialog,
    ErrorMessage,
    Field,
    Form,
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const deleteEdificioDialog = ref(false);
    const deleteEdificiosDialog = ref(false);
    const selectedEdificios = ref(null);
    const edificio = ref<IEdificio>();
    const store = useEdificioStore();
    const authStore = useAuthStore();
    const id = ref(null);
    const edificiosValidator = Yup.object().shape({
                codigoEdificio: Yup.string().required("Es obligatorio").label("Codigo Edificio"),
            nombre: Yup.string().required("Es obligatorio").label("Nombre"),
            direccion: Yup.string().required("Es obligatorio").label("Direccion"),
            centroCosto: Yup.string().required("Es obligatorio").label("Centro Costo"),
      
    });

    const route = useRoute();
    const rutRazonSocial = route.params.id;


    onMounted(() => {
      console.log("rutRazonSocial => " + rutRazonSocial)
      getEdificiosConvenio(rutRazonSocial);
    });
    const buscadorValidator = Yup.object().shape({});
    
    const getEdificiosConvenio = (rutRazonSocial) => {
      store.getEdificiosConvenio(rutRazonSocial)
        .then(() => {
          loading.value = false;
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

    const dt = ref();
    const formatDate = (value) => {
      value = new Date(value);
      return value.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };
    const formatCurrency = (value) => {
      return value.toLocaleString("es-CL", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        style: "currency",
        currency: "CLP",
      });
    };
    const dataexport = () => {
      const newJson = store.allEdificios.map((rec) => {
        return {
          /*"Nombre Campaña": rec.nombre,
          "F. Desde":formatDate (rec.desde),
          "F. Hasta":formatDate (rec.hasta),
          "Campaña Habilitada": rec.activo ? "SI" : "NO" */
        };
      });
      return newJson;
    };

    const exportExcel = () => {
      import("xlsx").then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(dataexport());
        const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
        const excelBuffer = xlsx.write(workbook, {
          bookType: "xlsx",
          type: "array",
        });
        saveAsExcelFile(excelBuffer, "edificio");
      });
    };
    const saveAsExcelFile = (buffer, fileName) => {
      import("file-saver").then((FileSaver) => {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });
        FileSaver.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      });
    };
	const currentUser = computed(() => {
      return authStore.user;
    });
    const allEdificios = computed(() => {
      return store.allEdificios;
    });
    
    // const editEdificio = (element) => {
    //   router.push({
    //     name: "apps-edificio-edit",
    //     params: { codigoEdificio : element.codigoEdificio }
    //   });
    // };

    const crearEdificio = () => {        
        deleteEdificioDialog.value = true;
    };

    const asociarEdificio = () => {   
      router.push({ name: "apps-convenio-edificio-listing", params: { id: rutRazonSocial } });     
      //deleteEdificiosDialog.value = true;
      //console.log(JSON.stringify( selectedEdificios.value ))
    };

    const asociarEdifiiosSeleccionados = () => {
        deleteEdificiosDialog.value = false;        
        let formData = new FormData();       
        formData.append("edificios", JSON.stringify(selectedEdificios.value));       
                
        store.asociarEdificios(rutRazonSocial,formData)
          .then(() => {
           // loading = ref(false);
           selectedEdificios.value = null;
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Edificio se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-cicloFacturacion-edit" });
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
    };

    const confirmDeleteEdificio = (element) => {
        edificio.value = element;
        deleteEdificioDialog.value = true;
    };
    const deleteEdificio = () => {
        deleteEdificioDialog.value = false;
        store.deleteEdificio( edificio.value.codigoEdificio)
          .then(() => {
            Swal.fire({
              text: "El registro se ha eliminado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              edificio.value = undefined;
            //  buscarEdificios();
            });
          })
          .catch(() => {
              const [error] = Object.values(store.edificioErrors);
              Swal.fire({
                text: error,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Intentar nuevamente!",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-danger",
                },
              });
          });
    };
    const confirmDeleteSelected = () => {
        deleteEdificiosDialog.value = true;
    };

    const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const exportCSV = () => {
        dt.value.exportCSV();
    }
    const visibleFull = ref(false);
    const search = ref(null);
    const loading = ref(true);



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
  });

  const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
       // let formData = new FormData();
       // formData.append("file", imagen_principal.value?.archivo);
       // formData.append("edificio", JSON.stringify(edificioDetails.value));      
        
        store.createEdificio(edificioDetails.value)
          .then(() => {
           // loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Edificio se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-edificio-listing" });
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

    return {saveChanges1,edificiosValidator,asociarEdificio,
      edificioDetails,
      crearEdificio,
      filters1,
      selectedEdificios,
      loading,
      buscadorValidator,
      //buscarEdificios,
      submitButton1,
      allEdificios,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      confirmDeleteEdificio,
      deleteEdificio,
      confirmDeleteSelected,
      asociarEdifiiosSeleccionados,
      edificio,
     // editEdificio,
      deleteEdificioDialog,
      deleteEdificiosDialog
    };
  },
});
</script>

	export default {
	  state,
	  actions,
	  mutations
	};

