export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  perminission?:string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      }     
    ],
  }, 
  {
    heading: "Reportes",
    route: "/apps",
    pages: [
      {
        sectionTitle: "Administración",
        perminission: "ADMINISTRADOR",
        route: "/convenios",
        keenthemesIcon: "abstract-38",
        bootstrapIcon: "bi-card-heading",
        sub: [
          {
            heading: "Convenios",
            route: "/apps/convenio/convenio-listing",
          },
          {
            heading: "Usuarios",
            route: "/apps/usuario/usuario-comunidad-listing",
          },
          {
            heading: "Crear Edificio",
            route: "/apps/edificio/edificio-create",
          },          
          {
            heading: "Edificios",
            route: "/apps/edificio/edificios-listing",
          },
          // {
          //   heading: "Archivo Transferencias",
          //   route: "/apps/archivopagoproveedores/archivo-pago-proveedores",
          // },
          {
            heading: "UF",
            route: "/apps/uf/uf-listing",
          }
        ],
      },
      {
        sectionTitle: "Ventas",
        route: "/informes",
        keenthemesIcon: "abstract-38",
        bootstrapIcon: "bi-card-heading",
        sub: [
          {
            heading: "Facturas",
            route: "/apps/Facturas/Facturas",
          },
          // {
          //   heading: "Notas de Crédito",
          //   route: "/apps/NotaCredito/NotaCredito",
          // },
          // {
          //   heading: "Transferencias",
          //   route: "/apps/Transferencia/Transferencias",
          // },
          {
            heading: "Ventas",
            route: "/apps/ventas/ventas",
          }
        ],
      },
    ],
  },
];

export default MainMenuConfig;
