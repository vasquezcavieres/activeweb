<template>
    <div v-if="authStore.user.codigoRol == 'ADMINISTRADOR' ">        
        <DashboardAdministrador/>
    </div>
    <div v-else-if="authStore.user.codigoRol == 'COMUNIDAD' ">        
        <DashboardComunidad/>
    </div>
    <div v-else>        
        <DashboardConvenio/>
    </div>
</template>

<script lang="ts">
  import { ref, defineComponent, onMounted, computed } from "vue";
  import _ from "lodash";
  import { useRouter, useRoute} from "vue-router";
  import { useAuthStore } from "@/stores/auth";
  import moment from "moment";
  moment.locale("es");  
  import DashboardAdministrador from "@/views/apps/dashboard/DashboardAdministrador.vue"
  import DashboardConvenio from "@/views/apps/dashboard/DashboardConvenio.vue"
  import DashboardComunidad from "@/views/apps/dashboard/DashboardComunidad.vue"

  export default defineComponent({
    name: "convenio-edit",
    components: {
        DashboardAdministrador ,
        DashboardConvenio,
        DashboardComunidad
    },
    
    setup() {
      const authStore = useAuthStore();   
      onMounted(async () => {  
      });
  
      return {
        authStore    
      };
    },
  });
  
  </script>
  
export default {
state,
actions,
mutations
};
  
  