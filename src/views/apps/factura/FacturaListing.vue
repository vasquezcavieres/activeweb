<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title color-payment"><strong>Facturas Emitidas</strong></div>
      <!--begin::Card title-->
    </div>
    <!--end::Card header-->
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-3">
          <!--begin::Label-->
          <label class="form-label">N° Factura </label>
          <!--end::Label-->
          <!--begin::Input-->
          <Field
            type="number"
            maxlength="10"
            name="numeroFactura"
            class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
            placeholder="N° Factura"
            v-model="facturaDetails.numeroFactura"
          />
        </div>
        <div class="col-6">
          <!--begin::Label-->
          <div>
            <label class="form-label">Fecha Creación</label>
          </div>          
          <div>
            <Prime-Calendar v-model="dates" selectionMode="range" :manualInput="false"  :showIcon="true"/>
          <Prime-Button icon="pi pi-refresh" severity="info" aria-label="User" class="ms-2" @click="buscarFacturas"  />
          </div>
        </div>   
      </div>
    </div>
    <!--begin::Card body-->
    <div class="card-body pt-0">
      <DataTable
        :value="allFacturas"
        :paginator="true"
        :rows="10"        
        dataKey="numeroFactura"
        :rowHover="true"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        :globalFilterFields="[
          'numeroFactura','fechaCreacion','montoNeto','iva','montoTotal','rutRazonSocial','estado'
        ]"
        responsiveLayout="scroll"
      >
        <template #empty> No existen datos. </template>
        <template #loading> Cargando información. Por favor espere. </template>
                <Column
          field="numeroFactura"
          header="N° Factura"
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
          field="fechaCreacion"
          header="Fecha Creación"
          sortable
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            {{ formatDate(data.fechaCreacion) }}
          </template>
        </Column>
                <Column
          field="montoNeto"
          header="Monto Neto"
          sortable
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.montoNeto) }}
          </template>
        </Column>
                <Column
          field="iva"
          header="Iva"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.iva) }}
          </template>
        </Column>
                <Column
          field="montoTotal"
          header="Monto Total"
          sortable
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.montoTotal) }}
          </template>
        </Column>
                <Column
          field="rutRazonSocial"
          header="Rut Razón Social"
          sortable
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            {{ data.rutRazonSocial }}
          </template>
        </Column>
                <Column
          field="estado"
          header="Estado"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.estado }}
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Prime-Button
              icon="pi pi-eye"
              class="p-button-rounded p-button-success mr-2"
              @click="editFactura(slotProps.data)"
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
import { useFacturaStore } from "@/stores/factura";
import type { IFactura } from "@/stores/factura";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import { ErrorMessage, Field, Form } from "vee-validate";
moment.locale("es");
import { useEdificioStore, type IEdificio } from "@/stores/edificio";

