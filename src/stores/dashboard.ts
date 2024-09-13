import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";

export interface IDashboard {
  ventasTotales: number | undefined | null |0;
  comisiones: Date | undefined | 0;
  montosTransferir: number |0;
  codigoConvenio:number|0;
  rutRazonSocial: number | undefined | null;
  fechaDesde: Date | null;
  fechaHasta: Date | null;
  codigoEdificio: string | null|'';
}

export const useDashboardStore = defineStore("dashboard", () => {
  const dashboardErrors = ref({});
  const currentDashboard = ref<IDashboard>({} as IDashboard);
  const currentDashboardSinFacturar = ref<IDashboard>({} as IDashboard);

  function setDashboard(dashboard: IDashboard) {
    currentDashboard.value = dashboard;
    dashboardErrors.value = {};
  }

  function setDashboardSinFacturar(dashboard: IDashboard) {
    currentDashboardSinFacturar.value = dashboard;
    dashboardErrors.value = {};
  }

  function setFacturaError(error: any) {
    dashboardErrors.value = { ...error };
  }
  
  async function buscarDashboard(params: IDashboard) {
    return await ApiService.post("dashboard/v1/dashboard", params)
      .then(async({ data }) => {
        setDashboard(data);
      })
      .catch(({ response }) => {
        setFacturaError(response.data.errors);
		throw new Error();
      });
  }

  async function buscarDashboardSinFacturar(params: IDashboard) {
    return await ApiService.post("dashboard/v1/dashboardNoFacturado", params)
      .then(async({ data }) => {
        setDashboardSinFacturar(data);
      })
      .catch(({ response }) => {
        setFacturaError(response.data.errors);
		throw new Error();
      });
  }

  return {
    buscarDashboard,
    buscarDashboardSinFacturar,
    dashboardErrors,
    currentDashboard,
    currentDashboardSinFacturar
  };
});




