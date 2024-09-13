<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title color-payment"><strong>Archivo Pago Proveedores</strong></div>
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
            Exportar
          </button> -->
          <!--end::Export-->
           
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <DataTable
        :value="allArchivoPagoProveedoress"
        :paginator="true"
        :rows="10"
        showGridlines
        dataKey="archivopagoproveedoresId"
        :rowHover="true"
        v-model:selection="selectedArchivoPagoProveedoress"
        v-model:filters="filters1"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        :globalFilterFields="[
          'numeroArchivo','nombreArchivo','numeroTransferencias','fechaCreacion','rutaArchivo'
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
          field="numeroArchivo"
          header="N° Archivo"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.numeroArchivo }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Numero Archivo"
            />
          </template>
        </Column>
                <Column
          field="nombreArchivo"
          header="Nombre Archivo"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.nombreArchivo }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Nombre Archivo"
            />
          </template>
        </Column>
                <Column
          field="numeroTransferencias"
          header="N° Transferencias"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.numeroTransferencias }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Numero Transferencias"
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
            {{ formatDate(data.fechaCreacion) }}
          </template>
        </Column>            
        <Column :exportable="false" style="min-width: 8rem">
          <template #body="{ data }">
            <Prime-Button
              icon="pi pi-download"
              class="p-button-rounded p-button-success mr-2"     
              @click="getFile(data.numeroArchivo)"         
            />           
          </template>
        </Column>
      </DataTable>
    </div>
    <!--end::Card body-->
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
import { useArchivoPagoProveedoresStore } from "@/stores/archivoPagoProveedores";
import type { IArchivoPagoProveedores } from "@/stores/archivoPagoProveedores";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");

interface Buscador {
  fechaInicio?: Date;
  fechaTermino?: Date;
}

export default defineComponent({
  name: "archivoPagoProveedores-list",
  components: {
    DataTable,
    Column
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const deleteArchivoPagoProveedoresDialog = ref(false);
    const deleteArchivoPagoProveedoressDialog = ref(false);
    const selectedArchivoPagoProveedoress = ref(null);
    const archivopagoproveedores = ref<IArchivoPagoProveedores>();
    const store = useArchivoPagoProveedoresStore();
    const authStore = useAuthStore();
    const id = ref(null);
    onMounted(() => {
      buscarArchivoPagoProveedoress();
    });
    const buscadorValidator = Yup.object().shape({});
    const buscarArchivoPagoProveedoress = () => {
      store.getArchivoPagoProveedoress()
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          const [error] = Object.values(store.archivopagoproveedoresErrors);
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


    const getFile = (id) => {
      store.getFile(id)
        .then(() => {
          loading.value = false;
          const url = `data:application/pdf;base64,${store.file[1]}`;
                    const descargar = document.createElement("a");
                    //const nombreDocumento = `${rutCorredor}.xls`;
                    const nombreDocumento = store.file[0];                
                    descargar.href = url;
                    descargar.download = nombreDocumento;
                    descargar.click();
              

        })
        .catch(() => {
          const [error] = Object.values(store.archivopagoproveedoresErrors);
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
      const newJson = store.allArchivoPagoProveedoress.map((rec) => {
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
        saveAsExcelFile(excelBuffer, "archivoPagoProveedores");
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
    const allArchivoPagoProveedoress = computed(() => {
      return store.allArchivoPagoProveedoress;
    });
    
   
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
      filters1,getFile,
      selectedArchivoPagoProveedoress,
      loading,
      buscadorValidator,
      buscarArchivoPagoProveedoress,
      submitButton1,
      allArchivoPagoProveedoress,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      archivopagoproveedores
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

