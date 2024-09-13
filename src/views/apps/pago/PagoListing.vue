<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">Ventas Realizados</div>
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
          <!--begin::Add PAGO-->
          <!-- <router-link
            class="btn btn-primary"
            :to="{name:'apps-pago-create'}"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Nueva pago
          </router-link> -->
          <!--end::Add PAGO-->
           
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <DataTable
        :value="allPagos"
        :paginator="true"
        :rows="10"
        showGridlines
        dataKey="pagoId"
        :rowHover="true"
        v-model:selection="selectedPagos"
        v-model:filters="filters1"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        :globalFilterFields="[
          'pagoId','vendedorId','nombreVendedor','tokenTransaccion','tokenMedioPago','codigoMedioPago','numeroOrden','emailCliente','nombreCliente','montoPago','fechaTransaccion','codigoEdificio','codigoArea','nombreEdificio','direccionEdificio','ciudadEdificio','comunaEdificio','centroCosto','exitoso','codigoAutorizacion','fechaPago','mesPago','anioPago','numeroTarjeta','notificado','codigoNotificacion','numeroBoleta','urlBoleta','fechaBoleta','codigoPais','pais','ultimoIntento','boletaAux','firma'
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
          field="pagoId"
          header="Pago Id"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.pagoId }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Pago Id"
            />
          </template>
        </Column>
                <Column
          field="vendedorId"
          header="Vendedor Id"
          sortable
          style="min-width: 9rem"
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
          field="nombreVendedor"
          header="Nombre Vendedor"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.nombreVendedor }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Nombre Vendedor"
            />
          </template>
        </Column>
                <Column
          field="codigoMedioPago"
          header="Codigo Medio Pago"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.codigoMedioPago }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Codigo Medio Pago"
            />
          </template>
        </Column>
                <Column
          field="numeroOrden"
          header="Numero Orden"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.numeroOrden }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Numero Orden"
            />
          </template>
        </Column>
                <Column
          field="emailCliente"
          header="Email Cliente"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.emailCliente }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Email Cliente"
            />
          </template>
        </Column>
                <Column
          field="nombreCliente"
          header="Nombre Cliente"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.nombreCliente }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Nombre Cliente"
            />
          </template>
        </Column>
                <Column
          field="montoPago"
          header="Monto Pago"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.montoPago }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Monto Pago"
            />
          </template>
        </Column>
                <Column
          field="fechaTransaccion"
          header="Fecha Transaccion"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.fechaTransaccion }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Fecha Transaccion"
            />
          </template>
        </Column>
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
          field="nombreEdificio"
          header="Nombre Edificio"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.nombreEdificio }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Nombre Edificio"
            />
          </template>
        </Column>
                <Column
          field="direccionEdificio"
          header="Direccion Edificio"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.direccionEdificio }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Direccion Edificio"
            />
          </template>
        </Column>
                <Column
          field="ciudadEdificio"
          header="Ciudad Edificio"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.ciudadEdificio }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Ciudad Edificio"
            />
          </template>
        </Column>
                <Column
          field="comunaEdificio"
          header="Comuna Edificio"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.comunaEdificio }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Comuna Edificio"
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
          field="exitoso"
          header="Exitoso"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.exitoso }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Exitoso"
            />
          </template>
        </Column>
                <Column
          field="codigoAutorizacion"
          header="Codigo Autorizacion"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.codigoAutorizacion }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Codigo Autorizacion"
            />
          </template>
        </Column>
                <Column
          field="fechaPago"
          header="Fecha Pago"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.fechaPago }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Fecha Pago"
            />
          </template>
        </Column>
                <Column
          field="mesPago"
          header="Mes Pago"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.mesPago }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Mes Pago"
            />
          </template>
        </Column>
                <Column
          field="anioPago"
          header="Anio Pago"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.anioPago }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Anio Pago"
            />
          </template>
        </Column>

                <Column
          field="numeroBoleta"
          header="Numero Boleta"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.numeroBoleta }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Numero Boleta"
            />
          </template>
        </Column>
  
                <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <!-- <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success mr-2"
              @click="editPago(slotProps.data)"
            />
            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeletePago(slotProps.data)" /> -->
          </template>
        </Column>
      </DataTable>
    </div>
    <!--end::Card body-->
    <Dialog v-model:buscar-ventas="deletePagoDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="pago">¿Está seguro de eliminar el registro <b>{{pago.nombre}}</b>?</span>
        </div>
        <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deletePagoDialog = false"/>
            <Button label="Sí" icon="pi pi-check" class="p-button-text" @click="deletePago" />
        </template>
    </Dialog>

    <Dialog v-model:buscar-ventas="deletePagosDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>¿Está seguro de eliminar los registros seleccionados?</span>
        </div>
        <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deletePagosDialog = false"/>
            <Button label="Sí" icon="pi pi-check" class="p-button-text" @click="deleteSelectedPagos" />
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
import { useRouter,useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { usePagoStore } from "@/stores/pago";
import type { IPago } from "@/stores/pago";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");

interface Buscador {
  fechaInicio?: Date;
  fechaTermino?: Date;
}

export default defineComponent({
  name: "pago-list",
  components: {
    DataTable,
    Column
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const deletePagoDialog = ref(false);
    const deletePagosDialog = ref(false);
    const selectedPagos = ref(null);
    const pago = ref<IPago>();
    const store = usePagoStore();
    const authStore = useAuthStore();
    const id = ref(null);
    const route = useRoute();
    const codigoEdificio = route.params.id;

    onMounted(() => {
      buscarPagos(codigoEdificio);
    });

    const buscadorValidator = Yup.object().shape({});

    const buscarPagos = (codigoEdificio) => {
      store.getPagosEdificio(codigoEdificio)
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          const [error] = Object.values(store.pagoErrors);
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
      const newJson = store.allPagos.map((rec) => {
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
        saveAsExcelFile(excelBuffer, "pago");
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
    const allPagos = computed(() => {
      return store.allPagos;
    });
    
    const confirmDeletePago = (element) => {
        pago.value = element;
        deletePagoDialog.value = true;
    };


    const confirmDeleteSelected = () => {
        deletePagosDialog.value = true;
    };
    const deleteSelectedPagos = () => {
        deletePagosDialog.value = false;
        selectedPagos.value = null;
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
      selectedPagos,
      loading,
      buscadorValidator,
      buscarPagos,
      submitButton1,
      allPagos,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      confirmDeletePago,
      //deletePago,
      confirmDeleteSelected,
      deleteSelectedPagos,
      pago,
      //editPago,
      deletePagoDialog,
      deletePagosDialog
    };
  },
});
</script>

	
	export default {
	  state,
	  actions,
	  mutations
	};

