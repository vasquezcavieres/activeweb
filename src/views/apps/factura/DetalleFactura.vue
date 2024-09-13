<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body mt-5 pt-0">
      <div class="row">
        <div class="col-4">
          <p class="color-payment"><strong>N° Factura</strong></p>
          <p><strong>{{ facturaDetails.numeroFactura}}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Fecha</strong></p>
          <p><strong>{{ formatDate(facturaDetails.fechaCreacion)}} </strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Estado</strong></p>
          <p><strong>{{ facturaDetails.estado}}</strong></p>
        </div>
      </div>
      <div class="row">
        <div class="col-4">   
          <p class="color-payment"><strong>Monto Neto</strong></p>
          <p><strong> {{ facturaDetails.montoNeto}}</strong></p>      
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Iva</strong></p>
          <p><strong>{{ facturaDetails.iva}}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Total</strong></p>
          <p><strong>{{ facturaDetails.montoTotal}}</strong></p>
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
        <h2 class="color-payment">Detalle Factura </h2>
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
        :value="allDetalleFacturas"
        :paginator="true"
        :rows="10"
        dataKey="detallefacturaId"
        :rowHover="true"
        v-model:filters="filters1"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        :globalFilterFields="[
          'numeroFactura','transferenciaId','totalTransferencia','costoComision','montoTransferencia','fechaTransferencia'
        ]"
        responsiveLayout="scroll"
      >
        <!-- <template #header>
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
        </template> -->

        <template #empty> No existen datos. </template>
        <template #loading> Cargando información. Por favor espere. </template>
                <Column
          field="numeroFactura"
          header="Numero Factura"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.numeroFactura }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Numero Factura"
            />
          </template>
        </Column>
                <Column
          field="transferenciaId"
          header="Transferencia Id"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.transferenciaId }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Transferencia Id"
            />
          </template>
        </Column>
                <Column
          field="totalTransferencia"
          header="Total Transferencia"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{  formatCurrency(data.totalTransferencia) }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Total Transferencia"
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
            {{ formatCurrency(data.costoComision)}}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Costo Comision"
            />
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
          field="fechaTransferencia"
          header="Fecha Transferencia"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ formatDate(data.fechaTransferencia) }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Fecha Transferencia"
            />
          </template>
        </Column>
                <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Prime-Button
              icon="pi pi-eye"
              class="p-button-rounded p-button-success mr-2"
              @click="verDetalleTransferencia(slotProps.data)"
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
import { useRouter,useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useDetalleFacturaStore } from "@/stores/detalleFactura";
import type { IDetalleFactura } from "@/stores/detalleFactura";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { useFacturaStore } from "@/stores/factura";
import type { IFactura } from "@/stores/factura";
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
    const detalleFactura = ref<IDetalleFactura>();
    const detalleFacturaStore = useDetalleFacturaStore();
    const authStore = useAuthStore();
    const facturaStore = useFacturaStore();
    const route = useRoute();
    const id = route.params.id;

    onMounted(() => {
      obtenerFactura(id);
      buscarDetalleFactura(id);
    });

    const buscadorValidator = Yup.object().shape({});
    const buscarDetalleFactura = (id) => {
      detalleFacturaStore.getDetalleFacturas(id)
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          const [error] = Object.values(detalleFacturaStore.detalleFacturaErrors);
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

    
    const obtenerFactura = (id) =>{
      facturaStore
        .getFactura(id)
        .then(() => {
          loading.value = false;
          facturaDetails.value = facturaStore.currentFactura;
          facturaDetails.value.montoTotal =  formatCurrency(facturaDetails.value.montoTotal );
          facturaDetails.value.iva =  formatCurrency(facturaDetails.value.iva );
          facturaDetails.value.montoNeto =  formatCurrency(facturaDetails.value.montoNeto );
        })
        .catch(() => {
          const [error] = Object.values(facturaStore.facturaErrors);
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
      const newJson = detalleFacturaStore.allDetalleFacturas.map((rec) => {
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

    const allDetalleFacturas = computed(() => {
      return detalleFacturaStore.allDetalleFacturas;
    });

    const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const exportCSV = () => {
        dt.value.exportCSV();
    }

    const facturaDetails = ref<IFactura>({      
      numeroFactura:  facturaStore.currentFactura.numeroFactura,
      fechaCreacion: facturaStore.currentFactura.fechaCreacion,
      montoNeto: facturaStore.currentFactura.montoNeto,
      iva:  facturaStore.currentFactura.iva,
      montoTotal:  facturaStore.currentFactura.montoTotal,
      rutRazonSocial:  facturaStore.currentFactura.rutRazonSocial,
      estado:  facturaStore.currentFactura.estado,
      totalComisiones :facturaStore.currentFactura.totalComisiones
  });

    const visibleFull = ref(false);
    const search = ref(null);
    const loading = ref(true);

    const verDetalleTransferencia = (element) =>
    {
      router.push({
        name: "apps-detalleTransferencia-listing",
        params: { id :element.transferenciaId},
      });
    }

    return {
      verDetalleTransferencia,
      obtenerFactura,
      facturaDetails,
      filters1,
      selectedDetalleTransferencias,
      loading,
      buscadorValidator,
      buscarDetalleFactura,
      submitButton1,
      allDetalleFacturas,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
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

