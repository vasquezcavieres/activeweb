





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
          <!--begin::Form-->
		  <Form
                      id="kt_account_edificio_details_form"
                      class="form d-flex flex-column flex-lg-row"
                      novalidate="novalidate"
                      @submit="saveChanges1()"
                      :validation-schema="pagosValidator"
                    >
            <!--begin::Aside column-->
            <div
              class="
                d-flex
                flex-column
                gap-7 gap-lg-10
                w-lg-300px
                mb-7
                me-lg-10
              "
            >
              <!--begin::Thumbnail settings-->
              <div class="card card-flush py-4">
                <!--begin::Card header-->
                <div class="card-header">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2>Imagen Principal</h2>
                  </div>
                  <!--end::Card title-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body text-center pt-0">
                  <MixedWidgetImage v-bind:current_photo="imagen_principal" @inFileChange="changeImagenPrincipal"></MixedWidgetImage> 
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Thumbnail settings-->
              <!--begin::Status-->
              <div class="card card-flush py-4">
                <!--begin::Card header-->
                <div class="card-header">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2>Status</h2>
                  </div>
                  <!--end::Card title-->
                  <!--begin::Card toolbar-->
                  <div class="card-toolbar">
                    <div
                      class="rounded-circle w-15px h-15px"
					            :class="pagoDetails.activo?'bg-success':'bg-danger'"
                      id="kt_status"
                    ></div>
                  </div>
                  <!--begin::Card toolbar-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body pt-0">
                  <!--begin::Select2-->
                    <Field
                    name="activo"
                    class="form-select mb-2"
                    as="select"
                    placeholder="Seleccione"
                    v-model="pagoDetails.activo"
                    >
                    <option :value="true">
                      Vigente
                    </option>
                    <option :value="false">Inactivo</option>
                </Field>
                  <!--end::Select2-->
                  <!--begin::Description-->
                  <div class="text-muted fs-7">
                    Seleccione el estado del pago.
                  </div>
                  <!--end::Description-->
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Status-->

              <!--begin::Template settings-->
              <div class="card card-flush py-4">
                <!--begin::Card header-->
                <div class="card-header">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2>Categoría</h2>
                  </div>
                  <!--end::Card title-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body pt-0">
                  <!--begin::Select store template-->
                  <label
                    for="kt_ecommerce_add_product_store_template"
                    class="form-label"
                    >Seleccione</label
                  >
                  <!--end::Select store template-->
                  <!--begin::Select2-->
                  <Field
                  name="idCategoria"
                  class="form-select mb-2"
                  as="select"
                  placeholder="Seleccione"
                  v-model="pagoDetails.categoriaId"
                  @change="onChange($event)"
                >
                <option v-for="categoria in categorias" :key="categoria.categoriaId" :value="categoria.categoriaId">{{ categoria.titulo }}</option>
                </Field>
                  <!--end::Select2-->
                  <!--begin::Description-->
                  <div class="text-muted fs-7">
                    Clasificar pago es una gran idea
                  </div>
                  <!--end::Description-->
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Template settings-->
            </div>
            <!--end::Aside column-->
            <!--begin::Main column-->
            <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <!--begin::Tab content-->
              <div class="tab-content">
                <!--begin::Tab pane-->
                <div
                  class="tab-pane fade show active"
                  id="kt_ecommerce_add_product_general"
                  role="tab-panel"
                >
                  <div class="d-flex flex-column gap-7 gap-lg-10">
                    
                      <!--begin::General options-->
                      <div class="card card-flush py-4">
                        <!--begin::Card header-->
                        <div class="card-header">
                          <div class="card-title">
                            <h2>General</h2>
                          </div>
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                                                    
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Pago Id</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="pagoId"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Pago Id"
                                  v-model="pagoDetails.pagoId"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="pagoId" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Pago Id
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Vendedor Id</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="100"
                                  name="vendedorId"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Vendedor Id"
                                  v-model="pagoDetails.vendedorId"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="vendedorId" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Vendedor Id
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Nombre Vendedor</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="100"
                                  name="nombreVendedor"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Nombre Vendedor"
                                  v-model="pagoDetails.nombreVendedor"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="nombreVendedor" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Nombre Vendedor
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Token Transaccion</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="100"
                                  name="tokenTransaccion"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Token Transaccion"
                                  v-model="pagoDetails.tokenTransaccion"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="tokenTransaccion" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Token Transaccion
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Token Medio Pago</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="500"
                                  name="tokenMedioPago"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Token Medio Pago"
                                  v-model="pagoDetails.tokenMedioPago"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="tokenMedioPago" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Token Medio Pago
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Codigo Medio Pago</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="codigoMedioPago"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Codigo Medio Pago"
                                  v-model="pagoDetails.codigoMedioPago"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="codigoMedioPago" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Codigo Medio Pago
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Numero Orden</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="18"
                                  name="numeroOrden"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Numero Orden"
                                  v-model="pagoDetails.numeroOrden"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="numeroOrden" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Numero Orden
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Email Cliente</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="75"
                                  name="emailCliente"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Email Cliente"
                                  v-model="pagoDetails.emailCliente"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="emailCliente" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Email Cliente
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Nombre Cliente</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="150"
                                  name="nombreCliente"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Nombre Cliente"
                                  v-model="pagoDetails.nombreCliente"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="nombreCliente" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Nombre Cliente
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Monto Pago</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="18"
                                  name="montoPago"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Monto Pago"
                                  v-model="pagoDetails.montoPago"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="montoPago" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Monto Pago
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Fecha Transaccion</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="pagoDetails.fechaTransaccion" :showIcon="true"/>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="fechaTransaccion" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Fecha Transaccion
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Codigo Edificio</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="codigoEdificio"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Codigo Edificio"
                                  v-model="pagoDetails.codigoEdificio"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="codigoEdificio" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Codigo Edificio
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Codigo Area</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="codigoArea"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Codigo Area"
                                  v-model="pagoDetails.codigoArea"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="codigoArea" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Codigo Area
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Nombre Edificio</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="100"
                                  name="nombreEdificio"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Nombre Edificio"
                                  v-model="pagoDetails.nombreEdificio"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="nombreEdificio" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Nombre Edificio
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Direccion Edificio</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="100"
                                  name="direccionEdificio"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Direccion Edificio"
                                  v-model="pagoDetails.direccionEdificio"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="direccionEdificio" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Direccion Edificio
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Ciudad Edificio</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="ciudadEdificio"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Ciudad Edificio"
                                  v-model="pagoDetails.ciudadEdificio"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="ciudadEdificio" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Ciudad Edificio
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Comuna Edificio</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="comunaEdificio"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Comuna Edificio"
                                  v-model="pagoDetails.comunaEdificio"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="comunaEdificio" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Comuna Edificio
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Centro Costo</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="centroCosto"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Centro Costo"
                                  v-model="pagoDetails.centroCosto"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="centroCosto" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Centro Costo
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Exitoso</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                    name="activo"
                                    class="form-select mb-2"
                                    as="select"
                                    placeholder="Seleccione"
                                    v-model="pagoDetails.exitoso"
                                    >
                                    <option :value="true">
                                      Vigente
                                    </option>
                                    <option :value="false">Inactivo</option>
                                </Field>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="exitoso" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Exitoso
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Codigo Autorizacion</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="codigoAutorizacion"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Codigo Autorizacion"
                                  v-model="pagoDetails.codigoAutorizacion"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="codigoAutorizacion" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Codigo Autorizacion
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Fecha Pago</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="pagoDetails.fechaPago" :showIcon="true"/>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="fechaPago" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Fecha Pago
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Mes Pago</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="10"
                                  name="mesPago"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Mes Pago"
                                  v-model="pagoDetails.mesPago"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="mesPago" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Mes Pago
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Anio Pago</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="number"
                                  maxlength="10"
                                  name="anioPago"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Anio Pago"
                                  v-model="pagoDetails.anioPago"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="anioPago" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Anio Pago
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Numero Tarjeta</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="100"
                                  name="numeroTarjeta"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Numero Tarjeta"
                                  v-model="pagoDetails.numeroTarjeta"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="numeroTarjeta" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Numero Tarjeta
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Notificado</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                    name="activo"
                                    class="form-select mb-2"
                                    as="select"
                                    placeholder="Seleccione"
                                    v-model="pagoDetails.notificado"
                                    >
                                    <option :value="true">
                                      Vigente
                                    </option>
                                    <option :value="false">Inactivo</option>
                                </Field>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="notificado" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Notificado
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Codigo Notificacion</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="codigoNotificacion"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Codigo Notificacion"
                                  v-model="pagoDetails.codigoNotificacion"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="codigoNotificacion" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Codigo Notificacion
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Numero Boleta</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="numeroBoleta"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Numero Boleta"
                                  v-model="pagoDetails.numeroBoleta"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="numeroBoleta" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Numero Boleta
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Url Boleta</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="500"
                                  name="urlBoleta"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Url Boleta"
                                  v-model="pagoDetails.urlBoleta"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="urlBoleta" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Url Boleta
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Fecha Boleta</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="pagoDetails.fechaBoleta" :showIcon="true"/>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="fechaBoleta" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Fecha Boleta
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Codigo Pais</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="4"
                                  name="codigoPais"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Codigo Pais"
                                  v-model="pagoDetails.codigoPais"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="codigoPais" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Codigo Pais
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Pais</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="pais"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Pais"
                                  v-model="pagoDetails.pais"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="pais" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Pais
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Ultimo Intento</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="pagoDetails.ultimoIntento" :showIcon="true"/>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="ultimoIntento" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Ultimo Intento
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Boleta Aux</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="50"
                                  name="boletaAux"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Boleta Aux"
                                  v-model="pagoDetails.boletaAux"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="boletaAux" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Boleta Aux
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Firma</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Field
                                  type="text"
                                  maxlength="200"
                                  name="firma"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="Firma"
                                  v-model="pagoDetails.firma"
                                />
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="firma" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Firma
                                </div>
                                <!--end::Description-->
                            


                          </div>
                          <!--end::Input group-->
                                             
                         
                        </div>
                        <!--end::Card header-->
                      </div>
                      <!--end::General options-->
                  </div>
                </div>
                <!--end::Tab pane-->
              </div>
              <!--end::Tab content-->
              <div class="d-flex justify-content-end">
              <!--begin::Button-->
                <router-link
                  :to="{name:'apps-pago-listing'}"
                  id="kt_ecommerce_add_product_cancel"
                  class="btn btn-light me-5"
                  >Cancelar</router-link>
                <!--end::Button-->

                <!--begin::Button-->
             
                <!--end::Button-->
                <!--begin::Button-->
                <button
                  type="submit"
                  id="kt_account_edificio_details_submit"
                  ref="submitButton1"
                  class="btn btn-primary"
                  >
                  <span class="indicator-label"> Crear </span>
                  <span class="indicator-progress">
                    Espere ...
                    <span
                    class="
                      spinner-border spinner-border-sm
                      align-middle
                      ms-2
                    "
                    ></span>
                  </span>
                </button>
                <!--end::Button-->
              </div>
            </div>
            <!--end::Main column-->
          </Form>
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
import { usePagoStore } from "@/stores/pago";
import type { IPago } from "@/stores/pago";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import type {ImagenArchivo} from '@/stores/types/ImagenArchivo';
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "pago-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor

  },
  
  setup() {
    const router = useRouter();
    const store = usePagoStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const imagen_principal = ref<ImagenArchivo>();
    const pagosValidator = Yup.object().shape({
                pagoId: Yup.string().required("Es obligatorio").label("Pago Id"),
            tokenTransaccion: Yup.string().required("Es obligatorio").label("Token Transaccion"),
            tokenMedioPago: Yup.string().required("Es obligatorio").label("Token Medio Pago"),
            codigoMedioPago: Yup.string().required("Es obligatorio").label("Codigo Medio Pago"),
            numeroOrden: Yup.string().required("Es obligatorio").label("Numero Orden"),
            emailCliente: Yup.string().required("Es obligatorio").label("Email Cliente"),
            montoPago: Yup.string().required("Es obligatorio").label("Monto Pago"),
            fechaTransaccion: Yup.string().required("Es obligatorio").label("Fecha Transaccion"),
      
    });

    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        let formData = new FormData();
        formData.append("file", imagen_principal.value?.archivo);
        formData.append("pago", JSON.stringify(pagoDetails.value));      
        
        store.createPago(formData)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Pago se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-pago-listing" });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.pagoErrors);
            Swal.fire({
                text: error,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                heightAuto: false,
                customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
                },
            });
          });
      }
    };
   
    const changeImagenPrincipal = (image)=>{
		imagen_principal.value = image;
	};
    const route = useRoute();
    const id = route.params.id;
    onMounted(() => {     
      obtenerPago(id);
    });

    const obtenerPago = (id) =>{
      store
        .getPago(id)
        .then(() => {
          loading = ref(false);
          pagoDetails.value = store.currentPago;
          imagen_principal.value = {archivo:null,contenido:pagoDetails.value.imagen};
          //pagoDetails.value.fechaInicio =  moment(store.currentPago.fechaInicio, "YYYYMMDD hh:mm:ss").toDate();
          //pagoDetails.value.fechaTermino =  moment(store.currentPago.fechaTermino, "YYYYMMDD hh:mm:ss").toDate();
        })
        .catch(() => {
          const [error] = Object.values(store.pagoErrors);
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
    }
    
    const pagoDetails = ref<IPago>({
       			pagoId : store.currentPago.pagoId,
			vendedorId : store.currentPago.vendedorId,
			nombreVendedor : store.currentPago.nombreVendedor,
			tokenTransaccion : store.currentPago.tokenTransaccion,
			tokenMedioPago : store.currentPago.tokenMedioPago,
			codigoMedioPago : store.currentPago.codigoMedioPago,
			numeroOrden : store.currentPago.numeroOrden,
			emailCliente : store.currentPago.emailCliente,
			nombreCliente : store.currentPago.nombreCliente,
			montoPago : store.currentPago.montoPago,
			fechaTransaccion : store.currentPago.fechaTransaccion,
			codigoEdificio : store.currentPago.codigoEdificio,
			codigoArea : store.currentPago.codigoArea,
			nombreEdificio : store.currentPago.nombreEdificio,
			direccionEdificio : store.currentPago.direccionEdificio,
			ciudadEdificio : store.currentPago.ciudadEdificio,
			comunaEdificio : store.currentPago.comunaEdificio,
			centroCosto : store.currentPago.centroCosto,
			exitoso : store.currentPago.exitoso,
			codigoAutorizacion : store.currentPago.codigoAutorizacion,
			fechaPago : store.currentPago.fechaPago,
			mesPago : store.currentPago.mesPago,
			anioPago : store.currentPago.anioPago,
			numeroTarjeta : store.currentPago.numeroTarjeta,
			notificado : store.currentPago.notificado,
			codigoNotificacion : store.currentPago.codigoNotificacion,
			numeroBoleta : store.currentPago.numeroBoleta,
			urlBoleta : store.currentPago.urlBoleta,
			fechaBoleta : store.currentPago.fechaBoleta,
			codigoPais : store.currentPago.codigoPais,
			pais : store.currentPago.pais,
			ultimoIntento : store.currentPago.ultimoIntento,
			boletaAux : store.currentPago.boletaAux,
			firma : store.currentPago.firma,
    
  });

    let loading = ref(true);
    return {
      submitButton1,
      saveChanges1,
      pagoDetails,
      pagosValidator,
      changeImagenPrincipal,
      imagen_principal
    };
  },
});


</script>

	
	export default {
	  state,
	  actions,
	  mutations
	};

