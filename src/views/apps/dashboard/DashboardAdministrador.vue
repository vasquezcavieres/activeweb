<template>
    <!--begin::Layout-->
    <div class="d-flex flex-column flex-xl-row">
      <Toast />
      <!--begin::Content-->
      <div class="flex-lg-row-fluid">
        <!--begin::Post-->
        <div>
          <!--begin::Container-->
          <div id="kt_content_container">
            <div class="row">
              <div class="d-flex justify-content-between"> 
                  <div class="card w-100 card-border">
                  <!--begin::Card header-->
                  <div class="card-header mt-2">
                    <!--begin::Card title-->
                    <div class="">
                      <Prime-Calendar v-model="dates" selectionMode="range" :manualInput="false"  :showIcon="true"/>
                      <Prime-Button icon="pi pi-refresh" severity="info" aria-label="User" class="ms-2" @click="getDashboard"  />
                  </div>
                    <!--end::Card title-->
                  </div>
                  <!--end::Card header-->
                </div>
              </div>
            </div>
              <!--begin::Columna Izquierda-->
              <div class="row mt-5">
                <div class="col-md-4">
                  <div class="d-flex justify-content-between">
                    <div class="card w-100 card-border">
                      <div class="card">
                        <!--begin::Card header-->
                        <div class="card-header">
                          <!--begin::Card title-->
                          <div class="card-title">
                            <h2 class="color-payment">Ventas Totales</h2>
                          </div>
                          <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0 mt-5">
                          <h1 class="font-weight-bold">{{ formatCurrency( dashboardDetails?.ventasTotales)  }}</h1>
                          <!-- <p>Información al  : 08/11/2023</p>                          -->
                        </div>
                        <!--end::Card body-->
                      </div>  
                    </div>
                  </div>
                </div>
                <div class="col-md-4 margin-top-mobile">
                  <div class="d-flex justify-content-between">
                    <div class="card w-100 card-border">
                      <div class="card">
                        <!--begin::Card header-->
                        <div class="card-header">
                          <!--begin::Card title-->
                          <div class="card-title">
                            <h2 class="color-payment">Comisiones</h2>
                          </div>
                          <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0 mt-5">
                          <h1 class="font-weight-bold"> {{  formatCurrency(dashboardDetails.comisiones)  }} </h1>
                          <!-- <p>Información al  : 08/11/2023</p>                          -->
                        </div>
                        <!--end::Card body-->
                      </div>  
                    </div>
                  </div>
                </div>
                <div class="col-md-4 margin-top-mobile">
                  <div class="d-flex justify-content-between">
                    <div class="card w-100 card-border">
                      <div class="card">
                        <!--begin::Card header-->
                        <div class="card-header">
                          <!--begin::Card title-->
                          <div class="card-title">
                            <h2 class="color-payment">Montos a Transferir</h2>
                          </div>
                          <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0 mt-5">
                          <h1 class="font-weight-bold">{{  formatCurrency( dashboardDetails.montosTransferir)  }}</h1>
                          <!-- <p>Información al  : 08/11/2023</p>                          -->
                        </div>
                        <!--end::Card body-->
                      </div>  
                    </div>
                  </div>
                </div>
                <!--end::Columna Izquierda-->
              </div>
              <div class="row mt-5">
                <div class="col-md-4">
                  <div class="d-flex justify-content-between">
                    <div class="card w-100 card-border">
                      <!--begin::Card body-->
                      <div class="text-center pt-0">
                        <!-- <button class="btn pi pi-fw pi-user-plus boton-menu"></button> -->
                        <router-link
                            class="btn pi pi-fw pi-user-plus boton-menu"
                            :to="{name:'apps-convenio-create'}"
                          >
                          </router-link>
                      </div>
                      <div class="card-footer">
                        <!--begin::Card title-->
                        <div>
                          <p>Crear Convenio</p>
                        </div>
                        <!--end::Card title-->
                      </div>
                      <!--end::Card body-->
                    </div>                   
                    <div class="card w-100 ms-10 card-border">
                      <!--begin::Card body-->
                      <div class="text-center pt-0">
                        <!-- <button class="btn pi pi-fw pi-building boton-menu"></button> -->
                        <router-link
                            class="btn pi pi-fw pi-building boton-menu"
                            :to="{name:'apps-edificio-create'}"
                          >
                          </router-link>
                      </div>
                      <!--end::Card body-->
                      <div class="card-footer">
                        <!--begin::Card title-->
                        <div>
                          <p>Crear Edificio </p>
                        </div>
                        <!--end::Card title-->
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between mt-5" style="visibility: hidden;">
                    <div class="card w-100 card-border">
                    <!--begin::Card header-->
                    <div class="card-header">
                      <!--begin::Card title-->
                      <div class="card-title">
                        <h2 class="color-payment">Transferencias</h2>
                      </div>
                      <!--end::Card title-->
                    </div>
                    <!--end::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body pt-0 mt-5">
                      <DataTable
                             v-model:selection="selectedProduct" 
                             @rowSelect="onRowSelect"
                             selectionMode="single" 
                            :value="allTransferencias"
                            :paginator="true"
                            :rows="10"                        
                            dataKey="transferenciaId"
                            :rowHover="true"                
                            v-model:filters="filters1"
                            :loading="loading"
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                            :rowsPerPageOptions="[10, 25, 50]"
                            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
                            :globalFilterFields="[
                              'transferenciaId'
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
                              field="montoTransferencia"
                              header="Monto Transferido"
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
                                  placeholder="Total Transferencia"
                                />
                              </template>
                            </Column> 
                            <Column field="destacado" header="Acciones" dataType="boolean" style="min-width: 6rem">
                              <template #body="{ data }">
                                  <a
                                      href="#;"
                                      class=""
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                      data-kt-menu-flip="top-end"
                                      >Acciones
                                      <KTIcon icon-name="down" icon-class="fs-5 m-0" />
                                    </a>
                                    <!--begin::Menu-->
                                    <div
                                      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <!--begin::Menu item-->
                                      <div class="menu-item px-3 d-flex flex-row align-items-center">
                                        <i class="fa-regular fa-eye mr-2"></i>                     
                                        <router-link
                                            :to="{name: 'apps-detalleTransferencia-listing',params: { id : data.transferenciaId }}"
                                            class="menu-link px-3"
                                            >Ver Detalle</router-link
                                          >
                                      </div>
                                      <!--end::Menu item-->
                                      <div class="separator my-3"></div>
                                      <!-- <div class="sub px-3 d-flex flex-row align-items-center"> 
                                        <p>Descargar</p>                                       
                                      </div>
                                      <div class="separator my-3"></div> -->
                                      <!--begin::Menu item-->
                                      <div class="menu-item px-3 d-flex flex-row align-items-center">
                                        <i class="fa-regular fa-eye mr-2"></i>
                                        <a  class="menu-link px-3"
                                          >Detalle</a
                                        >
                                      </div>
                                      <!--end::Menu item-->
                                      <!--begin::Menu item-->
                                      <div class="menu-item px-3 d-flex flex-row align-items-center">
                                        <i class="fa-regular fa-eye mr-2"></i>
                                        <a  class="menu-link px-3"
                                          >Factura</a
                                        >
                                      </div>
                                      <!--end::Menu item-->
                                    </div>
                                    <!--end::Menu-->
                              </template>           
                          </Column>            
                          </DataTable>
                    </div>
                    <!--end::Card body-->
                    </div>
                  </div>
                </div>
                <div class="col-md-8 margin-top-mobile">                           
                    <div class="d-flex justify-content-between">
                      <div class="card w-100 card-border">
                        <!--begin::Card header-->
                        <div class="card-header">
                          <!--begin::Card title-->
                          <div class="card-title">
                            <h2 class="color-payment">Edificios</h2>
                          </div>
                          <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0 mt-5">
                          <DataTable
                        :value="allEdificios"
                        :paginator="true"
                        :rows="10"                        
                        dataKey="codigoEdificio"
                        :rowHover="true"                     
                        v-model:filters="filters1"
                        :loading="loading"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        :rowsPerPageOptions="[10, 25, 50]"
                        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
                        :globalFilterFields="[
                          'codigoEdificio'
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
                          field="nombre"
                          header="Nombre Edificio"
                          sortable
                          style="min-width: 9rem"
                        >
                          <template #body="{ data }">
                            {{ data.nombre }}
                          </template>
                        </Column>
                        <Column field="destacado" header="Acciones" dataType="boolean" style="min-width: 6rem">
                              <template #body="{ data }">
                                  <a
                                      href="#;"
                                      class=""
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                      data-kt-menu-flip="top-end"
                                      >Acciones
                                      <KTIcon icon-name="down" icon-class="fs-5 m-0" />
                                    </a>
                                    <!--begin::Menu-->
                                    <div
                                      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <!--begin::Menu item-->
                                      <div class="menu-item px-3 d-flex flex-row align-items-center">
                                        <i class="fa-regular fa-eye mr-2"></i>                     
                                        <router-link
                                            :to="{name: 'apps-edificio-Detalle',params: { id : data.codigoEdificio }}"
                                            class="menu-link px-3"
                                            >Ver Detalle</router-link
                                          >
                                      </div>                                     
                                    </div>
                                    <!--end::Menu-->
                              </template>           
                          </Column>                        
                      </DataTable>
                        </div>
                        <!--end::Card body-->
                    </div>
                    </div>
                </div>
              </div>

              <div class="row mt-5" style="visibility: hidden;">
                <div class="d-flex justify-content-between"> 
                  <div class="card w-100 card-border">
                  <!--begin::Card header-->
                  <div class="card-header">
                    <!--begin::Card title-->
                    <div class="card-title">
                      <h2 class="color-payment">Convenios</h2>
                    </div>
                    <!--end::Card title-->
                  </div>
                  <!--end::Card header-->
                  <!--begin::Card body-->
                  <div class="card-body pt-0 mt-5 ">
                    <DataTable
                      :value="allConvenios"
                      :paginator="true"
                      :rows="10"
                      showGridlines
                      dataKey="rutRazonSocial"
                      :rowHover="true"
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
                        field="rutRazonSocial"
                        header="Rut Razon Social"
                        sortable
                        style="min-width: 12rem"
                      >
                        <template #body="{ data }">
                          {{ data.rutRazonSocial + '-' + data.rutRazonSocialDv }}
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
                        field="nombrerazonSocial"
                        header="Nombre Razon Social"
                        sortable
                        style="min-width: 14rem"
                      >
                        <template #body="{ data }">
                          {{ data.nombrerazonSocial }}
                        </template>
                        <template #filter="{ filterModel }">
                          <InputText
                            type="text"
                            v-model="filterModel.value"
                            class="p-column-filter"
                            placeholder="Nombrerazon Social"
                          />
                        </template>
                      </Column>
                      <Column
                        field="nombreAdministradora"
                        header="Nombre Administradora"
                        sortable
                        style="min-width: 15rem"
                      >
                        <template #body="{ data }">
                          {{ data.nombreAdministradora }}
                        </template>
                        <template #filter="{ filterModel }">
                          <InputText
                            type="text"
                            v-model="filterModel.value"
                            class="p-column-filter"
                            placeholder="Nombre Administradora"
                          />
                        </template>
                      </Column>    
                              <Column
                        field="representanteLegal"
                        header="Representante Legal"
                        sortable
                        style="min-width: 15rem"
                      >
                        <template #body="{ data }">
                          {{ data.representanteLegal }}
                        </template>
                        <template #filter="{ filterModel }">
                          <InputText
                            type="text"
                            v-model="filterModel.value"
                            class="p-column-filter"
                            placeholder="Representante Legal"
                          />
                        </template>
                      </Column>
                      <Column
                        field="rutRepresentanteLegal"
                        header="Rut Representante Legal"
                        sortable
                        style="min-width: 15rem"
                      >
                        <template #body="{ data }">
                          {{ data.rutRepresentanteLegal + '-' + data.rutRepresentanteLegalDv  }}
                        </template>
                        <template #filter="{ filterModel }">
                          <InputText
                            type="text"
                            v-model="filterModel.value"
                            class="p-column-filter"
                            placeholder="Rut Representante Legal"
                          />
                        </template>
                      </Column>   
                      <Column field="destacado" header="Acciones" dataType="boolean" style="min-width: 6rem">
                              <template #body="{ data }">
                                  <a
                                      href="#;"
                                      class=""
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                      data-kt-menu-flip="top-end"
                                      >Acciones
                                      <KTIcon icon-name="down" icon-class="fs-5 m-0" />
                                    </a>
                                    <!--begin::Menu-->
                                    <div
                                      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <!--begin::Menu item-->
                                      <div class="menu-item px-3 d-flex flex-row align-items-center">
                                        <i class="fa-regular fa-eye mr-2"></i>                     
                                        <router-link
                                            :to="{name: 'apps-convenio-detalle',params: { id : data.rutRazonSocial }}"
                                            class="menu-link px-3"
                                            >Ver Detalle</router-link
                                          >
                                      </div>                                     
                                    </div>
                                    <!--end::Menu-->
                              </template>           
                          </Column>      
                    </DataTable>
                  </div>
                </div>  
                </div>
              </div>
            <!--end::Form-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::Post-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Layout-->
  </template>
  
