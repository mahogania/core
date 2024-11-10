import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BomCreatorItemList } from "./bomCreatorItem/BomCreatorItemList";
import { BomCreatorItemCreate } from "./bomCreatorItem/BomCreatorItemCreate";
import { BomCreatorItemEdit } from "./bomCreatorItem/BomCreatorItemEdit";
import { BomCreatorItemShow } from "./bomCreatorItem/BomCreatorItemShow";
import { BomCreatorList } from "./bomCreator/BomCreatorList";
import { BomCreatorCreate } from "./bomCreator/BomCreatorCreate";
import { BomCreatorEdit } from "./bomCreator/BomCreatorEdit";
import { BomCreatorShow } from "./bomCreator/BomCreatorShow";
import { BomExplosionItemList } from "./bomExplosionItem/BomExplosionItemList";
import { BomExplosionItemCreate } from "./bomExplosionItem/BomExplosionItemCreate";
import { BomExplosionItemEdit } from "./bomExplosionItem/BomExplosionItemEdit";
import { BomExplosionItemShow } from "./bomExplosionItem/BomExplosionItemShow";
import { BomItemList } from "./bomItem/BomItemList";
import { BomItemCreate } from "./bomItem/BomItemCreate";
import { BomItemEdit } from "./bomItem/BomItemEdit";
import { BomItemShow } from "./bomItem/BomItemShow";
import { BomOperationList } from "./bomOperation/BomOperationList";
import { BomOperationCreate } from "./bomOperation/BomOperationCreate";
import { BomOperationEdit } from "./bomOperation/BomOperationEdit";
import { BomOperationShow } from "./bomOperation/BomOperationShow";
import { BomScrapItemList } from "./bomScrapItem/BomScrapItemList";
import { BomScrapItemCreate } from "./bomScrapItem/BomScrapItemCreate";
import { BomScrapItemEdit } from "./bomScrapItem/BomScrapItemEdit";
import { BomScrapItemShow } from "./bomScrapItem/BomScrapItemShow";
import { BomUpdateBatchList } from "./bomUpdateBatch/BomUpdateBatchList";
import { BomUpdateBatchCreate } from "./bomUpdateBatch/BomUpdateBatchCreate";
import { BomUpdateBatchEdit } from "./bomUpdateBatch/BomUpdateBatchEdit";
import { BomUpdateBatchShow } from "./bomUpdateBatch/BomUpdateBatchShow";
import { BomUpdateLogList } from "./bomUpdateLog/BomUpdateLogList";
import { BomUpdateLogCreate } from "./bomUpdateLog/BomUpdateLogCreate";
import { BomUpdateLogEdit } from "./bomUpdateLog/BomUpdateLogEdit";
import { BomUpdateLogShow } from "./bomUpdateLog/BomUpdateLogShow";
import { BomWebsiteItemList } from "./bomWebsiteItem/BomWebsiteItemList";
import { BomWebsiteItemCreate } from "./bomWebsiteItem/BomWebsiteItemCreate";
import { BomWebsiteItemEdit } from "./bomWebsiteItem/BomWebsiteItemEdit";
import { BomWebsiteItemShow } from "./bomWebsiteItem/BomWebsiteItemShow";
import { BomWebsiteOperationList } from "./bomWebsiteOperation/BomWebsiteOperationList";
import { BomWebsiteOperationCreate } from "./bomWebsiteOperation/BomWebsiteOperationCreate";
import { BomWebsiteOperationEdit } from "./bomWebsiteOperation/BomWebsiteOperationEdit";
import { BomWebsiteOperationShow } from "./bomWebsiteOperation/BomWebsiteOperationShow";
import { BomList } from "./bom/BomList";
import { BomCreate } from "./bom/BomCreate";
import { BomEdit } from "./bom/BomEdit";
import { BomShow } from "./bom/BomShow";
import { BatchList } from "./batch/BatchList";
import { BatchCreate } from "./batch/BatchCreate";
import { BatchEdit } from "./batch/BatchEdit";
import { BatchShow } from "./batch/BatchShow";
import { BinList } from "./bin/BinList";
import { BinCreate } from "./bin/BinCreate";
import { BinEdit } from "./bin/BinEdit";
import { BinShow } from "./bin/BinShow";
import { InstallationNoteItemList } from "./installationNoteItem/InstallationNoteItemList";
import { InstallationNoteItemCreate } from "./installationNoteItem/InstallationNoteItemCreate";
import { InstallationNoteItemEdit } from "./installationNoteItem/InstallationNoteItemEdit";
import { InstallationNoteItemShow } from "./installationNoteItem/InstallationNoteItemShow";
import { InventoryDimensionList } from "./inventoryDimension/InventoryDimensionList";
import { InventoryDimensionCreate } from "./inventoryDimension/InventoryDimensionCreate";
import { InventoryDimensionEdit } from "./inventoryDimension/InventoryDimensionEdit";
import { InventoryDimensionShow } from "./inventoryDimension/InventoryDimensionShow";
import { LandedCostItemList } from "./landedCostItem/LandedCostItemList";
import { LandedCostItemCreate } from "./landedCostItem/LandedCostItemCreate";
import { LandedCostItemEdit } from "./landedCostItem/LandedCostItemEdit";
import { LandedCostItemShow } from "./landedCostItem/LandedCostItemShow";
import { LandedCostTaxesAndChargesList } from "./landedCostTaxesAndCharges/LandedCostTaxesAndChargesList";
import { LandedCostTaxesAndChargesCreate } from "./landedCostTaxesAndCharges/LandedCostTaxesAndChargesCreate";
import { LandedCostTaxesAndChargesEdit } from "./landedCostTaxesAndCharges/LandedCostTaxesAndChargesEdit";
import { LandedCostTaxesAndChargesShow } from "./landedCostTaxesAndCharges/LandedCostTaxesAndChargesShow";
import { LandedCostPurchaseReceiptList } from "./landedCostPurchaseReceipt/LandedCostPurchaseReceiptList";
import { LandedCostPurchaseReceiptCreate } from "./landedCostPurchaseReceipt/LandedCostPurchaseReceiptCreate";
import { LandedCostPurchaseReceiptEdit } from "./landedCostPurchaseReceipt/LandedCostPurchaseReceiptEdit";
import { LandedCostPurchaseReceiptShow } from "./landedCostPurchaseReceipt/LandedCostPurchaseReceiptShow";
import { LandedCostVoucherList } from "./landedCostVoucher/LandedCostVoucherList";
import { LandedCostVoucherCreate } from "./landedCostVoucher/LandedCostVoucherCreate";
import { LandedCostVoucherEdit } from "./landedCostVoucher/LandedCostVoucherEdit";
import { LandedCostVoucherShow } from "./landedCostVoucher/LandedCostVoucherShow";
import { MaintenanceScheduleItemList } from "./maintenanceScheduleItem/MaintenanceScheduleItemList";
import { MaintenanceScheduleItemCreate } from "./maintenanceScheduleItem/MaintenanceScheduleItemCreate";
import { MaintenanceScheduleItemEdit } from "./maintenanceScheduleItem/MaintenanceScheduleItemEdit";
import { MaintenanceScheduleItemShow } from "./maintenanceScheduleItem/MaintenanceScheduleItemShow";
import { MaintenanceScheduleList } from "./maintenanceSchedule/MaintenanceScheduleList";
import { MaintenanceScheduleCreate } from "./maintenanceSchedule/MaintenanceScheduleCreate";
import { MaintenanceScheduleEdit } from "./maintenanceSchedule/MaintenanceScheduleEdit";
import { MaintenanceScheduleShow } from "./maintenanceSchedule/MaintenanceScheduleShow";
import { MaintenanceTeamMemberList } from "./maintenanceTeamMember/MaintenanceTeamMemberList";
import { MaintenanceTeamMemberCreate } from "./maintenanceTeamMember/MaintenanceTeamMemberCreate";
import { MaintenanceTeamMemberEdit } from "./maintenanceTeamMember/MaintenanceTeamMemberEdit";
import { MaintenanceTeamMemberShow } from "./maintenanceTeamMember/MaintenanceTeamMemberShow";
import { MaintenanceVisitPurposeList } from "./maintenanceVisitPurpose/MaintenanceVisitPurposeList";
import { MaintenanceVisitPurposeCreate } from "./maintenanceVisitPurpose/MaintenanceVisitPurposeCreate";
import { MaintenanceVisitPurposeEdit } from "./maintenanceVisitPurpose/MaintenanceVisitPurposeEdit";
import { MaintenanceVisitPurposeShow } from "./maintenanceVisitPurpose/MaintenanceVisitPurposeShow";
import { MaintenanceVisitList } from "./maintenanceVisit/MaintenanceVisitList";
import { MaintenanceVisitCreate } from "./maintenanceVisit/MaintenanceVisitCreate";
import { MaintenanceVisitEdit } from "./maintenanceVisit/MaintenanceVisitEdit";
import { MaintenanceVisitShow } from "./maintenanceVisit/MaintenanceVisitShow";
import { MaterialRequestItemList } from "./materialRequestItem/MaterialRequestItemList";
import { MaterialRequestItemCreate } from "./materialRequestItem/MaterialRequestItemCreate";
import { MaterialRequestItemEdit } from "./materialRequestItem/MaterialRequestItemEdit";
import { MaterialRequestItemShow } from "./materialRequestItem/MaterialRequestItemShow";
import { ManufacturerList } from "./manufacturer/ManufacturerList";
import { ManufacturerCreate } from "./manufacturer/ManufacturerCreate";
import { ManufacturerEdit } from "./manufacturer/ManufacturerEdit";
import { ManufacturerShow } from "./manufacturer/ManufacturerShow";
import { MaterialRequestPlanItemList } from "./materialRequestPlanItem/MaterialRequestPlanItemList";
import { MaterialRequestPlanItemCreate } from "./materialRequestPlanItem/MaterialRequestPlanItemCreate";
import { MaterialRequestPlanItemEdit } from "./materialRequestPlanItem/MaterialRequestPlanItemEdit";
import { MaterialRequestPlanItemShow } from "./materialRequestPlanItem/MaterialRequestPlanItemShow";
import { MaterialRequestList } from "./materialRequest/MaterialRequestList";
import { MaterialRequestCreate } from "./materialRequest/MaterialRequestCreate";
import { MaterialRequestEdit } from "./materialRequest/MaterialRequestEdit";
import { MaterialRequestShow } from "./materialRequest/MaterialRequestShow";
import { PackedItemList } from "./packedItem/PackedItemList";
import { PackedItemCreate } from "./packedItem/PackedItemCreate";
import { PackedItemEdit } from "./packedItem/PackedItemEdit";
import { PackedItemShow } from "./packedItem/PackedItemShow";
import { PackingSlipItemList } from "./packingSlipItem/PackingSlipItemList";
import { PackingSlipItemCreate } from "./packingSlipItem/PackingSlipItemCreate";
import { PackingSlipItemEdit } from "./packingSlipItem/PackingSlipItemEdit";
import { PackingSlipItemShow } from "./packingSlipItem/PackingSlipItemShow";
import { PackingSlipList } from "./packingSlip/PackingSlipList";
import { PackingSlipCreate } from "./packingSlip/PackingSlipCreate";
import { PackingSlipEdit } from "./packingSlip/PackingSlipEdit";
import { PackingSlipShow } from "./packingSlip/PackingSlipShow";
import { ProductionPlanItemReferenceList } from "./productionPlanItemReference/ProductionPlanItemReferenceList";
import { ProductionPlanItemReferenceCreate } from "./productionPlanItemReference/ProductionPlanItemReferenceCreate";
import { ProductionPlanItemReferenceEdit } from "./productionPlanItemReference/ProductionPlanItemReferenceEdit";
import { ProductionPlanItemReferenceShow } from "./productionPlanItemReference/ProductionPlanItemReferenceShow";
import { ProductionPlanMaterialRequestWarehouseList } from "./productionPlanMaterialRequestWarehouse/ProductionPlanMaterialRequestWarehouseList";
import { ProductionPlanMaterialRequestWarehouseCreate } from "./productionPlanMaterialRequestWarehouse/ProductionPlanMaterialRequestWarehouseCreate";
import { ProductionPlanMaterialRequestWarehouseEdit } from "./productionPlanMaterialRequestWarehouse/ProductionPlanMaterialRequestWarehouseEdit";
import { ProductionPlanMaterialRequestWarehouseShow } from "./productionPlanMaterialRequestWarehouse/ProductionPlanMaterialRequestWarehouseShow";
import { ProductionPlanSubAssemblyItemList } from "./productionPlanSubAssemblyItem/ProductionPlanSubAssemblyItemList";
import { ProductionPlanSubAssemblyItemCreate } from "./productionPlanSubAssemblyItem/ProductionPlanSubAssemblyItemCreate";
import { ProductionPlanSubAssemblyItemEdit } from "./productionPlanSubAssemblyItem/ProductionPlanSubAssemblyItemEdit";
import { ProductionPlanSubAssemblyItemShow } from "./productionPlanSubAssemblyItem/ProductionPlanSubAssemblyItemShow";
import { ProductionPlanMaterialRequestList } from "./productionPlanMaterialRequest/ProductionPlanMaterialRequestList";
import { ProductionPlanMaterialRequestCreate } from "./productionPlanMaterialRequest/ProductionPlanMaterialRequestCreate";
import { ProductionPlanMaterialRequestEdit } from "./productionPlanMaterialRequest/ProductionPlanMaterialRequestEdit";
import { ProductionPlanMaterialRequestShow } from "./productionPlanMaterialRequest/ProductionPlanMaterialRequestShow";
import { ProductionPlanItemList } from "./productionPlanItem/ProductionPlanItemList";
import { ProductionPlanItemCreate } from "./productionPlanItem/ProductionPlanItemCreate";
import { ProductionPlanItemEdit } from "./productionPlanItem/ProductionPlanItemEdit";
import { ProductionPlanItemShow } from "./productionPlanItem/ProductionPlanItemShow";
import { ProductionPlanSalesOrderList } from "./productionPlanSalesOrder/ProductionPlanSalesOrderList";
import { ProductionPlanSalesOrderCreate } from "./productionPlanSalesOrder/ProductionPlanSalesOrderCreate";
import { ProductionPlanSalesOrderEdit } from "./productionPlanSalesOrder/ProductionPlanSalesOrderEdit";
import { ProductionPlanSalesOrderShow } from "./productionPlanSalesOrder/ProductionPlanSalesOrderShow";
import { ProductionPlanList } from "./productionPlan/ProductionPlanList";
import { ProductionPlanCreate } from "./productionPlan/ProductionPlanCreate";
import { ProductionPlanEdit } from "./productionPlan/ProductionPlanEdit";
import { ProductionPlanShow } from "./productionPlan/ProductionPlanShow";
import { SerialNoList } from "./serialNo/SerialNoList";
import { SerialNoCreate } from "./serialNo/SerialNoCreate";
import { SerialNoEdit } from "./serialNo/SerialNoEdit";
import { SerialNoShow } from "./serialNo/SerialNoShow";
import { SerialAndBatchEntryList } from "./serialAndBatchEntry/SerialAndBatchEntryList";
import { SerialAndBatchEntryCreate } from "./serialAndBatchEntry/SerialAndBatchEntryCreate";
import { SerialAndBatchEntryEdit } from "./serialAndBatchEntry/SerialAndBatchEntryEdit";
import { SerialAndBatchEntryShow } from "./serialAndBatchEntry/SerialAndBatchEntryShow";
import { SerialAndBatchBundleList } from "./serialAndBatchBundle/SerialAndBatchBundleList";
import { SerialAndBatchBundleCreate } from "./serialAndBatchBundle/SerialAndBatchBundleCreate";
import { SerialAndBatchBundleEdit } from "./serialAndBatchBundle/SerialAndBatchBundleEdit";
import { SerialAndBatchBundleShow } from "./serialAndBatchBundle/SerialAndBatchBundleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Warehouse"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BomCreatorItem"
          list={BomCreatorItemList}
          edit={BomCreatorItemEdit}
          create={BomCreatorItemCreate}
          show={BomCreatorItemShow}
        />
        <Resource
          name="BomCreator"
          list={BomCreatorList}
          edit={BomCreatorEdit}
          create={BomCreatorCreate}
          show={BomCreatorShow}
        />
        <Resource
          name="BomExplosionItem"
          list={BomExplosionItemList}
          edit={BomExplosionItemEdit}
          create={BomExplosionItemCreate}
          show={BomExplosionItemShow}
        />
        <Resource
          name="BomItem"
          list={BomItemList}
          edit={BomItemEdit}
          create={BomItemCreate}
          show={BomItemShow}
        />
        <Resource
          name="BomOperation"
          list={BomOperationList}
          edit={BomOperationEdit}
          create={BomOperationCreate}
          show={BomOperationShow}
        />
        <Resource
          name="BomScrapItem"
          list={BomScrapItemList}
          edit={BomScrapItemEdit}
          create={BomScrapItemCreate}
          show={BomScrapItemShow}
        />
        <Resource
          name="BomUpdateBatch"
          list={BomUpdateBatchList}
          edit={BomUpdateBatchEdit}
          create={BomUpdateBatchCreate}
          show={BomUpdateBatchShow}
        />
        <Resource
          name="BomUpdateLog"
          list={BomUpdateLogList}
          edit={BomUpdateLogEdit}
          create={BomUpdateLogCreate}
          show={BomUpdateLogShow}
        />
        <Resource
          name="BomWebsiteItem"
          list={BomWebsiteItemList}
          edit={BomWebsiteItemEdit}
          create={BomWebsiteItemCreate}
          show={BomWebsiteItemShow}
        />
        <Resource
          name="BomWebsiteOperation"
          list={BomWebsiteOperationList}
          edit={BomWebsiteOperationEdit}
          create={BomWebsiteOperationCreate}
          show={BomWebsiteOperationShow}
        />
        <Resource
          name="Bom"
          list={BomList}
          edit={BomEdit}
          create={BomCreate}
          show={BomShow}
        />
        <Resource
          name="Batch"
          list={BatchList}
          edit={BatchEdit}
          create={BatchCreate}
          show={BatchShow}
        />
        <Resource
          name="Bin"
          list={BinList}
          edit={BinEdit}
          create={BinCreate}
          show={BinShow}
        />
        <Resource
          name="InstallationNoteItem"
          list={InstallationNoteItemList}
          edit={InstallationNoteItemEdit}
          create={InstallationNoteItemCreate}
          show={InstallationNoteItemShow}
        />
        <Resource
          name="InventoryDimension"
          list={InventoryDimensionList}
          edit={InventoryDimensionEdit}
          create={InventoryDimensionCreate}
          show={InventoryDimensionShow}
        />
        <Resource
          name="LandedCostItem"
          list={LandedCostItemList}
          edit={LandedCostItemEdit}
          create={LandedCostItemCreate}
          show={LandedCostItemShow}
        />
        <Resource
          name="LandedCostTaxesAndCharges"
          list={LandedCostTaxesAndChargesList}
          edit={LandedCostTaxesAndChargesEdit}
          create={LandedCostTaxesAndChargesCreate}
          show={LandedCostTaxesAndChargesShow}
        />
        <Resource
          name="LandedCostPurchaseReceipt"
          list={LandedCostPurchaseReceiptList}
          edit={LandedCostPurchaseReceiptEdit}
          create={LandedCostPurchaseReceiptCreate}
          show={LandedCostPurchaseReceiptShow}
        />
        <Resource
          name="LandedCostVoucher"
          list={LandedCostVoucherList}
          edit={LandedCostVoucherEdit}
          create={LandedCostVoucherCreate}
          show={LandedCostVoucherShow}
        />
        <Resource
          name="MaintenanceScheduleItem"
          list={MaintenanceScheduleItemList}
          edit={MaintenanceScheduleItemEdit}
          create={MaintenanceScheduleItemCreate}
          show={MaintenanceScheduleItemShow}
        />
        <Resource
          name="MaintenanceSchedule"
          list={MaintenanceScheduleList}
          edit={MaintenanceScheduleEdit}
          create={MaintenanceScheduleCreate}
          show={MaintenanceScheduleShow}
        />
        <Resource
          name="MaintenanceTeamMember"
          list={MaintenanceTeamMemberList}
          edit={MaintenanceTeamMemberEdit}
          create={MaintenanceTeamMemberCreate}
          show={MaintenanceTeamMemberShow}
        />
        <Resource
          name="MaintenanceVisitPurpose"
          list={MaintenanceVisitPurposeList}
          edit={MaintenanceVisitPurposeEdit}
          create={MaintenanceVisitPurposeCreate}
          show={MaintenanceVisitPurposeShow}
        />
        <Resource
          name="MaintenanceVisit"
          list={MaintenanceVisitList}
          edit={MaintenanceVisitEdit}
          create={MaintenanceVisitCreate}
          show={MaintenanceVisitShow}
        />
        <Resource
          name="MaterialRequestItem"
          list={MaterialRequestItemList}
          edit={MaterialRequestItemEdit}
          create={MaterialRequestItemCreate}
          show={MaterialRequestItemShow}
        />
        <Resource
          name="Manufacturer"
          list={ManufacturerList}
          edit={ManufacturerEdit}
          create={ManufacturerCreate}
          show={ManufacturerShow}
        />
        <Resource
          name="MaterialRequestPlanItem"
          list={MaterialRequestPlanItemList}
          edit={MaterialRequestPlanItemEdit}
          create={MaterialRequestPlanItemCreate}
          show={MaterialRequestPlanItemShow}
        />
        <Resource
          name="MaterialRequest"
          list={MaterialRequestList}
          edit={MaterialRequestEdit}
          create={MaterialRequestCreate}
          show={MaterialRequestShow}
        />
        <Resource
          name="PackedItem"
          list={PackedItemList}
          edit={PackedItemEdit}
          create={PackedItemCreate}
          show={PackedItemShow}
        />
        <Resource
          name="PackingSlipItem"
          list={PackingSlipItemList}
          edit={PackingSlipItemEdit}
          create={PackingSlipItemCreate}
          show={PackingSlipItemShow}
        />
        <Resource
          name="PackingSlip"
          list={PackingSlipList}
          edit={PackingSlipEdit}
          create={PackingSlipCreate}
          show={PackingSlipShow}
        />
        <Resource
          name="ProductionPlanItemReference"
          list={ProductionPlanItemReferenceList}
          edit={ProductionPlanItemReferenceEdit}
          create={ProductionPlanItemReferenceCreate}
          show={ProductionPlanItemReferenceShow}
        />
        <Resource
          name="ProductionPlanMaterialRequestWarehouse"
          list={ProductionPlanMaterialRequestWarehouseList}
          edit={ProductionPlanMaterialRequestWarehouseEdit}
          create={ProductionPlanMaterialRequestWarehouseCreate}
          show={ProductionPlanMaterialRequestWarehouseShow}
        />
        <Resource
          name="ProductionPlanSubAssemblyItem"
          list={ProductionPlanSubAssemblyItemList}
          edit={ProductionPlanSubAssemblyItemEdit}
          create={ProductionPlanSubAssemblyItemCreate}
          show={ProductionPlanSubAssemblyItemShow}
        />
        <Resource
          name="ProductionPlanMaterialRequest"
          list={ProductionPlanMaterialRequestList}
          edit={ProductionPlanMaterialRequestEdit}
          create={ProductionPlanMaterialRequestCreate}
          show={ProductionPlanMaterialRequestShow}
        />
        <Resource
          name="ProductionPlanItem"
          list={ProductionPlanItemList}
          edit={ProductionPlanItemEdit}
          create={ProductionPlanItemCreate}
          show={ProductionPlanItemShow}
        />
        <Resource
          name="ProductionPlanSalesOrder"
          list={ProductionPlanSalesOrderList}
          edit={ProductionPlanSalesOrderEdit}
          create={ProductionPlanSalesOrderCreate}
          show={ProductionPlanSalesOrderShow}
        />
        <Resource
          name="ProductionPlan"
          list={ProductionPlanList}
          edit={ProductionPlanEdit}
          create={ProductionPlanCreate}
          show={ProductionPlanShow}
        />
        <Resource
          name="SerialNo"
          list={SerialNoList}
          edit={SerialNoEdit}
          create={SerialNoCreate}
          show={SerialNoShow}
        />
        <Resource
          name="SerialAndBatchEntry"
          list={SerialAndBatchEntryList}
          edit={SerialAndBatchEntryEdit}
          create={SerialAndBatchEntryCreate}
          show={SerialAndBatchEntryShow}
        />
        <Resource
          name="SerialAndBatchBundle"
          list={SerialAndBatchBundleList}
          edit={SerialAndBatchBundleEdit}
          create={SerialAndBatchBundleCreate}
          show={SerialAndBatchBundleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
