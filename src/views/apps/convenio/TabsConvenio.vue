<template>
    <div class="card">
        <TabMenu v-model:activeIndex="active" :model="items">
            <template #item="{ item, props }">
                <router-link v-slot="routerProps" :to="item.route" custom>
                    <a 
                   
                    class="p-menuitem-link" 
                    v-bind="props?.action" 
                   
                    @keydown.enter.space="($event) => routerProps.navigate($event)"
                    >
                        <span >{{ item.label }}</span>
                    </a>
                </router-link>
            </template>
        </TabMenu>        
        <router-view></router-view>         
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watch } from "vue";
import _ from "lodash";
import { useRouter, useRoute,RouterView} from "vue-router";
import moment from "moment";
import TabMenu from 'primevue/tabmenu';
moment.locale("es");

export default defineComponent({
  name: "campania-main-create",
  components: {TabMenu,RouterView
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const id = route.params.id;
    const active = ref(0);
    const items = ref([
            {
                label: 'Convenio',
                icon: 'pi pi-fw pi-home',
                route: `/apps/convenio/convenio-create`
            },
            {
                label: 'Administrador Convenio',
                icon: 'pi pi-fw pi-calendar',
                route: `/apps/convenio/admin-convenio-create`
            },
            {
                label: 'Edificio Convenio',
                icon: 'pi pi-fw pi-calendar',
                route: `/apps/convenio/edificio-listing`
            },
            {
                label: 'Ciclo Transferencia',
                icon: 'pi pi-fw pi-calendar',
                route: `/apps/cicloFacturacion/cicloFacturacion-edit`
            }
        ]);
    
    onMounted(() => {
        active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
    })

    watch(
        route,
        () => {
            console.log('route path' + JSON.stringify(route.path));            
            active.value = items.value.findIndex((item) => 
            route?.path === router.resolve(item.route).path);
        },
        { immediate: true }
    );

return {
      active, items
    };
  },
});
</script>
<style scoped>
.p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    border: solid #dee2e6;
    border-width: 0 0 2px 0;
    border-color: transparent transparent #dee2e6 transparent;
    background: #ffffff;
    color: #6c757d;
    padding: 1.25rem;
    font-weight: 700;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    transition: box-shadow 0.2s;
    margin: 0 0 -2px 0;
}
</style>