<script lang="ts">
  import { ref, defineComponent, onMounted, computed } from "vue";
  import { ErrorMessage, Field, Form } from "vee-validate";
  import _ from "lodash";
  import { useRouter, useRoute} from "vue-router";
  import { useAuthStore } from "@/stores/auth";
  import { useConvenioStore } from "@/stores/convenio";
  import { useEdificioStore } from "@/stores/edificio";
  import { useTransferenciaStore } from "@/stores/transferencia";
  import type { IConvenio } from "@/stores/convenio";
  import * as Yup from "yup";
  import Swal from "sweetalert2/dist/sweetalert2.js";
  import moment from "moment";
  import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
  import Editor from "primevue/editor";
  import DataTable from "primevue/datatable";
  import Column from "primevue/column";
  import { FilterMatchMode, FilterOperator } from "primevue/api";
  import Menu from 'primevue/menu';
  moment.locale("es");
  import { reinitializeComponents } from "@/core/plugins/keenthemes";
  import Calendar from 'primevue/calendar';
  import { useDashboardStore } from "@/stores/dashboard";
  import type { IDashboard } from "@/stores/dashboard";

  export default defineComponent({
    name: "convenio-edit",
    components: {
      ErrorMessage,
      Field,
      Form,
      MixedWidgetImage,
      Editor,
      DataTable,
      Column ,
      Menu,
      Calendar
    },
    
    setup() {
      const router = useRouter();
      const store = useConvenioStore();
      const storeDashboard = useDashboardStore();
      const storeEdificios = useEdificioStore();
      const storeTransferenciaStore = useTransferenciaStore();
      const storeConvenio = useConvenioStore();
      const authStore = useAuthStore();
      const submitButton1 = ref<HTMLElement | null>(null);
      const conveniosValidator = Yup.object().shape({
        rutRazonSocial: Yup.string().required("Es obligatorio").label("Rut Razon Social"),        
      });  
   
      const route = useRoute();
      const id = route.params.id;    

      onMounted(async () => {     
        console.log("antes await dash =>" );
        await  getDashboard();
        console.log("despues await dash =>" );
        getEdificios();
        buscarTransferencias();
       // buscarConvenios();
      }); 
          
    const getEdificios = () => {
      storeEdificios.getEdificiosAsociados()
        .then(() => {
          loading.value = false;
          reinitializeComponents();
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

    
    const getDashboard = () => {
      dashboardDetails.value.fechaDesde = moment(dates.value[0], "YYYYMMDD hh:mm:ss").toDate();
      dashboardDetails.value.fechaHasta = moment(dates.value[1], "YYYYMMDD hh:mm:ss").toDate();

      storeDashboard.buscarDashboard(dashboardDetails.value)
      .then(() => {
        loading.value = false;    
        dashboardDetails.value = storeDashboard.currentDashboard;
        console.log("dashboardDetails => " +JSON.stringify(dashboardDetails))       
      })
      .catch(() => {
          const [error] = Object.values(storeDashboard.dashboardErrors);
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
      
      const convenioDetails = ref<IConvenio>({
        rutRazonSocial : store.currentConvenio.rutRazonSocial,
        rutRazonSocialDv : store.currentConvenio.rutRazonSocialDv,
        nombrerazonSocial : store.currentConvenio.nombrerazonSocial,
        nombreAdministradora : store.currentConvenio.nombreAdministradora,
        direccion : store.currentConvenio.direccion,
        comuna : store.currentConvenio.comuna,
        region : store.currentConvenio.region,
        representanteLegal : store.currentConvenio.representanteLegal,
        rutRepresentanteLegal : store.currentConvenio.rutRepresentanteLegal,
        rutRepresentanteLegalDv : store.currentConvenio.rutRepresentanteLegalDv,
        numeroCuenta : store.currentConvenio.numeroCuenta,
        tipoCuenta : store.currentConvenio.tipoCuenta,
        banco : store.currentConvenio.banco,
        correoContacto : store.currentConvenio.correoContacto,
        vendedorId : store.currentConvenio.vendedorId,
        porcentajeComision : store.currentConvenio.porcentajeComision,
        emailNotificacion : store.currentConvenio.emailNotificacion,
        rutAdministrador : store.currentConvenio.rutAdministrador      ,
        minimoGarantizadoComision : store.currentConvenio.minimoGarantizadoComision
    });

    
    const dashboardDetails = ref<IDashboard>({
      ventasTotales : storeDashboard.currentDashboard.ventasTotales,
			comisiones :storeDashboard.currentDashboard.comisiones,
      codigoConvenio: storeDashboard.currentDashboard.codigoConvenio,
			montosTransferir :storeDashboard.currentDashboard.montosTransferir,
			rutRazonSocial :storeDashboard.currentDashboard.rutRazonSocial,
			fechaDesde : storeDashboard.currentDashboard.fechaDesde,
      fechaHasta: storeDashboard.currentDashboard.fechaHasta,
      codigoEdificio :storeDashboard.currentDashboard.codigoEdificio
    });
  
      let loading = ref(true);

      const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const allEdificios = computed(() => {
      return storeEdificios.allEdificios;
    });


const menuEdificios= ref();
const toggleEdificios = (event) => {
  menuEdificios.value.toggle(event);
};


const menu = ref();
const toggle = (event) => {
    menu.value.toggle(event);
};

const buscarTransferencias = () => {
    storeTransferenciaStore.getTransferencias()
        .then(() => {
          loading.value = false;
          reinitializeComponents();
        })
        .catch(() => {
          const [error] = Object.values(storeTransferenciaStore.transferenciaErrors);
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

    const buscarConvenios = () => {
      store.getConvenios()
        .then(() => {
          loading.value = false;
          reinitializeComponents();
        })
        .catch(() => {
          const [error] = Object.values(store.convenioErrors);
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

    const allTransferencias = computed(() => {
      return storeTransferenciaStore.allTransferencias;
    });

    const allConvenios = computed(() => {
      return store.allConvenios;
    });

    const formatDate = (value) => {
      value = new Date(value);
      return value.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };
    const formatCurrency = (value) => {
      if(value != undefined)
      {      return value.toLocaleString("es-CL", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              style: "currency",
              currency: "CLP",
            });
      }
      else
      {
        return "$ 0";
      }
    };

    const dates = ref([ moment().add(-365, 'days').toDate(), moment().toDate()]);

    return {buscarConvenios,allConvenios,formatDate,formatCurrency,
      buscarTransferencias,allTransferencias,
      menuEdificios,toggleEdificios,
      allEdificios,
      filters1,
      getEdificios,
      submitButton1,
      convenioDetails,
      conveniosValidator,
       dates,
       dashboardDetails,
       getDashboard
    };
    },
  });
  
  
</script>

<style >

  .boton-menu {
      font-size: 80px !important;
      color: #00ced1;
  }

  .color-payment{
    color: #00ced1;
  }

  @media (max-width: 576px) {
    .margin-top-mobile {
      margin-top : 20px !important;
    }
  }

  .card .card-header {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      flex-wrap: wrap;
      min-height: 50px !important;
      padding: 0 2.25rem;
      color: var(--bs-card-cap-color);
      background-color: var(--bs-card-cap-bg);
      border-bottom: 1px solid var(--bs-card-border-color);
  }

  .card-border {
      border: 0;
      border-left: 6px solid #00bcd4;
  }

  .card .card-footer {
      padding: 1rem 1rem;
      color: var(--bs-card-cap-color);
      background-color: var(--bs-card-cap-bg);
      border-top: 1px solid var(--bs-card-border-color);
  }

  .p-menu .p-menuitem > .p-menuitem-content {
    color: #495057;
    transition: box-shadow 0.2s;
    border-radius: 0;
    margin-top: 2px;
}

.sub{
    margin: 0;
    color: #343a40;
    background: #ffffff;
    font-weight: 700 !important;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}

</style>
  
      
export default {
  state,
  actions,
  mutations
};
  