export default defineComponent({
  name: "factura-list",
  components: {
    DataTable,
    Column,
    Accordion,
    AccordionTab,
    ErrorMessage,
    Field,
    Form
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const deleteFacturaDialog = ref(false);
    const deleteFacturasDialog = ref(false);
    const selectedFacturas = ref(null);
    const factura = ref<IFactura>();
      const storeEdificios = useEdificioStore();
    const store = useFacturaStore();
    const authStore = useAuthStore();
    const id = ref(null);

    onMounted(() => {
     // facturaDetails.value.fechaCreacion = formatDate(Date.now());
      buscarFacturas();
    });
    const buscadorValidator = Yup.object().shape({});

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
      const newJson = store.allFacturas.map((rec) => {
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
        saveAsExcelFile(excelBuffer, "factura");
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
    const allFacturas = computed(() => {
      return store.allFacturas;
    });

    const allFacturasFiltro = computed(() => {
      return store.allFacturasFiltro;
    });
    
    const editFactura = (element) => {
      router.push({
        name: "apps-detalle-Factura",
        params: { id :element.numeroFactura},
      });
    };

    const buscarFacturas = async () => {

      if(currentUser.value.codigoRol == "ADMINISTRADOR_CONVENIO")
      {
        facturaDetails.value.rutRazonSocial = currentUser.value.rutUsuario;
      }
      if(currentUser.value.codigoRol == "COMUNIDAD")
      {
        await obtenerEdificioComunidad(currentUser.value.rutUsuario)
        facturaDetails.value.codigoEdificio = edificioDetails.value.codigoEdificio;
      }

     facturaDetails.value.fechaDesde = moment(dates.value[0], "YYYYMMDD hh:mm:ss").toDate();
     facturaDetails.value.fechaHasta = moment(dates.value[1], "YYYYMMDD hh:mm:ss").toDate();

      store.buscarFacturas(facturaDetails.value)
          .then(() => {
            loading.value = false;           
          })
          .catch(() => {
              const [error] = Object.values(store.facturaErrors);
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
    }

    const  obtenerEdificioComunidad= async(id) =>{
       await storeEdificios
          .getEdificioComunidad(id)
          .then(() => {
           
            edificioDetails.value = storeEdificios.currentEdificio;   
            console.log("el currentEdificio =>" + JSON.stringify(storeEdificios.currentEdificio) )        
          })
          .catch(() => {
            const [error] = Object.values(storeEdificios.edificioErrors);
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


    const dates = ref([ moment().add(-150, 'days').toDate(), moment().toDate()]);

    const exportCSV = () => {
        dt.value.exportCSV();
    }
    const visibleFull = ref(false);
    const search = ref(null);
    const loading = ref(true);

    const facturaDetails = ref<IFactura>({
      numeroFactura : 0,
			fechaCreacion : moment().toDate(),
			montoNeto :0,// store.currentFactura.montoNeto,
			iva :0,//store.currentFactura.iva,
			montoTotal :0,// store.currentFactura.montoTotal,			
			estado : "",// store.currentFactura.estado,
      rutRazonSocial :0,
      totalComisiones:0,
      fechaDesde : null,
      fechaHasta:null,
      nombreEdificio :'',
      codigoEdificio:''
  });

  const edificioDetails = ref<IEdificio>({
      codigoEdificio : storeEdificios.currentEdificio.codigoEdificio,
			codigoArea : storeEdificios.currentEdificio.codigoArea,
			nombre : storeEdificios.currentEdificio.nombre,
			codigoPais : storeEdificios.currentEdificio.codigoPais,
			pais : storeEdificios.currentEdificio.pais,
			direccion : storeEdificios.currentEdificio.direccion,
			ciudad : storeEdificios.currentEdificio.ciudad,
			comuna : storeEdificios.currentEdificio.comuna,
			centroCosto : storeEdificios.currentEdificio.centroCosto,
			rutRazonSocial : storeEdificios.currentEdificio.rutRazonSocial,
      fechaDesde : storeEdificios.currentEdificio.fechaDesde,
      fechaHasta : storeEdificios.currentEdificio.fechaHasta,
      tipoCuenta:storeEdificios.currentEdificio.tipoCuenta,
      numeroCuenta:storeEdificios.currentEdificio.numeroCuenta,      
      banco : storeEdificios.currentEdificio.banco,
      correoContacto :storeEdificios.currentEdificio.correoContacto,
      emailNotificacion : storeEdificios.currentEdificio.emailNotificacion,
      maquinasInstaladas : storeEdificios.currentEdificio.maquinasInstaladas,
  });


    return {dates,edificioDetails,
      facturaDetails,buscarFacturas,
      selectedFacturas,
      loading,
      buscadorValidator,
      submitButton1,
      allFacturas,allFacturasFiltro,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      factura,
      editFactura,
      deleteFacturaDialog,
      deleteFacturasDialog
    };
  },
});
</script>

<style >
.color-payment{
  color: #00ced1 !important;
}

.p-accordion-header-text {
    line-height: 1;
    color: #00ced1 !important;
    font-weight: bold;
}

.p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
    margin-right: 0.5rem;
    color: #00ced1 !important;
}
  
</style>
	
	export default {
	  state,
	  actions,
	  mutations
	};

