<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title color-payment"> <strong>Convenios</strong> </div>
      <!--begin::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          class="d-flex justify-content-end"
          data-kt-subscription-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            @click="exportExcel"
            type="button"
            class="btn btn-light-primary me-3"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Exportar
          </button>
          <!--end::Export-->

          <!--begin::Add CONVENIO-->
          <router-link
            class="btn btn-primary"
            :to="{name:'apps-convenio-create'}"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Nuevo Convenio
          </router-link>
          <!--end::Add CONVENIO-->
           
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <DataTable
        :value="allConvenios"
        :paginator="true"
        :rows="10"
        showGridlines
        dataKey="rutRazonSocial"
        :rowHover="true"
        v-model:selection="selectedConvenios"
        v-model:filters="filters1"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        :globalFilterFields="[
          'rutRazonSocial','rutRazonSocialDv','nombrerazonSocial','nombreAdministradora','direccion','comuna','region','representanteLegal','rutRepresentanteLegal','rutRepresentanteLegalDv','numeroCuenta','tipoCuenta','banco','correoContacto','vendedorId','porcentajeComision','emailNotificacion'
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
        <!-- <Column
          selectionMode="multiple"
          style="width: 3rem"
          :exportable="false"
        ></Column> -->
                <Column
          field="rutRazonSocial"
          header="Rut Razon Social"
          sortable
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            {{ data.rutRazonSocial + '-' + data.rutRazonSocialDv }}
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
                <Column
          field="nombrerazonSocial"
          header="Nombre Razon Social"
          sortable
          style="min-width: 14rem"
        >
          <template #body="{ data }">
            {{ data.nombrerazonSocial }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Nombrerazon Social"
            />
          </template>
        </Column>
        <Column
          field="nombreAdministradora"
          header="Nombre Administradora"
          sortable
          style="min-width: 15rem"
        >
          <template #body="{ data }">
            {{ data.nombreAdministradora }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Nombre Administradora"
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
          field="region"
          header="Region"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.region }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Region"
            />
          </template>
        </Column>
                <Column
          field="representanteLegal"
          header="Representante Legal"
          sortable
          style="min-width: 15rem"
        >
          <template #body="{ data }">
            {{ data.representanteLegal }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Representante Legal"
            />
          </template>
        </Column>
        <Column
          field="rutRepresentanteLegal"
          header="Rut Representante Legal"
          sortable
          style="min-width: 15rem"
        >
          <template #body="{ data }">
            {{ data.rutRepresentanteLegal + '-' + data.rutRepresentanteLegalDv  }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Rut Representante Legal"
            />
          </template>
        </Column>
        <Column
          field="vendedorId"
          header="Vendedor Id"
          sortable
          style="min-width: 13rem"
        >
          <template #body="{ data }">
            {{ data.vendedorId }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Vendedor Id"
            />
          </template>
        </Column>
        <Column
          field="porcentajeComision"
          header="% Comision"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.porcentajeComision }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Porcentaje Comision"
            />
          </template>
        </Column>
                <Column
          field="emailNotificacion"
          header="Email Notificacion"
          sortable
          style="min-width: 13rem"
        >
          <template #body="{ data }">
            {{ data.emailNotificacion }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Email Notificacion"
            />
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 13rem">
          <template #body="slotProps">
            <Prime-Button            
            class="p-button-rounded p-button-success mr-2 ms-2"
              icon="pi pi-search-plus"
              @click="verEdificios(slotProps.data)"              
           />
            <Prime-Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success mr-2 ms-2"
              @click="editConvenio(slotProps.data)"
            />
            <Prime-Button icon="pi pi-trash" class="p-button-rounded p-button-warning ms-2" @click="confirmDeleteConvenio(slotProps.data)" />
          </template>
        </Column>
      </DataTable>
    </div>
    <!--end::Card body-->
    <Dialog v-model:buscar-ventas="deleteConvenioDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="convenio">¿Está seguro de eliminar el registro <b>{{convenio.nombre}}</b>?</span>
        </div>
        <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteConvenioDialog = false"/>
            <Button label="Sí" icon="pi pi-check" class="p-button-text" @click="deleteConvenio" />
        </template>
    </Dialog>

    <Dialog v-model:buscar-ventas="deleteConveniosDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>¿Está seguro de eliminar los registros seleccionados?</span>
        </div>
        <template #footer>
            <Prime-Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteConveniosDialog = false"/>
            <Button label="Sí" icon="pi pi-check" class="p-button-text" @click="deleteSelectedConvenios" />
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
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConvenioStore } from "@/stores/convenio";
import type { IConvenio } from "@/stores/convenio";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import Dialog from 'primevue/dialog';
moment.locale("es");

interface Buscador {
  fechaInicio?: Date;
  fechaTermino?: Date;
}

export default defineComponent({
  name: "convenio-list",
  components: {
    DataTable,
    Column,
    Dialog
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const deleteConvenioDialog = ref(false);
    const deleteConveniosDialog = ref(false);
    const selectedConvenios = ref(null);
    const convenio = ref<IConvenio>();
    const store = useConvenioStore();
    const authStore = useAuthStore();
    const id = ref(null);
    onMounted(() => {
      buscarConvenios();
    });
    const buscadorValidator = Yup.object().shape({});
    const buscarConvenios = () => {
      store.getConvenios()
        .then(() => {
          loading.value = false;
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
      const newJson = store.allConvenios.map((rec) => {
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
        saveAsExcelFile(excelBuffer, "convenio");
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
    const allConvenios = computed(() => {
      return store.allConvenios;
    });

    const verEdificios = (element) => {
      router.push({
        name: "apps-convenio-edificio",
        params: { id :element.rutRazonSocial, },
      });
    };
    
    const editConvenio = (element) => {
      router.push({
        name: "apps-convenio-edit",
        params: { id :element.rutRazonSocial, },
      });
    };
    const confirmDeleteConvenio = (element) => {
        convenio.value = element;
        deleteConvenioDialog.value = true;
    };
    const deleteConvenio = () => {
        deleteConvenioDialog.value = false;
        store.deleteConvenio(convenio.value.rutRazonSocial,)
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
              convenio.value = undefined;
              buscarConvenios();
            });
          })
          .catch(() => {
              const [error] = Object.values(store.convenioErrors);
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
        deleteConveniosDialog.value = true;
    };
    const deleteSelectedConvenios = () => {
        deleteConveniosDialog.value = false;
        selectedConvenios.value = null;
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
    return {
      filters1,
      selectedConvenios,
      loading,
      buscadorValidator,
      buscarConvenios,
      submitButton1,
      allConvenios,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      confirmDeleteConvenio,
      deleteConvenio,
      confirmDeleteSelected,
      deleteSelectedConvenios,
      convenio,
      editConvenio,
      verEdificios,
      deleteConvenioDialog,
      deleteConveniosDialog
    };
  },
});
</script>

<style >
.color-payment{
  color:#00ced1 !important;
}
  
</style>
	
	export default {
	  state,
	  actions,
	  mutations
	};

