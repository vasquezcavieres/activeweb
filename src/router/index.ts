import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
//import idsrvAuth from "../config/idsrvAuth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/apps/dashboard/",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
      //authName: idsrvAuth.authName 
    },    
    children: [
      {
        path: "/apps/convenio/paso2",
        name: "apps-paso2",
        component: () => import("@/views/apps/convenio/TabsConvenio.vue"),
        meta: {
          pageTitle: "Paso2",
          breadcrumbs: ["Paso2"],
        },
        children : [
          {
            path: "/apps/convenio/convenio-edit/:id",
            name: "apps-convenio-edit",
            component: () => import("@/views/apps/convenio/ConvenioEdit.vue"),
            meta: {
              pageTitle: "Convenio",
              breadcrumbs: ["Convenio"],
            },
          },
          {
            path: "/apps/convenio/admin-convenio-create/:id",
            name: "apps-convenio-admin-create",
            component: () => import("@/views/apps/convenio/UsuarioCreate.vue"),
            meta: {
              pageTitle: "Convenio",
              breadcrumbs: ["Adminsitrador"],
            },
          },
          {
            path: "/apps/convenio/edificio-listing/:id",
            name: "apps-convenio-edificio-listing",
            component: () => import("@/views/apps/edificio/EdificioListing.vue"),
            meta: {
              pageTitle: "Convenio",
              breadcrumbs: ["Edificios"],
            },
          },
          {
            path: "/apps/cicloTransferencia/cicloTransferencia-edit/:id",
            name: "apps-cicloTransferencia-edit",
            component: () => import("@/views/apps/cicloTransferencia/CicloTransferenciaEdit.vue"),
            meta: {
              pageTitle: "Convenio",
              breadcrumbs: ["Ciclo Transferencia"],
            },
          },
        ]
      },   
      {
        path: "/apps/dashboard/",
        name: "apps-dashboard",
        component: () => import("@/views/apps/dashboard/Dashboard.vue"),
        meta: {
          pageTitle: "Dasboard",
          breadcrumbs: ["Dasboard"],
          middleware: "auth"
        },
      },
      {
        path: "/apps/dashboard/administrador",
        name: "apps-dashboard-administrador",
        component: () => import("@/views/apps/dashboard/DashboardAdministrador.vue"),
        meta: {
          pageTitle: "Dasboard",
          breadcrumbs: ["Dasboard"],
          middleware: "auth"
        },
      },
      {
        path: "/apps/dashboard/convenio",
        name: "apps-dashboard-convenio",
        component: () => import("@/views/apps/dashboard/DashboardConvenio.vue"),
        meta: {
          pageTitle: "Dasboard",
          breadcrumbs: ["Dasboard"],
          middleware: "auth"
        },
      },
      {
        path: "/apps/dashboard/comunidad",
        name: "apps-dashboard-comunidad",
        component: () => import("@/views/apps/dashboard/DashboardComunidad.vue"),
        meta: {
          pageTitle: "Dasboard",
          breadcrumbs: ["Dasboard"],
          middleware: "auth"
        },
      },
      {
        path: "/apps/convenio/convenio-create",
        name: "apps-convenio-create",
        component: () => import("@/views/apps/convenio/ConvenioCreate.vue"),
        meta: {
          pageTitle: "Convenio",
          breadcrumbs: ["Convenio"],
        },
      },
      {
        path: "/apps/edificio/edificio-create",
        name: "apps-edificio-create",
        component: () => import("@/views/apps/edificio/EdificioCreate.vue"),
        meta: {
          pageTitle: "Edificio",
          breadcrumbs: ["Edificio"],
        },
      },
      {
        path: "/apps/edificio/edificio-edit/:id",
        name: "apps-edificio-edit",
        component: () => import("@/views/apps/edificio/EdificioEdit.vue"),
        meta: {
          pageTitle: "Edificio",
          breadcrumbs: ["Edificio"],
        },
      },


      {
        path: "/apps/edificio/edificios-listing",
        name: "apps-edificios-listing",
        component: () => import("@/views/apps/edificio/EdificiosListing.vue"),
        meta: {
          pageTitle: "Edificio",
          breadcrumbs: ["Edificio"],
        },
      },
      {
        path: "/apps/convenio/convenio-detalle/:id",
        name: "apps-convenio-detalle",
        component: () => import("@/views/apps/convenio/ConvenioDetalle.vue"),
        meta: {
          pageTitle: "convenio",
          breadcrumbs: ["convenio"],
        },
      },
      {
        path: "/apps/convenio/edificio-convenio-listing/:id",
        name: "apps-convenio-edificio",
        component: () => import("@/views/apps/edificio/EdificioConvenioListing.vue"),
        meta: {
          pageTitle: "Edificios Convenio",
          breadcrumbs: ["Edificios Convenio"],
        },
      },
      {
        path: "/apps/archivopagoproveedores/archivo-pago-proveedores",
        name: "apps-archivopagoproveedores-edificio",
        component: () => import("@/views/apps/archivopagoproveedores/ArchivoPagoProveedoresListing.vue"),
        meta: {
          pageTitle: "Archivo Transferencias",
          breadcrumbs: ["Archivo Transferencias"],
        },
      },
      {
        path: "/apps/uf/uf-listing",
        name: "apps-uf-listing",
        component: () => import("@/views/apps/uf/UfListing.vue"),
        meta: {
          pageTitle: "UF",
          breadcrumbs: ["UF"],
        },
      },
      {
        path: "/apps/uf/uf-create",
        name: "apps-uf-create",
        component: () => import("@/views/apps/uf/UfCreate.vue"),
        meta: {
          pageTitle: "UF",
          breadcrumbs: ["UF"],
        },
      },
      {
        path: "/apps/edificio/edificio-detalle/:id",
        name: "apps-edificio-Detalle",
        component: () => import("@/views/apps/edificio/EdificioDetalle.vue"),
        meta: {
          pageTitle: "Edificio",
          breadcrumbs: ["Edificio"],
        },
      },
      {
        path: "/apps/convenio/edificio-pagos-listing/:id",
        name: "apps-convenio-edificio-pagos",
        component: () => import("@/views/apps/pago/PagoListing.vue"),
        meta: {
          pageTitle: "Pagos Edificio",
          breadcrumbs: ["Pagos Edificio"],
        },
      },
      {
        path: "/apps/convenio/convenio-listing",
        name: "apps-convenio-listing",
        component: () => import("@/views/apps/convenio/ConvenioListing.vue"),
        meta: {
          pageTitle: "convenio",
          breadcrumbs: ["convenio"],
        },
      },
      {
        path: "/apps/usuario/usuario-comunidad-listing",
        name: "apps-usuario-comunidad-listing",
        component: () => import("@/views/apps/usuarios/UsuarioListing.vue"),
        meta: {
          pageTitle: "Usuarios",
          breadcrumbs: ["Usuario"],
        },
      },
      {
        path: "/apps/usuario/usuario-comunidad-create",
        name: "apps-usuario-comunidad-create",
        component: () => import("@/views/apps/usuarios/UsuarioCreate.vue"),
        meta: {
          pageTitle: "Usuarios",
          breadcrumbs: ["Usuarios"],
        },
      },
      {
        path: "/apps/usuario/usuario-edit/:id",
        name: "apps-usuario-edit",
        component: () => import("@/views/apps/usuarios/UsuarioEdit.vue"),
        meta: {
          pageTitle: "Usuarios",
          breadcrumbs: ["Usuario"],
        },
      },

      {
        path: "/apps/Facturas/Facturas",
        name: "apps-facturas-listing",
        component: () => import("@/views/apps/factura/FacturaListing.vue"),
        meta: {
          pageTitle: "Facturas",
          breadcrumbs: ["Facturas"],
        },
      },
      {
        path: "/apps/NotaCredito/NotaCredito",
        name: "apps-notaCredito-listing",
        component: () => import("@/views/apps/notaCredito/NotaCreditoListing.vue"),
        meta: {
          pageTitle: "Nota Credito",
          breadcrumbs: ["Nota Credito"],
        },
      },
      {
        path: "/apps/transferencia/transferencias/:id?",
        name: "apps-transferencia-listing",
        component: () => import("@/views/apps/transferencia/TransferenciaListing.vue"),
        meta: {
          pageTitle: "Transferencia",
          breadcrumbs: ["Transferencias"],
        },
      },
      {
        path: "/apps/ventas/ventas",
        name: "apps-ventas-listing",
        component: () => import("@/views/apps/ventas/VentasListing.vue"),
        meta: {
          pageTitle: "Ventas",
          breadcrumbs: ["Ventas"],
        },
      },
      {
        path: "/apps/detalleTransferencia/:id",
        name: "apps-detalleTransferencia-listing",
        component: () => import("@/views/apps/detalletransferencia/DetalleTransferenciaListing.vue"),
        meta: {
          pageTitle: "Transferencia",
          breadcrumbs: ["Transferencias"],
        },
      },
      {
        path: "/apps/detalleFactura/:id",
        name: "apps-detalle-Factura",
        component: () => import("@/views/apps/factura/DetalleFactura.vue"),
        meta: {
          pageTitle: "Factura",
          breadcrumbs: ["Facturas"],
        },
      },
      {
        path: "/builder",
        name: "builder",
        component: () => import("@/views/LayoutBuilder.vue"),
        meta: {
          pageTitle: "Layout Builder",
          breadcrumbs: ["Layout"],
        },
      },
      {
        path: "/crafted/pages/profile",
        name: "profile",
        component: () => import("@/components/page-layouts/Profile.vue"),
        meta: {
          breadcrumbs: ["Pages", "Profile"],
        },
        children: [
          {
            path: "overview",
            name: "profile-overview",
            component: () =>
              import("@/views/crafted/pages/profile/Overview.vue"),
            meta: {
              pageTitle: "Overview",
            },
          },
          {
            path: "projects",
            name: "profile-projects",
            component: () =>
              import("@/views/crafted/pages/profile/Projects.vue"),
            meta: {
              pageTitle: "Projects",
            },
          },
          {
            path: "campaigns",
            name: "profile-campaigns",
            component: () =>
              import("@/views/crafted/pages/profile/Campaigns.vue"),
            meta: {
              pageTitle: "Campaigns",
            },
          },
          {
            path: "documents",
            name: "profile-documents",
            component: () =>
              import("@/views/crafted/pages/profile/Documents.vue"),
            meta: {
              pageTitle: "Documents",
            },
          },
          {
            path: "connections",
            name: "profile-connections",
            component: () =>
              import("@/views/crafted/pages/profile/Connections.vue"),
            meta: {
              pageTitle: "Connections",
            },
          },
          {
            path: "activity",
            name: "profile-activity",
            component: () =>
              import("@/views/crafted/pages/profile/Activity.vue"),
            meta: {
              pageTitle: "Activity",
            },
          },
        ],
      },
      {
        path: "/crafted/pages/wizards/horizontal",
        name: "horizontal-wizard",
        component: () => import("@/views/crafted/pages/wizards/Horizontal.vue"),
        meta: {
          pageTitle: "Horizontal",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },
      {
        path: "/crafted/pages/wizards/vertical",
        name: "vertical-wizard",
        component: () => import("@/views/crafted/pages/wizards/Vertical.vue"),
        meta: {
          pageTitle: "Vertical",
          breadcrumbs: ["Pages", "Wizard"],
        },
      },
      {
        path: "/crafted/account",
        name: "account",
        component: () => import("@/views/crafted/account/Account.vue"),
        meta: {
          breadcrumbs: ["Crafted", "Account"],
        },
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/crafted/account/Overview.vue"),
            meta: {
              pageTitle: "Overview",
            },
          },
          {
            path: "settings",
            name: "account-settings",
            component: () => import("@/views/crafted/account/Settings.vue"),
            meta: {
              pageTitle: "Settings",
            },
          },
        ],
      },
      {
        path: "/apps/customers/customers-listing",
        name: "apps-customers-listing",
        component: () => import("@/views/apps/customers/CustomersListing.vue"),
        meta: {
          pageTitle: "Customers Listing",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/customers/customer-details",
        name: "apps-customers-details",
        component: () => import("@/views/apps/customers/CustomerDetails.vue"),
        meta: {
          pageTitle: "Customers Details",
          breadcrumbs: ["Apps", "Customers"],
        },
      },       
     
      {
        path: "/crafted/widgets/feeds",
        name: "widgets-feeds",
        component: () => import("@/views/crafted/widgets/Feeds.vue"),
        meta: {
          pageTitle: "Feeds",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
        meta: {
          pageTitle: "Sign Up",
        },
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
      {
        path: "/recovery-confirm/:token",
        name: "recovery-confirm",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/RecoveryConfirm.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
      {
        path: "/change-password/:token",
        name: "change-password",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/ChangePassword.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
    ],
  },
  {
    path: "/multi-step-sign-up",
    name: "multi-step-sign-up",
    component: () =>
      import("@/views/crafted/authentication/MultiStepSignUp.vue"),
    meta: {
      pageTitle: "Multi-step Sign up",
    },
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  console.log("antes await")
  await authStore.verifyAuth();
  console.log("despues await")
  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      console.log("NEXT DENTRO AUTENTICATED")
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    console.log("NEXT DENTRO ELSE")
    next();
  }
;
  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//idsrvAuth.useRouter(router);
export default router;
