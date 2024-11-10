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
import { LandedCostPurchaseReceiptList } from "./landedCostPurchaseReceipt/LandedCostPurchaseReceiptList";
import { LandedCostPurchaseReceiptCreate } from "./landedCostPurchaseReceipt/LandedCostPurchaseReceiptCreate";
import { LandedCostPurchaseReceiptEdit } from "./landedCostPurchaseReceipt/LandedCostPurchaseReceiptEdit";
import { LandedCostPurchaseReceiptShow } from "./landedCostPurchaseReceipt/LandedCostPurchaseReceiptShow";
import { LandedCostTaxesAndChargesList } from "./landedCostTaxesAndCharges/LandedCostTaxesAndChargesList";
import { LandedCostTaxesAndChargesCreate } from "./landedCostTaxesAndCharges/LandedCostTaxesAndChargesCreate";
import { LandedCostTaxesAndChargesEdit } from "./landedCostTaxesAndCharges/LandedCostTaxesAndChargesEdit";
import { LandedCostTaxesAndChargesShow } from "./landedCostTaxesAndCharges/LandedCostTaxesAndChargesShow";
import { LandedCostVoucherList } from "./landedCostVoucher/LandedCostVoucherList";
import { LandedCostVoucherCreate } from "./landedCostVoucher/LandedCostVoucherCreate";
import { LandedCostVoucherEdit } from "./landedCostVoucher/LandedCostVoucherEdit";
import { LandedCostVoucherShow } from "./landedCostVoucher/LandedCostVoucherShow";
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
          name="LandedCostPurchaseReceipt"
          list={LandedCostPurchaseReceiptList}
          edit={LandedCostPurchaseReceiptEdit}
          create={LandedCostPurchaseReceiptCreate}
          show={LandedCostPurchaseReceiptShow}
        />
        <Resource
          name="LandedCostTaxesAndCharges"
          list={LandedCostTaxesAndChargesList}
          edit={LandedCostTaxesAndChargesEdit}
          create={LandedCostTaxesAndChargesCreate}
          show={LandedCostTaxesAndChargesShow}
        />
        <Resource
          name="LandedCostVoucher"
          list={LandedCostVoucherList}
          edit={LandedCostVoucherEdit}
          create={LandedCostVoucherCreate}
          show={LandedCostVoucherShow}
        />
      </Admin>
    </div>
  );
};

export default App;