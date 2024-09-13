





<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">CICLOFACTURACION</div>
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

          <!--begin::Add CICLOFACTURACION-->
          <router-link
            class="btn btn-primary"
            :to="{name:'apps-ciclofacturacion-create'}"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Nueva cicloFacturacion
          </router-link>
          <!--end::Add CICLOFACTURACION-->
           
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <DataTable
        :value="allCicloFacturacions"
        :paginator="true"
        :rows="10"
        showGridlines
        dataKey="ciclofacturacionId"
        :rowHover="true"
        v-model:selection="selectedCicloFacturacions"
        v-model:filters="filters1"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        :globalFilterFields="[
          'creadoPor','fechaCreacion','diaFacturacion','actualizadoPor','fechaActualizacion'
        ]"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="flex justify-content-end">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
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
          field="creadoPor"
          header="Creado Por"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.creadoPor }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Creado Por"
            />
          </template>
        </Column>
                <Column
          field="fechaCreacion"
          header="Fecha Creacion"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.fechaCreacion }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Fecha Creacion"
            />
          </template>
        </Column>
                <Column
          field="diaFacturacion"
          header="Dia Facturacion"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.diaFacturacion }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Dia Facturacion"
            />
          </template>
        </Column>
                <Column
          field="actualizadoPor"
          header="Actualizado Por"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.actualizadoPor }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Actualizado Por"
            />
          </template>
        </Column>
                <Column
          field="fechaActualizacion"
          header="Fecha Actualizacion"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.fechaActualizacion }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Fecha Actualizacion"
            />
          </template>
        </Column>
                <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success mr-2"
              @click="editCicloFacturacion(slotProps.data)"
            />
            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteCicloFacturacion(slotProps.data)" />
          </template>
        </Column>
      </DataTable>
    </div>
    <!--end::Card body-->
    <Dialog v-model:visible="deleteCicloFacturacionDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="ciclofacturacion">¿Está seguro de eliminar el registro <b>{{ciclofacturacion.nombre}}</b>?</span>
        </div>
        <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteCicloFacturacionDialog = false"/>
            <Button label="Sí" icon="pi pi-check" class="p-button-text" @click="deleteCicloFacturacion" />
        </template>
    </Dialog>

    <Dialog v-model:visible="deleteCicloFacturacionsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>¿Está seguro de eliminar los registros seleccionados?</span>
        </div>
        <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteCicloFacturacionsDialog = false"/>
            <Button label="Sí" icon="pi pi-check" class="p-button-text" @click="deleteSelectedCicloFacturacions" />
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
import { useCicloFacturacionStore } from "@/stores/cicloTransferencia";
import type { ICicloFacturacion } from "@/stores/cicloTransferencia";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");

interface Buscador {
  fechaInicio?: Date;
  fechaTermino?: Date;
}

export default defineComponent({
  name: "cicloFacturacion-list",
  components: {
    DataTable,
    Column
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const deleteCicloFacturacionDialog = ref(false);
    const deleteCicloFacturacionsDialog = ref(false);
    const selectedCicloFacturacions = ref(null);
    const ciclofacturacion = ref<ICicloFacturacion>();
    const store = useCicloFacturacionStore();
    const authStore = useAuthStore();
    const id = ref(null);
    onMounted(() => {
      buscarCicloFacturacions();
    });
    const buscadorValidator = Yup.object().shape({});
    const buscarCicloFacturacions = () => {
      store.getCicloFacturacions()
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          const [error] = Object.values(store.ciclofacturacionErrors);
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
      const newJson = store.allCicloFacturacions.map((rec) => {
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
        saveAsExcelFile(excelBuffer, "cicloFacturacion");
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
    const allCicloFacturacions = computed(() => {
      return store.allCicloFacturacions;
    });
    
    const editCicloFacturacion = (element) => {
      router.push({
        name: "apps-cicloFacturacion-edit",
        params: { creadoPor = :element.@creadoPor, },
      });
    };
    const confirmDeleteCicloFacturacion = (element) => {
        cicloFacturacion.value = element;
        deleteCicloFacturacionDialog.value = true;
    };
    const deleteCicloFacturacion = () => {
        deleteCicloFacturacionDialog.value = false;
        store.deleteCicloFacturacion(creadoPorciclofacturacion = .value.@creadoPor,)
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
              ciclofacturacion.value = undefined;
              buscarCicloFacturacions();
            });
          })
          .catch(() => {
              const [error] = Object.values(store.cicloFacturacionErrors);
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
        deleteCicloFacturacionsDialog.value = true;
    };
    const deleteSelectedCicloFacturacions = () => {
        deleteCicloFacturacionsDialog.value = false;
        selectedCicloFacturacions.value = null;
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
      selectedCicloFacturacions,
      loading,
      buscadorValidator,
      buscarCicloFacturacions,
      submitButton1,
      allCicloFacturacions,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      confirmDeleteCicloFacturacion,
      deleteCicloFacturacion,
      confirmDeleteSelected,
      deleteSelectedCicloFacturacions,
      ciclofacturacion,
      editCicloFacturacion,
      deleteCicloFacturacionDialog,
      deleteCicloFacturacionsDialog
    };
  },
});
</script>

	
	export default {
	  state,
	  actions,
	  mutations
	};

