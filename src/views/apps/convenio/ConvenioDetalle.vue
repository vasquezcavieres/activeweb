<template>
  <!--begin::Card-->
  <div class="card">
    <div class="card-header">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="color-payment">Convenio</h2>
      </div>
      <!--end::Card title-->
    </div>
  </div>
  <div class="card mt-5">
    <!--begin::Card body-->
    <div class="card-body pt-0 mt-2">
      <div class="row">
        <div class="col-4">
          <p class="color-payment"><strong>Nombre Administradora</strong></p>
          <p> <strong>{{convenioDetails.nombreAdministradora}}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Razon Social</strong></p>
          <p><strong>{{ convenioDetails.rutRazonSocial }}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Rut Razón Social</strong></p>
          <p> <strong>{{ convenioDetails.rutRazonSocial + '-' + convenioDetails.rutRazonSocialDv }}</strong></p>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p class="color-payment"><strong>Dirección</strong></p>
          <p><strong>{{ convenioDetails.direccion }}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Comuna</strong></p>
          <p><strong>{{ convenioDetails.comuna }}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Región</strong></p>
          <p><strong>{{ convenioDetails.region }}</strong></p>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <p class="color-payment"><strong>Representante Legal</strong></p>
          <p><strong>{{ convenioDetails.representanteLegal }}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Rut Representante</strong></p>
          <p><strong>{{ convenioDetails.rutRepresentanteLegal + '-' +convenioDetails.rutRepresentanteLegalDv }}</strong></p>
        </div>
      
      </div>
    </div>
    <!--end::Card body-->
  </div>
  <div class="card mt-5">
    <!--begin::Card body-->
    <div class="card-body pt-0 mt-2">
      <div class="row">
        <div class="col-4">
          <p class="color-payment"><strong>N° Cuenta</strong></p>
          <p><strong> {{convenioDetails.numeroCuenta  }}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Banco</strong></p>
          <p><strong>{{convenioDetails.banco  }}</strong></p>
        </div>
        <div class="col-4">
          <p class="color-payment"><strong>Tipo Cuenta</strong></p>
          <p><strong>{{convenioDetails.tipoCuenta}}</strong></p>
        </div>
      </div>
    </div>
    <!--end::Card body-->
  </div>
  <div class="card mt-5">
    <div class="card-header">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="color-payment">Pagos Realizados</h2>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card body-->
    <div class="card-body pt-0 mt-5">
      <div class="row">
        <DataTable
        :value="allPagos"
        :paginator="true"
        :rows="10"        
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
          field="codigoEdificio"
          header="Codigo Edificio"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.codigoEdificio }}
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
          field="comision"
          header="Comisión"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.comision }}
          </template>
         
        </Column>
      </DataTable>
      </div>
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
import { useRouter ,useRoute} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useEdificioStore } from "@/stores/edificio";
import { useConvenioStore } from "@/stores/convenio";
import type { IEdificio } from "@/stores/edificio";
import type { IConvenio } from "@/stores/convenio";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import Dialog from 'primevue/dialog';
import { ErrorMessage, Field, Form } from "vee-validate";
moment.locale("es");
import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';
import { usePagoStore } from "@/stores/pago";
import type { IPago } from "@/stores/pago";

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
    Toast
  },
  
  setup() {
    const toast = useToast();
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);    
    const selectedEdificios = ref(null);
    const edificio = ref<IEdificio>();
    const store = useEdificioStore();
    const storeConvenio = useConvenioStore();
    const storePago = usePagoStore();
    const authStore = useAuthStore();
    const id = ref(null);
    const route = useRoute();
    const codigoEdificio = route.params.id;
    const selectedPagos = ref(null);

    onMounted(() => {
      obtenerConvenio(codigoEdificio);
      obtenerPagosConvenio(codigoEdificio);
    });

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

    const allEdificiosConvenio = computed(() => {
      return store.allEdificiosConvenio;
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

  const convenioDetails = ref<IConvenio>({
      rutRazonSocial : storeConvenio.currentConvenio.rutRazonSocial,
			rutRazonSocialDv : storeConvenio.currentConvenio.rutRazonSocialDv,
			nombrerazonSocial : storeConvenio.currentConvenio.nombrerazonSocial,
			nombreAdministradora : storeConvenio.currentConvenio.nombreAdministradora,
			direccion : storeConvenio.currentConvenio.direccion,
			comuna : storeConvenio.currentConvenio.comuna,
			region : storeConvenio.currentConvenio.region,
			representanteLegal : storeConvenio.currentConvenio.representanteLegal,
			rutRepresentanteLegal : storeConvenio.currentConvenio.rutRepresentanteLegal,
			rutRepresentanteLegalDv : storeConvenio.currentConvenio.rutRepresentanteLegalDv,
			numeroCuenta : storeConvenio.currentConvenio.numeroCuenta,
			tipoCuenta : storeConvenio.currentConvenio.tipoCuenta,
			banco : storeConvenio.currentConvenio.banco,
			correoContacto : storeConvenio.currentConvenio.correoContacto,
			vendedorId : storeConvenio.currentConvenio.vendedorId,
			porcentajeComision : storeConvenio.currentConvenio.porcentajeComision,
			emailNotificacion : storeConvenio.currentConvenio.emailNotificacion,
      rutAdministrador :storeConvenio.currentConvenio.rutAdministrador    
  });

  const obtenerConvenio = (id) =>{
    storeConvenio
        .getConvenio(id)
        .then(() => {        
          convenioDetails.value = storeConvenio.currentConvenio;         
        })
        .catch(() => {
          const [error] = Object.values(storeConvenio.convenioErrors);
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

  const obtenerPagosConvenio = (codigoConvenio) => {
      storePago.getPagosConvenio(codigoConvenio)
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          const [error] = Object.values(storePago.pagoErrors);
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

    const allPagos = computed(() => {
      return storePago.allPagos;
    });
    const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    return {
      filters1,
      selectedPagos,
      allPagos,
      obtenerPagosConvenio,
      obtenerConvenio,
      convenioDetails,
      edificioDetails,           
      selectedEdificios,
      loading,   
      submitButton1,
      allEdificios,
      allEdificiosConvenio,
      visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,      
      edificio
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

