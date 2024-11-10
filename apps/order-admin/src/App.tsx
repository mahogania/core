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
import { ItemBarcodeList } from "./itemBarcode/ItemBarcodeList";
import { ItemBarcodeCreate } from "./itemBarcode/ItemBarcodeCreate";
import { ItemBarcodeEdit } from "./itemBarcode/ItemBarcodeEdit";
import { ItemBarcodeShow } from "./itemBarcode/ItemBarcodeShow";
import { ItemAttributeList } from "./itemAttribute/ItemAttributeList";
import { ItemAttributeCreate } from "./itemAttribute/ItemAttributeCreate";
import { ItemAttributeEdit } from "./itemAttribute/ItemAttributeEdit";
import { ItemAttributeShow } from "./itemAttribute/ItemAttributeShow";
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
import { ModeOfPaymentAccountList } from "./modeOfPaymentAccount/ModeOfPaymentAccountList";
import { ModeOfPaymentAccountCreate } from "./modeOfPaymentAccount/ModeOfPaymentAccountCreate";
import { ModeOfPaymentAccountEdit } from "./modeOfPaymentAccount/ModeOfPaymentAccountEdit";
import { ModeOfPaymentAccountShow } from "./modeOfPaymentAccount/ModeOfPaymentAccountShow";
import { ModeOfPaymentList } from "./modeOfPayment/ModeOfPaymentList";
import { ModeOfPaymentCreate } from "./modeOfPayment/ModeOfPaymentCreate";
import { ModeOfPaymentEdit } from "./modeOfPayment/ModeOfPaymentEdit";
import { ModeOfPaymentShow } from "./modeOfPayment/ModeOfPaymentShow";
import { PosClosingEntryDetailList } from "./posClosingEntryDetail/PosClosingEntryDetailList";
import { PosClosingEntryDetailCreate } from "./posClosingEntryDetail/PosClosingEntryDetailCreate";
import { PosClosingEntryDetailEdit } from "./posClosingEntryDetail/PosClosingEntryDetailEdit";
import { PosClosingEntryDetailShow } from "./posClosingEntryDetail/PosClosingEntryDetailShow";
import { PosClosingEntryList } from "./posClosingEntry/PosClosingEntryList";
import { PosClosingEntryCreate } from "./posClosingEntry/PosClosingEntryCreate";
import { PosClosingEntryEdit } from "./posClosingEntry/PosClosingEntryEdit";
import { PosClosingEntryShow } from "./posClosingEntry/PosClosingEntryShow";
import { PosClosingEntryTaxesList } from "./posClosingEntryTaxes/PosClosingEntryTaxesList";
import { PosClosingEntryTaxesCreate } from "./posClosingEntryTaxes/PosClosingEntryTaxesCreate";
import { PosClosingEntryTaxesEdit } from "./posClosingEntryTaxes/PosClosingEntryTaxesEdit";
import { PosClosingEntryTaxesShow } from "./posClosingEntryTaxes/PosClosingEntryTaxesShow";
import { PosInvoiceItemList } from "./posInvoiceItem/PosInvoiceItemList";
import { PosInvoiceItemCreate } from "./posInvoiceItem/PosInvoiceItemCreate";
import { PosInvoiceItemEdit } from "./posInvoiceItem/PosInvoiceItemEdit";
import { PosInvoiceItemShow } from "./posInvoiceItem/PosInvoiceItemShow";
import { PosFieldList } from "./posField/PosFieldList";
import { PosFieldCreate } from "./posField/PosFieldCreate";
import { PosFieldEdit } from "./posField/PosFieldEdit";
import { PosFieldShow } from "./posField/PosFieldShow";
import { PosCustomerGroupList } from "./posCustomerGroup/PosCustomerGroupList";
import { PosCustomerGroupCreate } from "./posCustomerGroup/PosCustomerGroupCreate";
import { PosCustomerGroupEdit } from "./posCustomerGroup/PosCustomerGroupEdit";
import { PosCustomerGroupShow } from "./posCustomerGroup/PosCustomerGroupShow";
import { PosInvoiceList } from "./posInvoice/PosInvoiceList";
import { PosInvoiceCreate } from "./posInvoice/PosInvoiceCreate";
import { PosInvoiceEdit } from "./posInvoice/PosInvoiceEdit";
import { PosInvoiceShow } from "./posInvoice/PosInvoiceShow";
import { PosInvoiceReferenceList } from "./posInvoiceReference/PosInvoiceReferenceList";
import { PosInvoiceReferenceCreate } from "./posInvoiceReference/PosInvoiceReferenceCreate";
import { PosInvoiceReferenceEdit } from "./posInvoiceReference/PosInvoiceReferenceEdit";
import { PosInvoiceReferenceShow } from "./posInvoiceReference/PosInvoiceReferenceShow";
import { PosInvoiceMergeLogList } from "./posInvoiceMergeLog/PosInvoiceMergeLogList";
import { PosInvoiceMergeLogCreate } from "./posInvoiceMergeLog/PosInvoiceMergeLogCreate";
import { PosInvoiceMergeLogEdit } from "./posInvoiceMergeLog/PosInvoiceMergeLogEdit";
import { PosInvoiceMergeLogShow } from "./posInvoiceMergeLog/PosInvoiceMergeLogShow";
import { PosPaymentMethodList } from "./posPaymentMethod/PosPaymentMethodList";
import { PosPaymentMethodCreate } from "./posPaymentMethod/PosPaymentMethodCreate";
import { PosPaymentMethodEdit } from "./posPaymentMethod/PosPaymentMethodEdit";
import { PosPaymentMethodShow } from "./posPaymentMethod/PosPaymentMethodShow";
import { PosProfileUserList } from "./posProfileUser/PosProfileUserList";
import { PosProfileUserCreate } from "./posProfileUser/PosProfileUserCreate";
import { PosProfileUserEdit } from "./posProfileUser/PosProfileUserEdit";
import { PosProfileUserShow } from "./posProfileUser/PosProfileUserShow";
import { PosProfileList } from "./posProfile/PosProfileList";
import { PosProfileCreate } from "./posProfile/PosProfileCreate";
import { PosProfileEdit } from "./posProfile/PosProfileEdit";
import { PosProfileShow } from "./posProfile/PosProfileShow";
import { PosOpeningEntryList } from "./posOpeningEntry/PosOpeningEntryList";
import { PosOpeningEntryCreate } from "./posOpeningEntry/PosOpeningEntryCreate";
import { PosOpeningEntryEdit } from "./posOpeningEntry/PosOpeningEntryEdit";
import { PosOpeningEntryShow } from "./posOpeningEntry/PosOpeningEntryShow";
import { PosOpeningEntryDetailList } from "./posOpeningEntryDetail/PosOpeningEntryDetailList";
import { PosOpeningEntryDetailCreate } from "./posOpeningEntryDetail/PosOpeningEntryDetailCreate";
import { PosOpeningEntryDetailEdit } from "./posOpeningEntryDetail/PosOpeningEntryDetailEdit";
import { PosOpeningEntryDetailShow } from "./posOpeningEntryDetail/PosOpeningEntryDetailShow";
import { PaymentEntryReferenceList } from "./paymentEntryReference/PaymentEntryReferenceList";
import { PaymentEntryReferenceCreate } from "./paymentEntryReference/PaymentEntryReferenceCreate";
import { PaymentEntryReferenceEdit } from "./paymentEntryReference/PaymentEntryReferenceEdit";
import { PaymentEntryReferenceShow } from "./paymentEntryReference/PaymentEntryReferenceShow";
import { PaymentEntryDeductionList } from "./paymentEntryDeduction/PaymentEntryDeductionList";
import { PaymentEntryDeductionCreate } from "./paymentEntryDeduction/PaymentEntryDeductionCreate";
import { PaymentEntryDeductionEdit } from "./paymentEntryDeduction/PaymentEntryDeductionEdit";
import { PaymentEntryDeductionShow } from "./paymentEntryDeduction/PaymentEntryDeductionShow";
import { PaymentRequestList } from "./paymentRequest/PaymentRequestList";
import { PaymentRequestCreate } from "./paymentRequest/PaymentRequestCreate";
import { PaymentRequestEdit } from "./paymentRequest/PaymentRequestEdit";
import { PaymentRequestShow } from "./paymentRequest/PaymentRequestShow";
import { PaymentEntryList } from "./paymentEntry/PaymentEntryList";
import { PaymentEntryCreate } from "./paymentEntry/PaymentEntryCreate";
import { PaymentEntryEdit } from "./paymentEntry/PaymentEntryEdit";
import { PaymentEntryShow } from "./paymentEntry/PaymentEntryShow";
import { PaymentLedgerEntryList } from "./paymentLedgerEntry/PaymentLedgerEntryList";
import { PaymentLedgerEntryCreate } from "./paymentLedgerEntry/PaymentLedgerEntryCreate";
import { PaymentLedgerEntryEdit } from "./paymentLedgerEntry/PaymentLedgerEntryEdit";
import { PaymentLedgerEntryShow } from "./paymentLedgerEntry/PaymentLedgerEntryShow";
import { PaymentGatewayAccountList } from "./paymentGatewayAccount/PaymentGatewayAccountList";
import { PaymentGatewayAccountCreate } from "./paymentGatewayAccount/PaymentGatewayAccountCreate";
import { PaymentGatewayAccountEdit } from "./paymentGatewayAccount/PaymentGatewayAccountEdit";
import { PaymentGatewayAccountShow } from "./paymentGatewayAccount/PaymentGatewayAccountShow";
import { PaymentOrderReferenceList } from "./paymentOrderReference/PaymentOrderReferenceList";
import { PaymentOrderReferenceCreate } from "./paymentOrderReference/PaymentOrderReferenceCreate";
import { PaymentOrderReferenceEdit } from "./paymentOrderReference/PaymentOrderReferenceEdit";
import { PaymentOrderReferenceShow } from "./paymentOrderReference/PaymentOrderReferenceShow";
import { PickListItemList } from "./pickListItem/PickListItemList";
import { PickListItemCreate } from "./pickListItem/PickListItemCreate";
import { PickListItemEdit } from "./pickListItem/PickListItemEdit";
import { PickListItemShow } from "./pickListItem/PickListItemShow";
import { PickListList } from "./pickList/PickListList";
import { PickListCreate } from "./pickList/PickListCreate";
import { PickListEdit } from "./pickList/PickListEdit";
import { PickListShow } from "./pickList/PickListShow";
import { PurchaseInvoiceAdvanceList } from "./purchaseInvoiceAdvance/PurchaseInvoiceAdvanceList";
import { PurchaseInvoiceAdvanceCreate } from "./purchaseInvoiceAdvance/PurchaseInvoiceAdvanceCreate";
import { PurchaseInvoiceAdvanceEdit } from "./purchaseInvoiceAdvance/PurchaseInvoiceAdvanceEdit";
import { PurchaseInvoiceAdvanceShow } from "./purchaseInvoiceAdvance/PurchaseInvoiceAdvanceShow";
import { PurchaseInvoiceItemList } from "./purchaseInvoiceItem/PurchaseInvoiceItemList";
import { PurchaseInvoiceItemCreate } from "./purchaseInvoiceItem/PurchaseInvoiceItemCreate";
import { PurchaseInvoiceItemEdit } from "./purchaseInvoiceItem/PurchaseInvoiceItemEdit";
import { PurchaseInvoiceItemShow } from "./purchaseInvoiceItem/PurchaseInvoiceItemShow";
import { PurchaseInvoiceList } from "./purchaseInvoice/PurchaseInvoiceList";
import { PurchaseInvoiceCreate } from "./purchaseInvoice/PurchaseInvoiceCreate";
import { PurchaseInvoiceEdit } from "./purchaseInvoice/PurchaseInvoiceEdit";
import { PurchaseInvoiceShow } from "./purchaseInvoice/PurchaseInvoiceShow";
import { PurchaseOrderItemSuppliedList } from "./purchaseOrderItemSupplied/PurchaseOrderItemSuppliedList";
import { PurchaseOrderItemSuppliedCreate } from "./purchaseOrderItemSupplied/PurchaseOrderItemSuppliedCreate";
import { PurchaseOrderItemSuppliedEdit } from "./purchaseOrderItemSupplied/PurchaseOrderItemSuppliedEdit";
import { PurchaseOrderItemSuppliedShow } from "./purchaseOrderItemSupplied/PurchaseOrderItemSuppliedShow";
import { PurchaseOrderItemList } from "./purchaseOrderItem/PurchaseOrderItemList";
import { PurchaseOrderItemCreate } from "./purchaseOrderItem/PurchaseOrderItemCreate";
import { PurchaseOrderItemEdit } from "./purchaseOrderItem/PurchaseOrderItemEdit";
import { PurchaseOrderItemShow } from "./purchaseOrderItem/PurchaseOrderItemShow";
import { PurchaseOrderList } from "./purchaseOrder/PurchaseOrderList";
import { PurchaseOrderCreate } from "./purchaseOrder/PurchaseOrderCreate";
import { PurchaseOrderEdit } from "./purchaseOrder/PurchaseOrderEdit";
import { PurchaseOrderShow } from "./purchaseOrder/PurchaseOrderShow";
import { PurchaseReceiptItemSuppliedList } from "./purchaseReceiptItemSupplied/PurchaseReceiptItemSuppliedList";
import { PurchaseReceiptItemSuppliedCreate } from "./purchaseReceiptItemSupplied/PurchaseReceiptItemSuppliedCreate";
import { PurchaseReceiptItemSuppliedEdit } from "./purchaseReceiptItemSupplied/PurchaseReceiptItemSuppliedEdit";
import { PurchaseReceiptItemSuppliedShow } from "./purchaseReceiptItemSupplied/PurchaseReceiptItemSuppliedShow";
import { PurchaseReceiptItemList } from "./purchaseReceiptItem/PurchaseReceiptItemList";
import { PurchaseReceiptItemCreate } from "./purchaseReceiptItem/PurchaseReceiptItemCreate";
import { PurchaseReceiptItemEdit } from "./purchaseReceiptItem/PurchaseReceiptItemEdit";
import { PurchaseReceiptItemShow } from "./purchaseReceiptItem/PurchaseReceiptItemShow";
import { PurchaseTaxesAndChargesTemplateList } from "./purchaseTaxesAndChargesTemplate/PurchaseTaxesAndChargesTemplateList";
import { PurchaseTaxesAndChargesTemplateCreate } from "./purchaseTaxesAndChargesTemplate/PurchaseTaxesAndChargesTemplateCreate";
import { PurchaseTaxesAndChargesTemplateEdit } from "./purchaseTaxesAndChargesTemplate/PurchaseTaxesAndChargesTemplateEdit";
import { PurchaseTaxesAndChargesTemplateShow } from "./purchaseTaxesAndChargesTemplate/PurchaseTaxesAndChargesTemplateShow";
import { PurchaseTaxesAndChargesList } from "./purchaseTaxesAndCharges/PurchaseTaxesAndChargesList";
import { PurchaseTaxesAndChargesCreate } from "./purchaseTaxesAndCharges/PurchaseTaxesAndChargesCreate";
import { PurchaseTaxesAndChargesEdit } from "./purchaseTaxesAndCharges/PurchaseTaxesAndChargesEdit";
import { PurchaseTaxesAndChargesShow } from "./purchaseTaxesAndCharges/PurchaseTaxesAndChargesShow";
import { QuotationItemList } from "./quotationItem/QuotationItemList";
import { QuotationItemCreate } from "./quotationItem/QuotationItemCreate";
import { QuotationItemEdit } from "./quotationItem/QuotationItemEdit";
import { QuotationItemShow } from "./quotationItem/QuotationItemShow";
import { QuotationList } from "./quotation/QuotationList";
import { QuotationCreate } from "./quotation/QuotationCreate";
import { QuotationEdit } from "./quotation/QuotationEdit";
import { QuotationShow } from "./quotation/QuotationShow";
import { QuotationLostReasonDetailList } from "./quotationLostReasonDetail/QuotationLostReasonDetailList";
import { QuotationLostReasonDetailCreate } from "./quotationLostReasonDetail/QuotationLostReasonDetailCreate";
import { QuotationLostReasonDetailEdit } from "./quotationLostReasonDetail/QuotationLostReasonDetailEdit";
import { QuotationLostReasonDetailShow } from "./quotationLostReasonDetail/QuotationLostReasonDetailShow";
import { SalesInvoiceItemList } from "./salesInvoiceItem/SalesInvoiceItemList";
import { SalesInvoiceItemCreate } from "./salesInvoiceItem/SalesInvoiceItemCreate";
import { SalesInvoiceItemEdit } from "./salesInvoiceItem/SalesInvoiceItemEdit";
import { SalesInvoiceItemShow } from "./salesInvoiceItem/SalesInvoiceItemShow";
import { SalesInvoiceAdvanceList } from "./salesInvoiceAdvance/SalesInvoiceAdvanceList";
import { SalesInvoiceAdvanceCreate } from "./salesInvoiceAdvance/SalesInvoiceAdvanceCreate";
import { SalesInvoiceAdvanceEdit } from "./salesInvoiceAdvance/SalesInvoiceAdvanceEdit";
import { SalesInvoiceAdvanceShow } from "./salesInvoiceAdvance/SalesInvoiceAdvanceShow";
import { SalesInvoiceTimesheetList } from "./salesInvoiceTimesheet/SalesInvoiceTimesheetList";
import { SalesInvoiceTimesheetCreate } from "./salesInvoiceTimesheet/SalesInvoiceTimesheetCreate";
import { SalesInvoiceTimesheetEdit } from "./salesInvoiceTimesheet/SalesInvoiceTimesheetEdit";
import { SalesInvoiceTimesheetShow } from "./salesInvoiceTimesheet/SalesInvoiceTimesheetShow";
import { SalesInvoicePaymentList } from "./salesInvoicePayment/SalesInvoicePaymentList";
import { SalesInvoicePaymentCreate } from "./salesInvoicePayment/SalesInvoicePaymentCreate";
import { SalesInvoicePaymentEdit } from "./salesInvoicePayment/SalesInvoicePaymentEdit";
import { SalesInvoicePaymentShow } from "./salesInvoicePayment/SalesInvoicePaymentShow";
import { SalesOrderItemList } from "./salesOrderItem/SalesOrderItemList";
import { SalesOrderItemCreate } from "./salesOrderItem/SalesOrderItemCreate";
import { SalesOrderItemEdit } from "./salesOrderItem/SalesOrderItemEdit";
import { SalesOrderItemShow } from "./salesOrderItem/SalesOrderItemShow";
import { SalesInvoiceList } from "./salesInvoice/SalesInvoiceList";
import { SalesInvoiceCreate } from "./salesInvoice/SalesInvoiceCreate";
import { SalesInvoiceEdit } from "./salesInvoice/SalesInvoiceEdit";
import { SalesInvoiceShow } from "./salesInvoice/SalesInvoiceShow";
import { SalesPartnerItemList } from "./salesPartnerItem/SalesPartnerItemList";
import { SalesPartnerItemCreate } from "./salesPartnerItem/SalesPartnerItemCreate";
import { SalesPartnerItemEdit } from "./salesPartnerItem/SalesPartnerItemEdit";
import { SalesPartnerItemShow } from "./salesPartnerItem/SalesPartnerItemShow";
import { SalesOrderList } from "./salesOrder/SalesOrderList";
import { SalesOrderCreate } from "./salesOrder/SalesOrderCreate";
import { SalesOrderEdit } from "./salesOrder/SalesOrderEdit";
import { SalesOrderShow } from "./salesOrder/SalesOrderShow";
import { SalesTeamList } from "./salesTeam/SalesTeamList";
import { SalesTeamCreate } from "./salesTeam/SalesTeamCreate";
import { SalesTeamEdit } from "./salesTeam/SalesTeamEdit";
import { SalesTeamShow } from "./salesTeam/SalesTeamShow";
import { SalesPartnerList } from "./salesPartner/SalesPartnerList";
import { SalesPartnerCreate } from "./salesPartner/SalesPartnerCreate";
import { SalesPartnerEdit } from "./salesPartner/SalesPartnerEdit";
import { SalesPartnerShow } from "./salesPartner/SalesPartnerShow";
import { SalesStageList } from "./salesStage/SalesStageList";
import { SalesStageCreate } from "./salesStage/SalesStageCreate";
import { SalesStageEdit } from "./salesStage/SalesStageEdit";
import { SalesStageShow } from "./salesStage/SalesStageShow";
import { SalesTaxesAndChargesList } from "./salesTaxesAndCharges/SalesTaxesAndChargesList";
import { SalesTaxesAndChargesCreate } from "./salesTaxesAndCharges/SalesTaxesAndChargesCreate";
import { SalesTaxesAndChargesEdit } from "./salesTaxesAndCharges/SalesTaxesAndChargesEdit";
import { SalesTaxesAndChargesShow } from "./salesTaxesAndCharges/SalesTaxesAndChargesShow";
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
          name="ItemBarcode"
          list={ItemBarcodeList}
          edit={ItemBarcodeEdit}
          create={ItemBarcodeCreate}
          show={ItemBarcodeShow}
        />
        <Resource
          name="ItemAttribute"
          list={ItemAttributeList}
          edit={ItemAttributeEdit}
          create={ItemAttributeCreate}
          show={ItemAttributeShow}
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
        <Resource
          name="ModeOfPaymentAccount"
          list={ModeOfPaymentAccountList}
          edit={ModeOfPaymentAccountEdit}
          create={ModeOfPaymentAccountCreate}
          show={ModeOfPaymentAccountShow}
        />
        <Resource
          name="ModeOfPayment"
          list={ModeOfPaymentList}
          edit={ModeOfPaymentEdit}
          create={ModeOfPaymentCreate}
          show={ModeOfPaymentShow}
        />
        <Resource
          name="PosClosingEntryDetail"
          list={PosClosingEntryDetailList}
          edit={PosClosingEntryDetailEdit}
          create={PosClosingEntryDetailCreate}
          show={PosClosingEntryDetailShow}
        />
        <Resource
          name="PosClosingEntry"
          list={PosClosingEntryList}
          edit={PosClosingEntryEdit}
          create={PosClosingEntryCreate}
          show={PosClosingEntryShow}
        />
        <Resource
          name="PosClosingEntryTaxes"
          list={PosClosingEntryTaxesList}
          edit={PosClosingEntryTaxesEdit}
          create={PosClosingEntryTaxesCreate}
          show={PosClosingEntryTaxesShow}
        />
        <Resource
          name="PosInvoiceItem"
          list={PosInvoiceItemList}
          edit={PosInvoiceItemEdit}
          create={PosInvoiceItemCreate}
          show={PosInvoiceItemShow}
        />
        <Resource
          name="PosField"
          list={PosFieldList}
          edit={PosFieldEdit}
          create={PosFieldCreate}
          show={PosFieldShow}
        />
        <Resource
          name="PosCustomerGroup"
          list={PosCustomerGroupList}
          edit={PosCustomerGroupEdit}
          create={PosCustomerGroupCreate}
          show={PosCustomerGroupShow}
        />
        <Resource
          name="PosInvoice"
          list={PosInvoiceList}
          edit={PosInvoiceEdit}
          create={PosInvoiceCreate}
          show={PosInvoiceShow}
        />
        <Resource
          name="PosInvoiceReference"
          list={PosInvoiceReferenceList}
          edit={PosInvoiceReferenceEdit}
          create={PosInvoiceReferenceCreate}
          show={PosInvoiceReferenceShow}
        />
        <Resource
          name="PosInvoiceMergeLog"
          list={PosInvoiceMergeLogList}
          edit={PosInvoiceMergeLogEdit}
          create={PosInvoiceMergeLogCreate}
          show={PosInvoiceMergeLogShow}
        />
        <Resource
          name="PosPaymentMethod"
          list={PosPaymentMethodList}
          edit={PosPaymentMethodEdit}
          create={PosPaymentMethodCreate}
          show={PosPaymentMethodShow}
        />
        <Resource
          name="PosProfileUser"
          list={PosProfileUserList}
          edit={PosProfileUserEdit}
          create={PosProfileUserCreate}
          show={PosProfileUserShow}
        />
        <Resource
          name="PosProfile"
          list={PosProfileList}
          edit={PosProfileEdit}
          create={PosProfileCreate}
          show={PosProfileShow}
        />
        <Resource
          name="PosOpeningEntry"
          list={PosOpeningEntryList}
          edit={PosOpeningEntryEdit}
          create={PosOpeningEntryCreate}
          show={PosOpeningEntryShow}
        />
        <Resource
          name="PosOpeningEntryDetail"
          list={PosOpeningEntryDetailList}
          edit={PosOpeningEntryDetailEdit}
          create={PosOpeningEntryDetailCreate}
          show={PosOpeningEntryDetailShow}
        />
        <Resource
          name="PaymentEntryReference"
          list={PaymentEntryReferenceList}
          edit={PaymentEntryReferenceEdit}
          create={PaymentEntryReferenceCreate}
          show={PaymentEntryReferenceShow}
        />
        <Resource
          name="PaymentEntryDeduction"
          list={PaymentEntryDeductionList}
          edit={PaymentEntryDeductionEdit}
          create={PaymentEntryDeductionCreate}
          show={PaymentEntryDeductionShow}
        />
        <Resource
          name="PaymentRequest"
          list={PaymentRequestList}
          edit={PaymentRequestEdit}
          create={PaymentRequestCreate}
          show={PaymentRequestShow}
        />
        <Resource
          name="PaymentEntry"
          list={PaymentEntryList}
          edit={PaymentEntryEdit}
          create={PaymentEntryCreate}
          show={PaymentEntryShow}
        />
        <Resource
          name="PaymentLedgerEntry"
          list={PaymentLedgerEntryList}
          edit={PaymentLedgerEntryEdit}
          create={PaymentLedgerEntryCreate}
          show={PaymentLedgerEntryShow}
        />
        <Resource
          name="PaymentGatewayAccount"
          list={PaymentGatewayAccountList}
          edit={PaymentGatewayAccountEdit}
          create={PaymentGatewayAccountCreate}
          show={PaymentGatewayAccountShow}
        />
        <Resource
          name="PaymentOrderReference"
          list={PaymentOrderReferenceList}
          edit={PaymentOrderReferenceEdit}
          create={PaymentOrderReferenceCreate}
          show={PaymentOrderReferenceShow}
        />
        <Resource
          name="PickListItem"
          list={PickListItemList}
          edit={PickListItemEdit}
          create={PickListItemCreate}
          show={PickListItemShow}
        />
        <Resource
          name="PickList"
          list={PickListList}
          edit={PickListEdit}
          create={PickListCreate}
          show={PickListShow}
        />
        <Resource
          name="PurchaseInvoiceAdvance"
          list={PurchaseInvoiceAdvanceList}
          edit={PurchaseInvoiceAdvanceEdit}
          create={PurchaseInvoiceAdvanceCreate}
          show={PurchaseInvoiceAdvanceShow}
        />
        <Resource
          name="PurchaseInvoiceItem"
          list={PurchaseInvoiceItemList}
          edit={PurchaseInvoiceItemEdit}
          create={PurchaseInvoiceItemCreate}
          show={PurchaseInvoiceItemShow}
        />
        <Resource
          name="PurchaseInvoice"
          list={PurchaseInvoiceList}
          edit={PurchaseInvoiceEdit}
          create={PurchaseInvoiceCreate}
          show={PurchaseInvoiceShow}
        />
        <Resource
          name="PurchaseOrderItemSupplied"
          list={PurchaseOrderItemSuppliedList}
          edit={PurchaseOrderItemSuppliedEdit}
          create={PurchaseOrderItemSuppliedCreate}
          show={PurchaseOrderItemSuppliedShow}
        />
        <Resource
          name="PurchaseOrderItem"
          list={PurchaseOrderItemList}
          edit={PurchaseOrderItemEdit}
          create={PurchaseOrderItemCreate}
          show={PurchaseOrderItemShow}
        />
        <Resource
          name="PurchaseOrder"
          list={PurchaseOrderList}
          edit={PurchaseOrderEdit}
          create={PurchaseOrderCreate}
          show={PurchaseOrderShow}
        />
        <Resource
          name="PurchaseReceiptItemSupplied"
          list={PurchaseReceiptItemSuppliedList}
          edit={PurchaseReceiptItemSuppliedEdit}
          create={PurchaseReceiptItemSuppliedCreate}
          show={PurchaseReceiptItemSuppliedShow}
        />
        <Resource
          name="PurchaseReceiptItem"
          list={PurchaseReceiptItemList}
          edit={PurchaseReceiptItemEdit}
          create={PurchaseReceiptItemCreate}
          show={PurchaseReceiptItemShow}
        />
        <Resource
          name="PurchaseTaxesAndChargesTemplate"
          list={PurchaseTaxesAndChargesTemplateList}
          edit={PurchaseTaxesAndChargesTemplateEdit}
          create={PurchaseTaxesAndChargesTemplateCreate}
          show={PurchaseTaxesAndChargesTemplateShow}
        />
        <Resource
          name="PurchaseTaxesAndCharges"
          list={PurchaseTaxesAndChargesList}
          edit={PurchaseTaxesAndChargesEdit}
          create={PurchaseTaxesAndChargesCreate}
          show={PurchaseTaxesAndChargesShow}
        />
        <Resource
          name="QuotationItem"
          list={QuotationItemList}
          edit={QuotationItemEdit}
          create={QuotationItemCreate}
          show={QuotationItemShow}
        />
        <Resource
          name="Quotation"
          list={QuotationList}
          edit={QuotationEdit}
          create={QuotationCreate}
          show={QuotationShow}
        />
        <Resource
          name="QuotationLostReasonDetail"
          list={QuotationLostReasonDetailList}
          edit={QuotationLostReasonDetailEdit}
          create={QuotationLostReasonDetailCreate}
          show={QuotationLostReasonDetailShow}
        />
        <Resource
          name="SalesInvoiceItem"
          list={SalesInvoiceItemList}
          edit={SalesInvoiceItemEdit}
          create={SalesInvoiceItemCreate}
          show={SalesInvoiceItemShow}
        />
        <Resource
          name="SalesInvoiceAdvance"
          list={SalesInvoiceAdvanceList}
          edit={SalesInvoiceAdvanceEdit}
          create={SalesInvoiceAdvanceCreate}
          show={SalesInvoiceAdvanceShow}
        />
        <Resource
          name="SalesInvoiceTimesheet"
          list={SalesInvoiceTimesheetList}
          edit={SalesInvoiceTimesheetEdit}
          create={SalesInvoiceTimesheetCreate}
          show={SalesInvoiceTimesheetShow}
        />
        <Resource
          name="SalesInvoicePayment"
          list={SalesInvoicePaymentList}
          edit={SalesInvoicePaymentEdit}
          create={SalesInvoicePaymentCreate}
          show={SalesInvoicePaymentShow}
        />
        <Resource
          name="SalesOrderItem"
          list={SalesOrderItemList}
          edit={SalesOrderItemEdit}
          create={SalesOrderItemCreate}
          show={SalesOrderItemShow}
        />
        <Resource
          name="SalesInvoice"
          list={SalesInvoiceList}
          edit={SalesInvoiceEdit}
          create={SalesInvoiceCreate}
          show={SalesInvoiceShow}
        />
        <Resource
          name="SalesPartnerItem"
          list={SalesPartnerItemList}
          edit={SalesPartnerItemEdit}
          create={SalesPartnerItemCreate}
          show={SalesPartnerItemShow}
        />
        <Resource
          name="SalesOrder"
          list={SalesOrderList}
          edit={SalesOrderEdit}
          create={SalesOrderCreate}
          show={SalesOrderShow}
        />
        <Resource
          name="SalesTeam"
          list={SalesTeamList}
          edit={SalesTeamEdit}
          create={SalesTeamCreate}
          show={SalesTeamShow}
        />
        <Resource
          name="SalesPartner"
          list={SalesPartnerList}
          edit={SalesPartnerEdit}
          create={SalesPartnerCreate}
          show={SalesPartnerShow}
        />
        <Resource
          name="SalesStage"
          list={SalesStageList}
          edit={SalesStageEdit}
          create={SalesStageCreate}
          show={SalesStageShow}
        />
        <Resource
          name="SalesTaxesAndCharges"
          list={SalesTaxesAndChargesList}
          edit={SalesTaxesAndChargesEdit}
          create={SalesTaxesAndChargesCreate}
          show={SalesTaxesAndChargesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
