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
                          <h1 class="font-weight-bold">{{ formatCurrency( dashboardSinFacturarDetails?.ventasTotales)  }}</h1>
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
                            <h2 class="color-payment">Comisiones Estimadas</h2>
                          </div>
                          <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0 mt-5">
                          <h1 class="font-weight-bold"> {{  formatCurrency(dashboardSinFacturarDetails.comisiones)  }} </h1>
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
                          <h1 class="font-weight-bold">{{  formatCurrency( dashboardSinFacturarDetails.montosTransferir)  }}</h1>
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
              <div class="d-flex justify-content-between"> 
                  <div class="card w-100 card-border">
                  <!--begin::Card header-->
                  <div class="card-header mt-2">
                    <!--begin::Card title-->
                    <div class="">
                      <Prime-Calendar v-model="dates" selectionMode="range" :manualInput="false"  :showIcon="true"/>
                      <Prime-Button icon="pi pi-refresh" severity="info" aria-label="User" class="ms-2" @click="getAllDashboard"  />
                  </div>
                    <!--end::Card title-->
                  </div>
                  <!--end::Card header-->
                </div>
              </div>
            </div>
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
                            <h2 class="color-payment">Comisiones Estimadas</h2>
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
                <div class="col-md-12"> 
                    <div class="card col-12">
                      <div class="card card-border">
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
                            <!-- <template #header>
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
                            </template> -->

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
                            <Column
                              field="ventas"
                              header="Ventas"
                              sortable
                              style="min-width: 9rem"
                            >
                              <template #body="{ data }">
                                {{ data.ventas }}
                              </template>          
                            </Column>
                            <Column
                              field="MaquinasInstaladas"
                              header="Máquinas Instaladas"
                              sortable
                              style="min-width: 9rem"
                            >
                              <template #body="{ data }">
                                {{ data.maquinasInstaladas }}
                              </template>          
                            </Column>
                
                            <Column field="destacado" header="Acciones" dataType="boolean" style="min-width: 6rem">
                              <template #body="{ data }">
                                <router-link
                                            :to="{name: 'apps-edificio-Detalle',params: { id : data.codigoEdificio }}"
                                            class="menu-link px-3"
                                            >Ver Detalle</router-link
                                          >
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
                <div class="col-md-12"> 
                    <div class="card col-12">               
                    <div class="card card-border">
                      <div class="">
                        <!--begin::Card header-->
                        <div class="card-header">
                          <!--begin::Card title-->
                          <div class="card-title">
                            <h2 class="color-payment">Transferencias Realizadas</h2>
                          </div>
                          <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0 mt-5">
                          <DataTable
                            :value="allTransferencias"
                            :paginator="true"
                            :rows="10"                        
                            dataKey="transferenciaId"
                            :rowHover="true"                
                            v-model:filters="filtersTransferencias"
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
                                    v-model="filtersTransferencias['global'].value"
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
                              field="totalTransferencia"
                              header="Total Transferencia"
                              sortable
                              style="min-width: 9rem"
                            >
                              <template #body="{ data }">
                                {{ data.totalTransferencia }}
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
                                {{ data.costoComision }}
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
                              field="fechaTransferencia"
                              header="Fecha Transferencia"
                              sortable
                              style="min-width: 9rem"
                            >
                              <template #body="{ data }">
                                {{ data.fechaTransferencia }}
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
  import { useEdificioStore, type IEdificio } from "@/stores/edificio";
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
  import { reinitializeComponents } from "@/core/plugins/keenthemes";
  moment.locale("es");
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
      Menu
    },
    
    setup() {
      const router = useRouter();
      const storeDashboard = useDashboardStore();
      const store = useConvenioStore();
      const storeEdificios = useEdificioStore();
      const storeTransferenciaStore = useTransferenciaStore();
      const authStore = useAuthStore();
      const submitButton1 = ref<HTMLElement | null>(null);
      const conveniosValidator = Yup.object().shape({
        rutRazonSocial: Yup.string().required("Es obligatorio").label("Rut Razon Social"),        
      });  
   
      const route = useRoute();
      //const id = route.params.id;
      console.log("USUARIO LOGUEADO =>" +  JSON.stringify(authStore.user));


      onMounted(async () => {        
       // console.log("antes de l convenio");
       await obtenerConvenio(authStore.user.rutUsuario) ; 
       // console.log("despues de l convenio");

       // console.log("antes de edifico");
        getEdificiosConvenio(convenioDetails.value.rutRazonSocial);
       // console.log("despues de edifico");

        getDashboard(convenioDetails.value.rutRazonSocial);
        getDashboardSinFacturar(convenioDetails.value.rutRazonSocial);
        buscarTransferencias();
      });

      const getAllDashboard=()=>{
        getDashboard(convenioDetails.value.rutRazonSocial);
        getDashboardSinFacturar(convenioDetails.value.rutRazonSocial);
        getEdificiosConvenio(convenioDetails.value.rutRazonSocial);
      }
  
     const  obtenerConvenio = async(id) =>{
       await store
          .getConvenioAdministrador(id)
          .then(() => {
            loading = ref(false);
            convenioDetails.value = store.currentConvenio;   
            console.log("el convenio =>" + JSON.stringify(store.currentConvenio) )        
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

          
      const getEdificiosConvenio = (rutRazonSocial) => {
          var edificio = {
            rutRazonSocial : rutRazonSocial,
            fechaDesde : moment(dates.value[0], "YYYYMMDD hh:mm:ss").toDate(),
            fechaHasta : moment(dates.value[1], "YYYYMMDD hh:mm:ss").toDate()
          }

        storeEdificios.obtenerEdificios(edificio as IEdificio)
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

      const getDashboard = (codigoConvenio) => {
      dashboardDetails.value.codigoConvenio = convenioDetails.value.rutRazonSocial as unknown as number;
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

    const getDashboardSinFacturar = (codigoConvenio) => {
      dashboardSinFacturarDetails.value.codigoConvenio = convenioDetails.value.rutRazonSocial as unknown as number;
      dashboardSinFacturarDetails.value.fechaDesde = moment(dates.value[0], "YYYYMMDD hh:mm:ss").toDate();
      dashboardSinFacturarDetails.value.fechaHasta = moment(dates.value[1], "YYYYMMDD hh:mm:ss").toDate();

      storeDashboard.buscarDashboardSinFacturar(dashboardSinFacturarDetails.value)
      .then(() => {
        loading.value = false;    
        dashboardSinFacturarDetails.value = storeDashboard.currentDashboardSinFacturar;
           
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
  
      let loading = ref(true);

      const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const filtersTransferencias= ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const allEdificios = computed(() => {
      return storeEdificios.allEdificiosConvenio;
    });


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

    const allTransferencias = computed(() => {
      return storeTransferenciaStore.allTransferencias;
    });

    const dashboardDetails = ref<IDashboard>({
      ventasTotales : storeDashboard.currentDashboard.ventasTotales,
			comisiones :storeDashboard.currentDashboard.comisiones,
      codigoConvenio: storeDashboard.currentDashboard.codigoConvenio,
			montosTransferir :storeDashboard.currentDashboard.montosTransferir,
			rutRazonSocial :storeDashboard.currentDashboard.rutRazonSocial,
			fechaDesde : storeDashboard.currentDashboard.fechaDesde,
      fechaHasta: storeDashboard.currentDashboard.fechaHasta,
    });

    const dashboardSinFacturarDetails = ref<IDashboard>({
      ventasTotales : storeDashboard.currentDashboardSinFacturar.ventasTotales,
			comisiones :storeDashboard.currentDashboardSinFacturar.comisiones,
      codigoConvenio: storeDashboard.currentDashboardSinFacturar.codigoConvenio,
			montosTransferir :storeDashboard.currentDashboardSinFacturar.montosTransferir,
			rutRazonSocial :storeDashboard.currentDashboardSinFacturar.rutRazonSocial,
			fechaDesde : storeDashboard.currentDashboardSinFacturar.fechaDesde,
      fechaHasta: storeDashboard.currentDashboardSinFacturar.fechaHasta,
    });
  
    const dates = ref([ moment().add(-365, 'days').toDate(), moment().toDate()]);
    
        


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

      return {
        dashboardSinFacturarDetails,
        getDashboardSinFacturar,
        dashboardDetails,dates,getDashboard,formatCurrency,getAllDashboard,
        buscarTransferencias,allTransferencias,
        toggle,menu,
        allEdificios,
        filters1,
        filtersTransferencias,
        getEdificiosConvenio,
        submitButton1,
        convenioDetails,
        conveniosValidator
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
  color:#00ced1;
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

  </style>
  
      
      export default {
        state,
        actions,
        mutations
      };
  
  