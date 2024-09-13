<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title color-payment"><strong>Buscar Notas de Créditos Emitidas</strong></div>
      <!--begin::Card title-->
    </div>
    <!--end::Card header-->
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-3">
          <!--begin::Label-->
          <label class="form-label">N° Nota de Crédito </label>
          <!--end::Label-->
          <!--begin::Input-->
          <Field
            type="number"
            maxlength="10"
            name="numeroNotaCredito"
            class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
            placeholder="N° Factura"
            v-model="facturaDetails.numeroNotaCredito"
          />
        </div>
        <div class="col-6">   
          <label class="form-label "></label>      
          <div>
            <Prime-Button icon="pi pi-search" severity="info" aria-label="User"  @click="buscarFacturas"  style="margin-top: 10px;" :loading="loading" />
          </div>
        </div>   
      </div>
    </div>
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
    const factura = ref<IFactura>();
    const store = useFacturaStore();
    const authStore = useAuthStore();
    const id = ref(null);

    onMounted(() => {
     // facturaDetails.value.fechaCreacion = formatDate(Date.now());
      //buscarFacturas();
    });
    const buscadorValidator = Yup.object().shape({});

	  const currentUser = computed(() => {
      return authStore.user;
    });    

    const buscarFacturas = async () => {    
      loading.value = true;      
      store.obtenerNotaCredito(facturaDetails.value)
          .then(() => {
            //console.log(JSON.stringify(currentFactura.value.pdfNotaCredito));
            var base64String = currentFactura.value.pdfNotaCredito;
            const linkSource = `data:application/pdf;base64,${base64String}`;
            const downloadLink = document.createElement("a");
            const fileName = `Nota_Credito_${facturaDetails.value.numeroNotaCredito}.pdf`;
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
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
              loading.value = false;      
          });
    }

    const visibleFull = ref(false);
    const search = ref(null);
    const loading = ref(false);

    const facturaDetails = ref<IFactura>({
      numeroFactura : 0,
      numeroNotaCredito:0,
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
      codigoEdificio:'',
      pdfNotaCredito:null
  });

  const currentFactura = computed(() => {
      return store.currentFactura;
    });

    return {
      facturaDetails,
      currentFactura,
      buscarFacturas,
      loading,
      buscadorValidator,
      submitButton1,      
      visibleFull,
      id,
      factura,    
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

