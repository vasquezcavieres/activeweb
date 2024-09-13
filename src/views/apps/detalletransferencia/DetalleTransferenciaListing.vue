<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body mt-5 pt-0">
      <div class="row">
        <div class="col-4">
          <p class="color-payment"><strong>Transferencia Id</strong></p>
          <p><strong>{{ transferenciaDetails.transferenciaId}}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Total Compras</strong></p>
          <p><strong>{{ transferenciaDetails.totalTransferencia}}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Comisión</strong></p>
          <p><strong>{{ transferenciaDetails.costoComision}}</strong></p>
        </div>
      </div>
      <div class="row">
        <div class="col-4">   
          <p class="color-payment"><strong>Monto Transferido</strong></p>
          <p><strong> {{ transferenciaDetails.montoTransferencia}}</strong></p>      
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Fecha</strong></p>
          <p><strong>{{ transferenciaDetails.fechaTransferencia}}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>N° Pagos</strong></p>
          <p><strong>{{ transferenciaDetails.numeroPagos}}</strong></p>
        </div>     
      </div>
      <div class="row">
        <div class="col-4">
          <p class="color-payment"><strong>N° Cuenta</strong></p>
          <p><strong>{{ transferenciaDetails.numeroCuenta}}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Tipo Cuenta</strong></p>
          <p><strong>{{ transferenciaDetails.tipoCuenta}}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Banco</strong></p>
          <p><strong>{{ transferenciaDetails.banco}}</strong></p>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p class="color-payment"><strong>Email Notificación</strong></p>
          <p><strong>{{ transferenciaDetails.emailNotificacion}}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Estado</strong></p>
          <p><strong>{{ transferenciaDetails.estado}}</strong></p>
        </div>
        <div class="col-4">
        </div>
      </div>
    </div>
    <!--end::Card body-->
  </div>
  <div class="card mt-5">
    <!--begin::Card header-->
    <div class="card-header pt-6">
      <!--begin::Card title-->
      <div class="card-header">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="color-payment">Detalle Transferencia </h2>
      </div>
      <!--end::Card title-->
    </div>
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
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 mt-5">
      <DataTable
        :value="allDetalleTransferencias"
        :paginator="true"
        :rows="10"        
        dataKey="detalletransferenciaId"
        :rowHover="true"       
        v-model:filters="filters1"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        :globalFilterFields="[
          'transferenciaId','rutRazonSocial','pagoId','numeroCuenta','tipoCuenta','banco','montoTransferencia','emailNotificacion','estado','fechaTransferencia','costoComision'
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
                <Column
          field="pagoId"
          header="Pago Id"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.pagoId }}
          </template>
        </Column>
        <Column
          field="montoPago"
          header="Monto Pago"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.montoPago) }}
          </template>
        </Column>
        <Column
          field="montoTransferencia"
          header="Monto Transferencia"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.montoTransferencia) }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Monto Transferencia"
            />
          </template>
        </Column>
                <Column
          field="costoComision"
          header="Costo Comision"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.costoComision) }}
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
import { useRouter,useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useDetalleTransferenciaStore } from "@/stores/detalleTransferencia";
import type { IDetalleTransferencia } from "@/stores/detalleTransferencia";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { useTransferenciaStore } from "@/stores/transferencia";
import type { ITransferencia } from "@/stores/transferencia";
moment.locale("es");

interface Buscador {
  fechaInicio?: Date;
  fechaTermino?: Date;
}

export default defineComponent({
  name: "detalleTransferencia-list",
  components: {
    DataTable,
    Column
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const deleteDetalleTransferenciaDialog = ref(false);
    const deleteDetalleTransferenciasDialog = ref(false);
    const selectedDetalleTransferencias = ref(null);
    const detalletransferencia = ref<IDetalleTransferencia>();
    const store = useDetalleTransferenciaStore();
    const authStore = useAuthStore();
    const transferenciaStore = useTransferenciaStore();
    const route = useRoute();
    const id = route.params.id;

    onMounted(() => {
      obtenerTransferencia(id);
      buscarDetalleTransferencias(id);
    });

    const buscadorValidator = Yup.object().shape({});
    const buscarDetalleTransferencias = (id) => {
      store.getDetalleTransferencias(id)
        .then(() => {
          loading.value = false;
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
    };

    
    const obtenerTransferencia = (id) =>{
      transferenciaStore
        .getTransferencia(id)
        .then(() => {
          loading.value = false;
          transferenciaDetails.value = transferenciaStore.currentTransferencia;
          transferenciaDetails.value.totalTransferencia =  formatCurrency(transferenciaDetails.value.totalTransferencia );
          transferenciaDetails.value.costoComision =  formatCurrency(transferenciaDetails.value.costoComision );
          transferenciaDetails.value.montoTransferencia =  formatCurrency(transferenciaDetails.value.montoTransferencia );
        })
        .catch(() => {
          const [error] = Object.values(transferenciaStore.transferenciaErrors);
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
      const newJson = store.allDetalleTransferencias.map((rec) => {
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
        saveAsExcelFile(excelBuffer, "detalleTransferencia");
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

    const allDetalleTransferencias = computed(() => {
      return store.allDetalleTransferencias;
    });

    const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const exportCSV = () => {
        dt.value.exportCSV();
    }

    const transferenciaDetails = ref<ITransferencia>({
      transferenciaId : transferenciaStore.currentTransferencia.transferenciaId,
			totalTransferencia : transferenciaStore.currentTransferencia.totalTransferencia,
			costoComision : transferenciaStore.currentTransferencia.costoComision,      
			fechaTransferencia : transferenciaStore.currentTransferencia.fechaTransferencia,
      numeroPagos: transferenciaStore.currentTransferencia.numeroPagos,
      codigoConvenio: transferenciaStore.currentTransferencia.codigoConvenio,
      numeroCuenta:transferenciaStore.currentTransferencia.numeroCuenta,
      tipoCuenta:transferenciaStore.currentTransferencia.tipoCuenta,
      banco:transferenciaStore.currentTransferencia.banco,
      emailNotificacion :transferenciaStore.currentTransferencia.emailNotificacion,
      estado:transferenciaStore.currentTransferencia.estado,
      montoTransferencia:transferenciaStore.currentTransferencia.montoTransferencia,
  });

    const visibleFull = ref(false);
    const search = ref(null);
    const loading = ref(true);

    return {
      obtenerTransferencia,
      transferenciaDetails,
      filters1,
      selectedDetalleTransferencias,
      loading,
      buscadorValidator,
      buscarDetalleTransferencias,
      submitButton1,
      allDetalleTransferencias,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      detalletransferencia,
      deleteDetalleTransferenciaDialog,
      deleteDetalleTransferenciasDialog
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

