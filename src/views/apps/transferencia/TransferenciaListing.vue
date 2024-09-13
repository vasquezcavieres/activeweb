<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header  pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="color-payment">Transferencias</h2>        
      </div>
      <!--begin::Card title-->
    </div>
    <!--end::Card header-->
    <div class="row">
              <div class="d-flex justify-content-between"> 
                  <div class="card w-100 ">
                  <!--begin::Card header-->
                  <div class="mt-5">
                    <!--begin::Card title-->
                    <div class="ms-10">
                      <Prime-Calendar v-model="dates" selectionMode="range" :manualInput="false"  :showIcon="true"/>
                      <Prime-Button icon="pi pi-refresh" severity="info" aria-label="User" class="ms-2" @click="getTransferencias"  />
                  </div>
                    <!--end::Card title-->
                  </div>
                  <!--end::Card header-->
                </div>
              </div>
            </div>
    <!--begin::Card body-->
    <div class="card-body pt-0 mt-5">
      <DataTable
        :value="allTransferencias"
        :paginator="true"
        :rows="10"        
        dataKey="transferenciaId"
        :rowHover="true"
        v-model:selection="selectedTransferencias"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        responsiveLayout="scroll"
      >
        <template #empty> No existen datos. </template>
        <template #loading> Cargando información. Por favor espere. </template>
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
          header="Costo Comisión"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ formatCurrency(data.costoComision) }}
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
          field="estado"
          header="Estado"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            <Badge :severity="estiloEstado(data.estado)">{{ data.estado }}</Badge>  
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
              @click="editTransferencia(slotProps.data)"
            />
            <Prime-Button icon="pi pi-check" class="p-button-rounded p-button-warning ms-2" @click="confirmAprobarTransferencia(slotProps.data)" />
          </template>
        </Column>
      </DataTable>
    </div>
    <!--end::Card body-->
    <Dialog v-model:visible="aprobarTransferenciaDialog" :style="{width: '450px'}" header="Confirmar" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="transferencia" class="ms-5">¿ Está seguro de aprobar la Transferencia  N° <b>{{transferencia.transferenciaId}}</b> ?</span>
        </div>
        <template #footer>
            <Prime-Button label="No" icon="pi pi-times" class="p-button-text" @click="aprobarTransferenciaDialog = false"/>
            <Prime-Button label="Sí" icon="pi pi-check" class="p-button-text" @click="aprobarTransferencias" />
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
import { useTransferenciaStore } from "@/stores/transferencia";
import { useEdificioStore, type IEdificio } from "@/stores/edificio";
import type { ITransferencia } from "@/stores/transferencia";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");
import Dialog from 'primevue/dialog';
import Badge from 'primevue/badge';

export default defineComponent({
  name: "transferencia-list",
  components: {
    DataTable,
    Column,
    Dialog,
    Badge
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const aprobarTransferenciaDialog = ref(false);
    const selectedTransferencias = ref(null);
    const transferencia = ref<ITransferencia>();
    const storeEdificios = useEdificioStore();
    const store = useTransferenciaStore();
    const authStore = useAuthStore();
    const route = useRoute();

    onMounted(() => {
      buscarTransferencias();
    });

    const buscarTransferencias = async () => {
      let codigoConvenio =  currentUser.value.codigoRol == "ADMINISTRADOR" ? 0 : currentUser.value.rutUsuario;
      let codigoEdificio =  null;

      if(currentUser.value.codigoRol == "COMUNIDAD")
      {
       await  obtenerEdificioComunidad(currentUser.value.rutUsuario)
       codigoEdificio = edificioDetails.value.codigoEdificio;
       codigoConvenio = 0;
      }

      let transferenciaModel = {
        codigoConvenio : codigoConvenio,
            fechaDesde : moment(dates.value[0], "YYYYMMDD hh:mm:ss").toDate(),
            fechaHasta : moment(dates.value[1], "YYYYMMDD hh:mm:ss").toDate(),
            codigoEdificio :codigoEdificio
          };
      store.getAllTransferencias(transferenciaModel as unknown as ITransferencia)
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          const [error] = Object.values(store.transferenciaErrors);
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
      const newJson = store.allTransferencias.map((rec) => {
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
        saveAsExcelFile(excelBuffer, "transferencia");
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
    const allTransferencias = computed(() => {
      return store.allTransferencias;
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

    const editTransferencia = (element) => {
      router.push({
        name: "apps-detalleTransferencia-listing",
        params: { id :element.transferenciaId, },
      });
    };
    const confirmAprobarTransferencia = (element) => {
        transferencia.value = element;
        aprobarTransferenciaDialog.value = true;
    };

    const aprobarTransferencias = () => {        
        aprobarTransferenciaDialog.value = false;
        store.aprobarTransferencia(transferencia.value)
          .then(() => {
            Swal.fire({
              text: "Transferencia Aprobada !",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              transferencia.value = undefined;
              buscarTransferencias();
            });
          })
          .catch(() => {
              const [error] = Object.values(store.transferenciaErrors);
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

    const exportCSV = () => {
        dt.value.exportCSV();
    }
    const visibleFull = ref(false);
    const search = ref(null);
    const loading = ref(true);

    const estiloEstado = (estado) =>{
      if(estado == 'APROBADO')
        return 'success';
      else
        return 'warning';
    }

    const dates = ref([ moment().add(-150, 'days').toDate(), moment().toDate()]);

    const getTransferencias = () => {

    };

    return {
      dates,
      getTransferencias,
      estiloEstado,
      selectedTransferencias,
      loading,
      buscarTransferencias,
      submitButton1,
      allTransferencias,
       visibleFull,
      exportExcel,
      formatDate,
      formatCurrency,
      confirmAprobarTransferencia,
      aprobarTransferencias,
      transferencia,
      editTransferencia,
      aprobarTransferenciaDialog
    };
  },
});
</script>


<style >
.color-payment{
  color:#00ced1 !important;
}


.p-dialog .p-dialog-header .p-dialog-title {
    font-weight: 700;
    font-size: 1.25rem;
    color:#00ced1 !important;
}
  
</style>
	
	export default {
	  state,
	  actions,
	  mutations
	};

