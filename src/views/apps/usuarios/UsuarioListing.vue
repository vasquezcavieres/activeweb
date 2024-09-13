<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title color-payment"> <strong>Usuarios</strong> </div>
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
            :to="{name:'apps-usuario-comunidad-create'}"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Nuevo Usuario
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
        :value="allUsuarios"
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
        <Column
          field="rutUsuario"
          header="Rut Usuario"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.rutUsuario }} - {{ data.rutUsuarioDv }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Rut Usuario"
            />
          </template>
        </Column>
                <Column
          field="codigoPais"
          header="Codigo Pais"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.codigoPais }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Codigo Pais"
            />
          </template>
        </Column>
                <Column
          field="pais"
          header="País"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.pais }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Pais"
            />
          </template>
        </Column>
                <Column
          field="codigoRol"
          header="Código Rol"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.codigoRol }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Codigo Rol"
            />
          </template>
        </Column>
                <Column
          field="nombres"
          header="Nombres"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.nombres }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Nombres"
            />
          </template>
        </Column>
                <Column
          field="apellidos"
          header="Apellidos"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.apellidos }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Apellidos"
            />
          </template>
        </Column>
                <Column
          field="email"
          header="Email"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.email }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Email"
            />
          </template>
        </Column>
                <Column
          field="telefono"
          header="Telefono"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.telefono }}
          </template>
          <template #filter="{ filterModel }">
            <InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Telefono"
            />
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 13rem">
          <template #body="slotProps">
            <Prime-Button            
            class="p-button-rounded p-button-success mr-2 ms-2"
              icon="pi pi-pencil"
              @click="editarUsuario(slotProps.data)"              
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
import { useUsuarioStore } from "@/stores/usuario";
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
    const store = useUsuarioStore();
    const authStore = useAuthStore();
    const id = ref(null);
    onMounted(() => {
      buscarUsuariosComunidad();
    });
    const buscadorValidator = Yup.object().shape({});
    const buscarUsuariosComunidad = () => {
      store.getUsuarios()
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          const [error] = Object.values(store.usuarioErrors);
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
      const newJson = store.allUsuarios.map((rec) => {
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
    const allUsuarios = computed(() => {
      return store.allUsuarios;
    });

    const editarUsuario = (element) => {
      router.push({
        name: "apps-usuario-edit",
        params: { id :element.tokenUsuario, },
      });
    };
    
    const editConvenio = (element) => {
      router.push({
        name: "apps-convenio-edit",
        params: { id :element.rutRazonSocial, },
      });
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
      buscarUsuariosComunidad,
      submitButton1,
      allUsuarios,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      convenio,
      editConvenio,
      editarUsuario,
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

