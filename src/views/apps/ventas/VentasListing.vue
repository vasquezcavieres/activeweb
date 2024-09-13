<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title color-payment"><strong> Ventas Realizaddas</strong></div>
      <!--begin::Card title-->
    </div>
    
    <!--end::Card header-->    
    <div class="row">
              <div class="d-flex justify-content-between"> 
                  <div class="card w-100 ">
                  <!--begin::Card header-->
                  <div class="card-header mt-2">
                    <!--begin::Card title-->
                    <div class="">
                      <Prime-Calendar v-model="dates" selectionMode="range" :manualInput="false"  :showIcon="true"/>
                      <Prime-Button icon="pi pi-refresh" severity="info" aria-label="User" class="ms-2" @click="getVentas"  />
                  </div>
                    <!--end::Card title-->
                  </div>
                  <!--end::Card header-->
                </div>
              </div>
            </div>
    <!--begin::Card body-->
    <div class="card-body pt-0">
      <DataTable
        :value="allPagos"
        :paginator="true"
        :rows="10"        
        dataKey="pagoId"
        :rowHover="true"
        v-model:selection="selectedPagos"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"   
        responsiveLayout="scroll"
      >
        <template #empty> No existen datos. </template>
        <template #loading> Cargando información. Por favor espere. </template>
   
        <Column
          field="vendedorId"
          header="Vendedor Id"
          sortable
          style="min-width: 10rem"
        >
          <template #body="{ data }">
            {{ data.vendedorId }}
          </template>
        </Column>
                <Column
          field="codigoMedioPago"
          header="Cód. Medio Pago"
          sortable
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            {{ data.codigoMedioPago }}
          </template>
        </Column>
        <Column
          field="numeroOrden"
          header="N° Orden"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.numeroOrden }}
          </template>

        </Column>
                <Column
          field="emailCliente"
          header="Email Cliente"
          sortable
          style="min-width: 12rem"
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
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            {{ data.nombreCliente }}
          </template>
        </Column>
                <Column
          field="montoPago"
          header="Monto Pago"
          sortable
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.montoPago) }}
          </template>
        </Column>
                <Column
          field="fechaTransaccion"
          header="Fecha Transacción"
          sortable
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            {{ formatDate( data.fechaTransaccion )}}
          </template>>
        </Column>
                <Column
          field="codigoEdificio"
          header="Cód. Edificio"
          sortable
          style="min-width: 10rem"
        >
          <template #body="{ data }">
            {{ data.codigoEdificio }}
          </template>
        </Column>
        <Column
          field="codigoArea"
          header="Cód. Area"
          sortable
          style="min-width: 10rem"
        >
          <template #body="{ data }">
            {{ data.codigoArea }}
          </template>
        </Column>
                <Column
          field="nombreEdificio"
          header="Nombre Edificio"
          sortable
          style="min-width: 15rem"
        >
          <template #body="{ data }">
            {{ data.nombreEdificio }}
          </template>
        </Column>
                <Column
          field="direccionEdificio"
          header="Dirección Edificio"
          sortable
          style="min-width: 15rem"
        >
          <template #body="{ data }">
            {{ data.direccionEdificio }}
          </template>
        </Column>
                <Column
          field="ciudadEdificio"
          header="Ciudad Edificio"
          sortable
          style="min-width: 13rem"
        >
          <template #body="{ data }">
            {{ data.ciudadEdificio }}
          </template>          
        </Column>
                <Column
          field="comunaEdificio"
          header="Comuna Edificio"
          sortable
          style="min-width: 13rem"
        >
          <template #body="{ data }">
            {{ data.comunaEdificio }}
          </template>        
        </Column>
                <Column
          field="centroCosto"
          header="Centro Costo"
          sortable
          style="min-width: 13rem"
        >
          <template #body="{ data }">
            {{ data.centroCosto }}
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
        </Column>
                <Column
          field="fechaPago"
          header="Fecha Pago"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ formatDate(data.fechaPago) }}
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
        </Column>

                <Column
          field="numeroBoleta"
          header="N° Boleta"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.numeroBoleta }}
          </template>         
        </Column>
      </DataTable>
    </div>
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
import { useEdificioStore, type IEdificio } from "@/stores/edificio";
import type { IPago } from "@/stores/pago";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");
import Calendar from 'primevue/calendar';

export default defineComponent({
  name: "pago-list",
  components: {
    DataTable,
    Column,
    Calendar
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const selectedPagos = ref(null);
    const pago = ref<IPago>();
    const store = usePagoStore();
    const storeEdificios = useEdificioStore();
    const authStore = useAuthStore();
    const id = ref(null);
    const route = useRoute();

    onMounted(() => {
      buscarVentas();
    });

    const buscarVentas = async () => {
      var codigo = currentUser.value.codigoRol == "ADMINISTRADOR" ? 0 : currentUser.value.rutUsuario;
      let codigoEdificio =  null;

      if(currentUser.value.codigoRol == "COMUNIDAD")
      {
        await  obtenerEdificioComunidad(currentUser.value.rutUsuario)
        codigoEdificio = edificioDetails.value.codigoEdificio;
        codigo = 0;
      }

      var pagoModel = {
        codigoConvenio : codigo,
        fechaDesde : moment(dates.value[0], "YYYYMMDD hh:mm:ss").toDate(),
        fechaHasta : moment(dates.value[1], "YYYYMMDD hh:mm:ss").toDate(),
        codigoEdificio : codigoEdificio
      };

      store.buscarVentas(pagoModel as unknown as IPago)
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

    const getVentas = () => {
      buscarVentas();
    }    
    
    const dates = ref([ moment().add(-150, 'days').toDate(), moment().toDate()]);

    const exportCSV = () => {
        dt.value.exportCSV();
    }
    const visibleFull = ref(false);
    const search = ref(null);
    const loading = ref(true);

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



    return {
      getVentas,
      dates,
      selectedPagos,
      loading,
      buscarVentas,
      submitButton1,
      allPagos,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      pago,

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

