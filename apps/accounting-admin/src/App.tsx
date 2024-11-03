import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AccountClosingBalanceList } from "./accountClosingBalance/AccountClosingBalanceList";
import { AccountClosingBalanceCreate } from "./accountClosingBalance/AccountClosingBalanceCreate";
import { AccountClosingBalanceEdit } from "./accountClosingBalance/AccountClosingBalanceEdit";
import { AccountClosingBalanceShow } from "./accountClosingBalance/AccountClosingBalanceShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { AccountingDimensionDetailList } from "./accountingDimensionDetail/AccountingDimensionDetailList";
import { AccountingDimensionDetailCreate } from "./accountingDimensionDetail/AccountingDimensionDetailCreate";
import { AccountingDimensionDetailEdit } from "./accountingDimensionDetail/AccountingDimensionDetailEdit";
import { AccountingDimensionDetailShow } from "./accountingDimensionDetail/AccountingDimensionDetailShow";
import { AccountingDimensionFilterList } from "./accountingDimensionFilter/AccountingDimensionFilterList";
import { AccountingDimensionFilterCreate } from "./accountingDimensionFilter/AccountingDimensionFilterCreate";
import { AccountingDimensionFilterEdit } from "./accountingDimensionFilter/AccountingDimensionFilterEdit";
import { AccountingDimensionFilterShow } from "./accountingDimensionFilter/AccountingDimensionFilterShow";
import { AccountingDimensionList } from "./accountingDimension/AccountingDimensionList";
import { AccountingDimensionCreate } from "./accountingDimension/AccountingDimensionCreate";
import { AccountingDimensionEdit } from "./accountingDimension/AccountingDimensionEdit";
import { AccountingDimensionShow } from "./accountingDimension/AccountingDimensionShow";
import { AccountingPeriodList } from "./accountingPeriod/AccountingPeriodList";
import { AccountingPeriodCreate } from "./accountingPeriod/AccountingPeriodCreate";
import { AccountingPeriodEdit } from "./accountingPeriod/AccountingPeriodEdit";
import { AccountingPeriodShow } from "./accountingPeriod/AccountingPeriodShow";
import { ActivityTypeList } from "./activityType/ActivityTypeList";
import { ActivityTypeCreate } from "./activityType/ActivityTypeCreate";
import { ActivityTypeEdit } from "./activityType/ActivityTypeEdit";
import { ActivityTypeShow } from "./activityType/ActivityTypeShow";
import { AddressTemplateList } from "./addressTemplate/AddressTemplateList";
import { AddressTemplateCreate } from "./addressTemplate/AddressTemplateCreate";
import { AddressTemplateEdit } from "./addressTemplate/AddressTemplateEdit";
import { AddressTemplateShow } from "./addressTemplate/AddressTemplateShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { AdvanceTaxesAndChargesList } from "./advanceTaxesAndCharges/AdvanceTaxesAndChargesList";
import { AdvanceTaxesAndChargesCreate } from "./advanceTaxesAndCharges/AdvanceTaxesAndChargesCreate";
import { AdvanceTaxesAndChargesEdit } from "./advanceTaxesAndCharges/AdvanceTaxesAndChargesEdit";
import { AdvanceTaxesAndChargesShow } from "./advanceTaxesAndCharges/AdvanceTaxesAndChargesShow";
import { ActivityLogList } from "./activityLog/ActivityLogList";
import { ActivityLogCreate } from "./activityLog/ActivityLogCreate";
import { ActivityLogEdit } from "./activityLog/ActivityLogEdit";
import { ActivityLogShow } from "./activityLog/ActivityLogShow";
import { AllowedDimensionList } from "./allowedDimension/AllowedDimensionList";
import { AllowedDimensionCreate } from "./allowedDimension/AllowedDimensionCreate";
import { AllowedDimensionEdit } from "./allowedDimension/AllowedDimensionEdit";
import { AllowedDimensionShow } from "./allowedDimension/AllowedDimensionShow";
import { AdvanceTaxList } from "./advanceTax/AdvanceTaxList";
import { AdvanceTaxCreate } from "./advanceTax/AdvanceTaxCreate";
import { AdvanceTaxEdit } from "./advanceTax/AdvanceTaxEdit";
import { AdvanceTaxShow } from "./advanceTax/AdvanceTaxShow";
import { AllowedToTransactWithList } from "./allowedToTransactWith/AllowedToTransactWithList";
import { AllowedToTransactWithCreate } from "./allowedToTransactWith/AllowedToTransactWithCreate";
import { AllowedToTransactWithEdit } from "./allowedToTransactWith/AllowedToTransactWithEdit";
import { AllowedToTransactWithShow } from "./allowedToTransactWith/AllowedToTransactWithShow";
import { AmendedDocumentNamingSettingsList } from "./amendedDocumentNamingSettings/AmendedDocumentNamingSettingsList";
import { AmendedDocumentNamingSettingsCreate } from "./amendedDocumentNamingSettings/AmendedDocumentNamingSettingsCreate";
import { AmendedDocumentNamingSettingsEdit } from "./amendedDocumentNamingSettings/AmendedDocumentNamingSettingsEdit";
import { AmendedDocumentNamingSettingsShow } from "./amendedDocumentNamingSettings/AmendedDocumentNamingSettingsShow";
import { ApplicableOnAccountList } from "./applicableOnAccount/ApplicableOnAccountList";
import { ApplicableOnAccountCreate } from "./applicableOnAccount/ApplicableOnAccountCreate";
import { ApplicableOnAccountEdit } from "./applicableOnAccount/ApplicableOnAccountEdit";
import { ApplicableOnAccountShow } from "./applicableOnAccount/ApplicableOnAccountShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { AssetActivityList } from "./assetActivity/AssetActivityList";
import { AssetActivityCreate } from "./assetActivity/AssetActivityCreate";
import { AssetActivityEdit } from "./assetActivity/AssetActivityEdit";
import { AssetActivityShow } from "./assetActivity/AssetActivityShow";
import { AssetCapitalizationAssetItemList } from "./assetCapitalizationAssetItem/AssetCapitalizationAssetItemList";
import { AssetCapitalizationAssetItemCreate } from "./assetCapitalizationAssetItem/AssetCapitalizationAssetItemCreate";
import { AssetCapitalizationAssetItemEdit } from "./assetCapitalizationAssetItem/AssetCapitalizationAssetItemEdit";
import { AssetCapitalizationAssetItemShow } from "./assetCapitalizationAssetItem/AssetCapitalizationAssetItemShow";
import { AssetCapitalizationServiceItemList } from "./assetCapitalizationServiceItem/AssetCapitalizationServiceItemList";
import { AssetCapitalizationServiceItemCreate } from "./assetCapitalizationServiceItem/AssetCapitalizationServiceItemCreate";
import { AssetCapitalizationServiceItemEdit } from "./assetCapitalizationServiceItem/AssetCapitalizationServiceItemEdit";
import { AssetCapitalizationServiceItemShow } from "./assetCapitalizationServiceItem/AssetCapitalizationServiceItemShow";
import { AssetCapitalizationStockItemList } from "./assetCapitalizationStockItem/AssetCapitalizationStockItemList";
import { AssetCapitalizationStockItemCreate } from "./assetCapitalizationStockItem/AssetCapitalizationStockItemCreate";
import { AssetCapitalizationStockItemEdit } from "./assetCapitalizationStockItem/AssetCapitalizationStockItemEdit";
import { AssetCapitalizationStockItemShow } from "./assetCapitalizationStockItem/AssetCapitalizationStockItemShow";
import { AssetCapitalizationList } from "./assetCapitalization/AssetCapitalizationList";
import { AssetCapitalizationCreate } from "./assetCapitalization/AssetCapitalizationCreate";
import { AssetCapitalizationEdit } from "./assetCapitalization/AssetCapitalizationEdit";
import { AssetCapitalizationShow } from "./assetCapitalization/AssetCapitalizationShow";
import { AssetCategoryAccountList } from "./assetCategoryAccount/AssetCategoryAccountList";
import { AssetCategoryAccountCreate } from "./assetCategoryAccount/AssetCategoryAccountCreate";
import { AssetCategoryAccountEdit } from "./assetCategoryAccount/AssetCategoryAccountEdit";
import { AssetCategoryAccountShow } from "./assetCategoryAccount/AssetCategoryAccountShow";
import { AssetCategoryList } from "./assetCategory/AssetCategoryList";
import { AssetCategoryCreate } from "./assetCategory/AssetCategoryCreate";
import { AssetCategoryEdit } from "./assetCategory/AssetCategoryEdit";
import { AssetCategoryShow } from "./assetCategory/AssetCategoryShow";
import { AssetDepreciationScheduleList } from "./assetDepreciationSchedule/AssetDepreciationScheduleList";
import { AssetDepreciationScheduleCreate } from "./assetDepreciationSchedule/AssetDepreciationScheduleCreate";
import { AssetDepreciationScheduleEdit } from "./assetDepreciationSchedule/AssetDepreciationScheduleEdit";
import { AssetDepreciationScheduleShow } from "./assetDepreciationSchedule/AssetDepreciationScheduleShow";
import { AssetFinanceBookList } from "./assetFinanceBook/AssetFinanceBookList";
import { AssetFinanceBookCreate } from "./assetFinanceBook/AssetFinanceBookCreate";
import { AssetFinanceBookEdit } from "./assetFinanceBook/AssetFinanceBookEdit";
import { AssetFinanceBookShow } from "./assetFinanceBook/AssetFinanceBookShow";
import { AssetMaintenanceLogList } from "./assetMaintenanceLog/AssetMaintenanceLogList";
import { AssetMaintenanceLogCreate } from "./assetMaintenanceLog/AssetMaintenanceLogCreate";
import { AssetMaintenanceLogEdit } from "./assetMaintenanceLog/AssetMaintenanceLogEdit";
import { AssetMaintenanceLogShow } from "./assetMaintenanceLog/AssetMaintenanceLogShow";
import { AssetMaintenanceTaskList } from "./assetMaintenanceTask/AssetMaintenanceTaskList";
import { AssetMaintenanceTaskCreate } from "./assetMaintenanceTask/AssetMaintenanceTaskCreate";
import { AssetMaintenanceTaskEdit } from "./assetMaintenanceTask/AssetMaintenanceTaskEdit";
import { AssetMaintenanceTaskShow } from "./assetMaintenanceTask/AssetMaintenanceTaskShow";
import { AssetMaintenanceTeamList } from "./assetMaintenanceTeam/AssetMaintenanceTeamList";
import { AssetMaintenanceTeamCreate } from "./assetMaintenanceTeam/AssetMaintenanceTeamCreate";
import { AssetMaintenanceTeamEdit } from "./assetMaintenanceTeam/AssetMaintenanceTeamEdit";
import { AssetMaintenanceTeamShow } from "./assetMaintenanceTeam/AssetMaintenanceTeamShow";
import { AssetMaintenanceList } from "./assetMaintenance/AssetMaintenanceList";
import { AssetMaintenanceCreate } from "./assetMaintenance/AssetMaintenanceCreate";
import { AssetMaintenanceEdit } from "./assetMaintenance/AssetMaintenanceEdit";
import { AssetMaintenanceShow } from "./assetMaintenance/AssetMaintenanceShow";
import { AssetMovementItemList } from "./assetMovementItem/AssetMovementItemList";
import { AssetMovementItemCreate } from "./assetMovementItem/AssetMovementItemCreate";
import { AssetMovementItemEdit } from "./assetMovementItem/AssetMovementItemEdit";
import { AssetMovementItemShow } from "./assetMovementItem/AssetMovementItemShow";
import { AssetRepairConsumedItemList } from "./assetRepairConsumedItem/AssetRepairConsumedItemList";
import { AssetRepairConsumedItemCreate } from "./assetRepairConsumedItem/AssetRepairConsumedItemCreate";
import { AssetRepairConsumedItemEdit } from "./assetRepairConsumedItem/AssetRepairConsumedItemEdit";
import { AssetRepairConsumedItemShow } from "./assetRepairConsumedItem/AssetRepairConsumedItemShow";
import { AssetRepairList } from "./assetRepair/AssetRepairList";
import { AssetRepairCreate } from "./assetRepair/AssetRepairCreate";
import { AssetRepairEdit } from "./assetRepair/AssetRepairEdit";
import { AssetRepairShow } from "./assetRepair/AssetRepairShow";
import { AssetShiftFactorList } from "./assetShiftFactor/AssetShiftFactorList";
import { AssetShiftFactorCreate } from "./assetShiftFactor/AssetShiftFactorCreate";
import { AssetShiftFactorEdit } from "./assetShiftFactor/AssetShiftFactorEdit";
import { AssetShiftFactorShow } from "./assetShiftFactor/AssetShiftFactorShow";
import { AssetValueAdjustmentList } from "./assetValueAdjustment/AssetValueAdjustmentList";
import { AssetValueAdjustmentCreate } from "./assetValueAdjustment/AssetValueAdjustmentCreate";
import { AssetValueAdjustmentEdit } from "./assetValueAdjustment/AssetValueAdjustmentEdit";
import { AssetValueAdjustmentShow } from "./assetValueAdjustment/AssetValueAdjustmentShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { AssignmentRuleDayList } from "./assignmentRuleDay/AssignmentRuleDayList";
import { AssignmentRuleDayCreate } from "./assignmentRuleDay/AssignmentRuleDayCreate";
import { AssignmentRuleDayEdit } from "./assignmentRuleDay/AssignmentRuleDayEdit";
import { AssignmentRuleDayShow } from "./assignmentRuleDay/AssignmentRuleDayShow";
import { AssignmentRuleUserList } from "./assignmentRuleUser/AssignmentRuleUserList";
import { AssignmentRuleUserCreate } from "./assignmentRuleUser/AssignmentRuleUserCreate";
import { AssignmentRuleUserEdit } from "./assignmentRuleUser/AssignmentRuleUserEdit";
import { AssignmentRuleUserShow } from "./assignmentRuleUser/AssignmentRuleUserShow";
import { AssignmentRuleList } from "./assignmentRule/AssignmentRuleList";
import { AssignmentRuleCreate } from "./assignmentRule/AssignmentRuleCreate";
import { AssignmentRuleEdit } from "./assignmentRule/AssignmentRuleEdit";
import { AssignmentRuleShow } from "./assignmentRule/AssignmentRuleShow";
import { AuthorizationRuleList } from "./authorizationRule/AuthorizationRuleList";
import { AuthorizationRuleCreate } from "./authorizationRule/AuthorizationRuleCreate";
import { AuthorizationRuleEdit } from "./authorizationRule/AuthorizationRuleEdit";
import { AuthorizationRuleShow } from "./authorizationRule/AuthorizationRuleShow";
import { AutoEmailReportList } from "./autoEmailReport/AutoEmailReportList";
import { AutoEmailReportCreate } from "./autoEmailReport/AutoEmailReportCreate";
import { AutoEmailReportEdit } from "./autoEmailReport/AutoEmailReportEdit";
import { AutoEmailReportShow } from "./autoEmailReport/AutoEmailReportShow";
import { AutoRepeatDayList } from "./autoRepeatDay/AutoRepeatDayList";
import { AutoRepeatDayCreate } from "./autoRepeatDay/AutoRepeatDayCreate";
import { AutoRepeatDayEdit } from "./autoRepeatDay/AutoRepeatDayEdit";
import { AutoRepeatDayShow } from "./autoRepeatDay/AutoRepeatDayShow";
import { BisectNodesList } from "./bisectNodes/BisectNodesList";
import { BisectNodesCreate } from "./bisectNodes/BisectNodesCreate";
import { BisectNodesEdit } from "./bisectNodes/BisectNodesEdit";
import { BisectNodesShow } from "./bisectNodes/BisectNodesShow";
import { BrandList } from "./brand/BrandList";
import { BrandCreate } from "./brand/BrandCreate";
import { BrandEdit } from "./brand/BrandEdit";
import { BrandShow } from "./brand/BrandShow";
import { BudgetAccountList } from "./budgetAccount/BudgetAccountList";
import { BudgetAccountCreate } from "./budgetAccount/BudgetAccountCreate";
import { BudgetAccountEdit } from "./budgetAccount/BudgetAccountEdit";
import { BudgetAccountShow } from "./budgetAccount/BudgetAccountShow";
import { BudgetList } from "./budget/BudgetList";
import { BudgetCreate } from "./budget/BudgetCreate";
import { BudgetEdit } from "./budget/BudgetEdit";
import { BudgetShow } from "./budget/BudgetShow";
import { BulkTransactionLogDetailList } from "./bulkTransactionLogDetail/BulkTransactionLogDetailList";
import { BulkTransactionLogDetailCreate } from "./bulkTransactionLogDetail/BulkTransactionLogDetailCreate";
import { BulkTransactionLogDetailEdit } from "./bulkTransactionLogDetail/BulkTransactionLogDetailEdit";
import { BulkTransactionLogDetailShow } from "./bulkTransactionLogDetail/BulkTransactionLogDetailShow";
import { CustomsTariffNumberList } from "./customsTariffNumber/CustomsTariffNumberList";
import { CustomsTariffNumberCreate } from "./customsTariffNumber/CustomsTariffNumberCreate";
import { CustomsTariffNumberEdit } from "./customsTariffNumber/CustomsTariffNumberEdit";
import { CustomsTariffNumberShow } from "./customsTariffNumber/CustomsTariffNumberShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Accounting"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AccountClosingBalance"
          list={AccountClosingBalanceList}
          edit={AccountClosingBalanceEdit}
          create={AccountClosingBalanceCreate}
          show={AccountClosingBalanceShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="AccountingDimensionDetail"
          list={AccountingDimensionDetailList}
          edit={AccountingDimensionDetailEdit}
          create={AccountingDimensionDetailCreate}
          show={AccountingDimensionDetailShow}
        />
        <Resource
          name="AccountingDimensionFilter"
          list={AccountingDimensionFilterList}
          edit={AccountingDimensionFilterEdit}
          create={AccountingDimensionFilterCreate}
          show={AccountingDimensionFilterShow}
        />
        <Resource
          name="AccountingDimension"
          list={AccountingDimensionList}
          edit={AccountingDimensionEdit}
          create={AccountingDimensionCreate}
          show={AccountingDimensionShow}
        />
        <Resource
          name="AccountingPeriod"
          list={AccountingPeriodList}
          edit={AccountingPeriodEdit}
          create={AccountingPeriodCreate}
          show={AccountingPeriodShow}
        />
        <Resource
          name="ActivityType"
          list={ActivityTypeList}
          edit={ActivityTypeEdit}
          create={ActivityTypeCreate}
          show={ActivityTypeShow}
        />
        <Resource
          name="AddressTemplate"
          list={AddressTemplateList}
          edit={AddressTemplateEdit}
          create={AddressTemplateCreate}
          show={AddressTemplateShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="AdvanceTaxesAndCharges"
          list={AdvanceTaxesAndChargesList}
          edit={AdvanceTaxesAndChargesEdit}
          create={AdvanceTaxesAndChargesCreate}
          show={AdvanceTaxesAndChargesShow}
        />
        <Resource
          name="ActivityLog"
          list={ActivityLogList}
          edit={ActivityLogEdit}
          create={ActivityLogCreate}
          show={ActivityLogShow}
        />
        <Resource
          name="AllowedDimension"
          list={AllowedDimensionList}
          edit={AllowedDimensionEdit}
          create={AllowedDimensionCreate}
          show={AllowedDimensionShow}
        />
        <Resource
          name="AdvanceTax"
          list={AdvanceTaxList}
          edit={AdvanceTaxEdit}
          create={AdvanceTaxCreate}
          show={AdvanceTaxShow}
        />
        <Resource
          name="AllowedToTransactWith"
          list={AllowedToTransactWithList}
          edit={AllowedToTransactWithEdit}
          create={AllowedToTransactWithCreate}
          show={AllowedToTransactWithShow}
        />
        <Resource
          name="AmendedDocumentNamingSettings"
          list={AmendedDocumentNamingSettingsList}
          edit={AmendedDocumentNamingSettingsEdit}
          create={AmendedDocumentNamingSettingsCreate}
          show={AmendedDocumentNamingSettingsShow}
        />
        <Resource
          name="ApplicableOnAccount"
          list={ApplicableOnAccountList}
          edit={ApplicableOnAccountEdit}
          create={ApplicableOnAccountCreate}
          show={ApplicableOnAccountShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="AssetActivity"
          list={AssetActivityList}
          edit={AssetActivityEdit}
          create={AssetActivityCreate}
          show={AssetActivityShow}
        />
        <Resource
          name="AssetCapitalizationAssetItem"
          list={AssetCapitalizationAssetItemList}
          edit={AssetCapitalizationAssetItemEdit}
          create={AssetCapitalizationAssetItemCreate}
          show={AssetCapitalizationAssetItemShow}
        />
        <Resource
          name="AssetCapitalizationServiceItem"
          list={AssetCapitalizationServiceItemList}
          edit={AssetCapitalizationServiceItemEdit}
          create={AssetCapitalizationServiceItemCreate}
          show={AssetCapitalizationServiceItemShow}
        />
        <Resource
          name="AssetCapitalizationStockItem"
          list={AssetCapitalizationStockItemList}
          edit={AssetCapitalizationStockItemEdit}
          create={AssetCapitalizationStockItemCreate}
          show={AssetCapitalizationStockItemShow}
        />
        <Resource
          name="AssetCapitalization"
          list={AssetCapitalizationList}
          edit={AssetCapitalizationEdit}
          create={AssetCapitalizationCreate}
          show={AssetCapitalizationShow}
        />
        <Resource
          name="AssetCategoryAccount"
          list={AssetCategoryAccountList}
          edit={AssetCategoryAccountEdit}
          create={AssetCategoryAccountCreate}
          show={AssetCategoryAccountShow}
        />
        <Resource
          name="AssetCategory"
          list={AssetCategoryList}
          edit={AssetCategoryEdit}
          create={AssetCategoryCreate}
          show={AssetCategoryShow}
        />
        <Resource
          name="AssetDepreciationSchedule"
          list={AssetDepreciationScheduleList}
          edit={AssetDepreciationScheduleEdit}
          create={AssetDepreciationScheduleCreate}
          show={AssetDepreciationScheduleShow}
        />
        <Resource
          name="AssetFinanceBook"
          list={AssetFinanceBookList}
          edit={AssetFinanceBookEdit}
          create={AssetFinanceBookCreate}
          show={AssetFinanceBookShow}
        />
        <Resource
          name="AssetMaintenanceLog"
          list={AssetMaintenanceLogList}
          edit={AssetMaintenanceLogEdit}
          create={AssetMaintenanceLogCreate}
          show={AssetMaintenanceLogShow}
        />
        <Resource
          name="AssetMaintenanceTask"
          list={AssetMaintenanceTaskList}
          edit={AssetMaintenanceTaskEdit}
          create={AssetMaintenanceTaskCreate}
          show={AssetMaintenanceTaskShow}
        />
        <Resource
          name="AssetMaintenanceTeam"
          list={AssetMaintenanceTeamList}
          edit={AssetMaintenanceTeamEdit}
          create={AssetMaintenanceTeamCreate}
          show={AssetMaintenanceTeamShow}
        />
        <Resource
          name="AssetMaintenance"
          list={AssetMaintenanceList}
          edit={AssetMaintenanceEdit}
          create={AssetMaintenanceCreate}
          show={AssetMaintenanceShow}
        />
        <Resource
          name="AssetMovementItem"
          list={AssetMovementItemList}
          edit={AssetMovementItemEdit}
          create={AssetMovementItemCreate}
          show={AssetMovementItemShow}
        />
        <Resource
          name="AssetRepairConsumedItem"
          list={AssetRepairConsumedItemList}
          edit={AssetRepairConsumedItemEdit}
          create={AssetRepairConsumedItemCreate}
          show={AssetRepairConsumedItemShow}
        />
        <Resource
          name="AssetRepair"
          list={AssetRepairList}
          edit={AssetRepairEdit}
          create={AssetRepairCreate}
          show={AssetRepairShow}
        />
        <Resource
          name="AssetShiftFactor"
          list={AssetShiftFactorList}
          edit={AssetShiftFactorEdit}
          create={AssetShiftFactorCreate}
          show={AssetShiftFactorShow}
        />
        <Resource
          name="AssetValueAdjustment"
          list={AssetValueAdjustmentList}
          edit={AssetValueAdjustmentEdit}
          create={AssetValueAdjustmentCreate}
          show={AssetValueAdjustmentShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="AssignmentRuleDay"
          list={AssignmentRuleDayList}
          edit={AssignmentRuleDayEdit}
          create={AssignmentRuleDayCreate}
          show={AssignmentRuleDayShow}
        />
        <Resource
          name="AssignmentRuleUser"
          list={AssignmentRuleUserList}
          edit={AssignmentRuleUserEdit}
          create={AssignmentRuleUserCreate}
          show={AssignmentRuleUserShow}
        />
        <Resource
          name="AssignmentRule"
          list={AssignmentRuleList}
          edit={AssignmentRuleEdit}
          create={AssignmentRuleCreate}
          show={AssignmentRuleShow}
        />
        <Resource
          name="AuthorizationRule"
          list={AuthorizationRuleList}
          edit={AuthorizationRuleEdit}
          create={AuthorizationRuleCreate}
          show={AuthorizationRuleShow}
        />
        <Resource
          name="AutoEmailReport"
          list={AutoEmailReportList}
          edit={AutoEmailReportEdit}
          create={AutoEmailReportCreate}
          show={AutoEmailReportShow}
        />
        <Resource
          name="AutoRepeatDay"
          list={AutoRepeatDayList}
          edit={AutoRepeatDayEdit}
          create={AutoRepeatDayCreate}
          show={AutoRepeatDayShow}
        />
        <Resource
          name="BisectNodes"
          list={BisectNodesList}
          edit={BisectNodesEdit}
          create={BisectNodesCreate}
          show={BisectNodesShow}
        />
        <Resource
          name="Brand"
          list={BrandList}
          edit={BrandEdit}
          create={BrandCreate}
          show={BrandShow}
        />
        <Resource
          name="BudgetAccount"
          list={BudgetAccountList}
          edit={BudgetAccountEdit}
          create={BudgetAccountCreate}
          show={BudgetAccountShow}
        />
        <Resource
          name="Budget"
          list={BudgetList}
          edit={BudgetEdit}
          create={BudgetCreate}
          show={BudgetShow}
        />
        <Resource
          name="BulkTransactionLogDetail"
          list={BulkTransactionLogDetailList}
          edit={BulkTransactionLogDetailEdit}
          create={BulkTransactionLogDetailCreate}
          show={BulkTransactionLogDetailShow}
        />
        <Resource
          name="CustomsTariffNumber"
          list={CustomsTariffNumberList}
          edit={CustomsTariffNumberEdit}
          create={CustomsTariffNumberCreate}
          show={CustomsTariffNumberShow}
        />
      </Admin>
    </div>
  );
};

export default App;
