import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BlanketOrderItemList } from "./blanketOrderItem/BlanketOrderItemList";
import { BlanketOrderItemCreate } from "./blanketOrderItem/BlanketOrderItemCreate";
import { BlanketOrderItemEdit } from "./blanketOrderItem/BlanketOrderItemEdit";
import { BlanketOrderItemShow } from "./blanketOrderItem/BlanketOrderItemShow";
import { BlanketOrderList } from "./blanketOrder/BlanketOrderList";
import { BlanketOrderCreate } from "./blanketOrder/BlanketOrderCreate";
import { BlanketOrderEdit } from "./blanketOrder/BlanketOrderEdit";
import { BlanketOrderShow } from "./blanketOrder/BlanketOrderShow";
import { InvoiceDiscountingList } from "./invoiceDiscounting/InvoiceDiscountingList";
import { InvoiceDiscountingCreate } from "./invoiceDiscounting/InvoiceDiscountingCreate";
import { InvoiceDiscountingEdit } from "./invoiceDiscounting/InvoiceDiscountingEdit";
import { InvoiceDiscountingShow } from "./invoiceDiscounting/InvoiceDiscountingShow";
import { ItemAlternativeList } from "./itemAlternative/ItemAlternativeList";
import { ItemAlternativeCreate } from "./itemAlternative/ItemAlternativeCreate";
import { ItemAlternativeEdit } from "./itemAlternative/ItemAlternativeEdit";
import { ItemAlternativeShow } from "./itemAlternative/ItemAlternativeShow";
import { ItemAttributeValueList } from "./itemAttributeValue/ItemAttributeValueList";
import { ItemAttributeValueCreate } from "./itemAttributeValue/ItemAttributeValueCreate";
import { ItemAttributeValueEdit } from "./itemAttributeValue/ItemAttributeValueEdit";
import { ItemAttributeValueShow } from "./itemAttributeValue/ItemAttributeValueShow";
import { ItemAttributeList } from "./itemAttribute/ItemAttributeList";
import { ItemAttributeCreate } from "./itemAttribute/ItemAttributeCreate";
import { ItemAttributeEdit } from "./itemAttribute/ItemAttributeEdit";
import { ItemAttributeShow } from "./itemAttribute/ItemAttributeShow";
import { ItemBarcodeList } from "./itemBarcode/ItemBarcodeList";
import { ItemBarcodeCreate } from "./itemBarcode/ItemBarcodeCreate";
import { ItemBarcodeEdit } from "./itemBarcode/ItemBarcodeEdit";
import { ItemBarcodeShow } from "./itemBarcode/ItemBarcodeShow";
import { ItemCustomerDetailList } from "./itemCustomerDetail/ItemCustomerDetailList";
import { ItemCustomerDetailCreate } from "./itemCustomerDetail/ItemCustomerDetailCreate";
import { ItemCustomerDetailEdit } from "./itemCustomerDetail/ItemCustomerDetailEdit";
import { ItemCustomerDetailShow } from "./itemCustomerDetail/ItemCustomerDetailShow";
import { ItemDefaultList } from "./itemDefault/ItemDefaultList";
import { ItemDefaultCreate } from "./itemDefault/ItemDefaultCreate";
import { ItemDefaultEdit } from "./itemDefault/ItemDefaultEdit";
import { ItemDefaultShow } from "./itemDefault/ItemDefaultShow";
import { ItemGroupList } from "./itemGroup/ItemGroupList";
import { ItemGroupCreate } from "./itemGroup/ItemGroupCreate";
import { ItemGroupEdit } from "./itemGroup/ItemGroupEdit";
import { ItemGroupShow } from "./itemGroup/ItemGroupShow";
import { ItemManufacturerList } from "./itemManufacturer/ItemManufacturerList";
import { ItemManufacturerCreate } from "./itemManufacturer/ItemManufacturerCreate";
import { ItemManufacturerEdit } from "./itemManufacturer/ItemManufacturerEdit";
import { ItemManufacturerShow } from "./itemManufacturer/ItemManufacturerShow";
import { ItemPriceList } from "./itemPrice/ItemPriceList";
import { ItemPriceCreate } from "./itemPrice/ItemPriceCreate";
import { ItemPriceEdit } from "./itemPrice/ItemPriceEdit";
import { ItemPriceShow } from "./itemPrice/ItemPriceShow";
import { ItemReorderList } from "./itemReorder/ItemReorderList";
import { ItemReorderCreate } from "./itemReorder/ItemReorderCreate";
import { ItemReorderEdit } from "./itemReorder/ItemReorderEdit";
import { ItemReorderShow } from "./itemReorder/ItemReorderShow";
import { ItemSupplierList } from "./itemSupplier/ItemSupplierList";
import { ItemSupplierCreate } from "./itemSupplier/ItemSupplierCreate";
import { ItemSupplierEdit } from "./itemSupplier/ItemSupplierEdit";
import { ItemSupplierShow } from "./itemSupplier/ItemSupplierShow";
import { ItemTaxTemplateDetailList } from "./itemTaxTemplateDetail/ItemTaxTemplateDetailList";
import { ItemTaxTemplateDetailCreate } from "./itemTaxTemplateDetail/ItemTaxTemplateDetailCreate";
import { ItemTaxTemplateDetailEdit } from "./itemTaxTemplateDetail/ItemTaxTemplateDetailEdit";
import { ItemTaxTemplateDetailShow } from "./itemTaxTemplateDetail/ItemTaxTemplateDetailShow";
import { ItemTaxTemplateList } from "./itemTaxTemplate/ItemTaxTemplateList";
import { ItemTaxTemplateCreate } from "./itemTaxTemplate/ItemTaxTemplateCreate";
import { ItemTaxTemplateEdit } from "./itemTaxTemplate/ItemTaxTemplateEdit";
import { ItemTaxTemplateShow } from "./itemTaxTemplate/ItemTaxTemplateShow";
import { ItemTaxList } from "./itemTax/ItemTaxList";
import { ItemTaxCreate } from "./itemTax/ItemTaxCreate";
import { ItemTaxEdit } from "./itemTax/ItemTaxEdit";
import { ItemTaxShow } from "./itemTax/ItemTaxShow";
import { ItemVariantList } from "./itemVariant/ItemVariantList";
import { ItemVariantCreate } from "./itemVariant/ItemVariantCreate";
import { ItemVariantEdit } from "./itemVariant/ItemVariantEdit";
import { ItemVariantShow } from "./itemVariant/ItemVariantShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Order"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BlanketOrderItem"
          list={BlanketOrderItemList}
          edit={BlanketOrderItemEdit}
          create={BlanketOrderItemCreate}
          show={BlanketOrderItemShow}
        />
        <Resource
          name="BlanketOrder"
          list={BlanketOrderList}
          edit={BlanketOrderEdit}
          create={BlanketOrderCreate}
          show={BlanketOrderShow}
        />
        <Resource
          name="InvoiceDiscounting"
          list={InvoiceDiscountingList}
          edit={InvoiceDiscountingEdit}
          create={InvoiceDiscountingCreate}
          show={InvoiceDiscountingShow}
        />
        <Resource
          name="ItemAlternative"
          list={ItemAlternativeList}
          edit={ItemAlternativeEdit}
          create={ItemAlternativeCreate}
          show={ItemAlternativeShow}
        />
        <Resource
          name="ItemAttributeValue"
          list={ItemAttributeValueList}
          edit={ItemAttributeValueEdit}
          create={ItemAttributeValueCreate}
          show={ItemAttributeValueShow}
        />
        <Resource
          name="ItemAttribute"
          list={ItemAttributeList}
          edit={ItemAttributeEdit}
          create={ItemAttributeCreate}
          show={ItemAttributeShow}
        />
        <Resource
          name="ItemBarcode"
          list={ItemBarcodeList}
          edit={ItemBarcodeEdit}
          create={ItemBarcodeCreate}
          show={ItemBarcodeShow}
        />
        <Resource
          name="ItemCustomerDetail"
          list={ItemCustomerDetailList}
          edit={ItemCustomerDetailEdit}
          create={ItemCustomerDetailCreate}
          show={ItemCustomerDetailShow}
        />
        <Resource
          name="ItemDefault"
          list={ItemDefaultList}
          edit={ItemDefaultEdit}
          create={ItemDefaultCreate}
          show={ItemDefaultShow}
        />
        <Resource
          name="ItemGroup"
          list={ItemGroupList}
          edit={ItemGroupEdit}
          create={ItemGroupCreate}
          show={ItemGroupShow}
        />
        <Resource
          name="ItemManufacturer"
          list={ItemManufacturerList}
          edit={ItemManufacturerEdit}
          create={ItemManufacturerCreate}
          show={ItemManufacturerShow}
        />
        <Resource
          name="ItemPrice"
          list={ItemPriceList}
          edit={ItemPriceEdit}
          create={ItemPriceCreate}
          show={ItemPriceShow}
        />
        <Resource
          name="ItemReorder"
          list={ItemReorderList}
          edit={ItemReorderEdit}
          create={ItemReorderCreate}
          show={ItemReorderShow}
        />
        <Resource
          name="ItemSupplier"
          list={ItemSupplierList}
          edit={ItemSupplierEdit}
          create={ItemSupplierCreate}
          show={ItemSupplierShow}
        />
        <Resource
          name="ItemTaxTemplateDetail"
          list={ItemTaxTemplateDetailList}
          edit={ItemTaxTemplateDetailEdit}
          create={ItemTaxTemplateDetailCreate}
          show={ItemTaxTemplateDetailShow}
        />
        <Resource
          name="ItemTaxTemplate"
          list={ItemTaxTemplateList}
          edit={ItemTaxTemplateEdit}
          create={ItemTaxTemplateCreate}
          show={ItemTaxTemplateShow}
        />
        <Resource
          name="ItemTax"
          list={ItemTaxList}
          edit={ItemTaxEdit}
          create={ItemTaxCreate}
          show={ItemTaxShow}
        />
        <Resource
          name="ItemVariant"
          list={ItemVariantList}
          edit={ItemVariantEdit}
          create={ItemVariantCreate}
          show={ItemVariantShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
