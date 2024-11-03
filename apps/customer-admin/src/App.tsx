import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CrmNoteList } from "./crmNote/CrmNoteList";
import { CrmNoteCreate } from "./crmNote/CrmNoteCreate";
import { CrmNoteEdit } from "./crmNote/CrmNoteEdit";
import { CrmNoteShow } from "./crmNote/CrmNoteShow";
import { CallLogList } from "./callLog/CallLogList";
import { CallLogCreate } from "./callLog/CallLogCreate";
import { CallLogEdit } from "./callLog/CallLogEdit";
import { CallLogShow } from "./callLog/CallLogShow";
import { CalendarViewList } from "./calendarView/CalendarViewList";
import { CalendarViewCreate } from "./calendarView/CalendarViewCreate";
import { CalendarViewEdit } from "./calendarView/CalendarViewEdit";
import { CalendarViewShow } from "./calendarView/CalendarViewShow";
import { CampaignEmailScheduleList } from "./campaignEmailSchedule/CampaignEmailScheduleList";
import { CampaignEmailScheduleCreate } from "./campaignEmailSchedule/CampaignEmailScheduleCreate";
import { CampaignEmailScheduleEdit } from "./campaignEmailSchedule/CampaignEmailScheduleEdit";
import { CampaignEmailScheduleShow } from "./campaignEmailSchedule/CampaignEmailScheduleShow";
import { CampaignItemList } from "./campaignItem/CampaignItemList";
import { CampaignItemCreate } from "./campaignItem/CampaignItemCreate";
import { CampaignItemEdit } from "./campaignItem/CampaignItemEdit";
import { CampaignItemShow } from "./campaignItem/CampaignItemShow";
import { CampaignList } from "./campaign/CampaignList";
import { CampaignCreate } from "./campaign/CampaignCreate";
import { CampaignEdit } from "./campaign/CampaignEdit";
import { CampaignShow } from "./campaign/CampaignShow";
import { CashierClosingPaymentsList } from "./cashierClosingPayments/CashierClosingPaymentsList";
import { CashierClosingPaymentsCreate } from "./cashierClosingPayments/CashierClosingPaymentsCreate";
import { CashierClosingPaymentsEdit } from "./cashierClosingPayments/CashierClosingPaymentsEdit";
import { CashierClosingPaymentsShow } from "./cashierClosingPayments/CashierClosingPaymentsShow";
import { CashierClosingList } from "./cashierClosing/CashierClosingList";
import { CashierClosingCreate } from "./cashierClosing/CashierClosingCreate";
import { CashierClosingEdit } from "./cashierClosing/CashierClosingEdit";
import { CashierClosingShow } from "./cashierClosing/CashierClosingShow";
import { ChequePrintTemplateList } from "./chequePrintTemplate/ChequePrintTemplateList";
import { ChequePrintTemplateCreate } from "./chequePrintTemplate/ChequePrintTemplateCreate";
import { ChequePrintTemplateEdit } from "./chequePrintTemplate/ChequePrintTemplateEdit";
import { ChequePrintTemplateShow } from "./chequePrintTemplate/ChequePrintTemplateShow";
import { ClientScriptList } from "./clientScript/ClientScriptList";
import { ClientScriptCreate } from "./clientScript/ClientScriptCreate";
import { ClientScriptEdit } from "./clientScript/ClientScriptEdit";
import { ClientScriptShow } from "./clientScript/ClientScriptShow";
import { ChangelogFeedList } from "./changelogFeed/ChangelogFeedList";
import { ChangelogFeedCreate } from "./changelogFeed/ChangelogFeedCreate";
import { ChangelogFeedEdit } from "./changelogFeed/ChangelogFeedEdit";
import { ChangelogFeedShow } from "./changelogFeed/ChangelogFeedShow";
import { ClosedDocumentList } from "./closedDocument/ClosedDocumentList";
import { ClosedDocumentCreate } from "./closedDocument/ClosedDocumentCreate";
import { ClosedDocumentEdit } from "./closedDocument/ClosedDocumentEdit";
import { ClosedDocumentShow } from "./closedDocument/ClosedDocumentShow";
import { ClosingStockBalanceList } from "./closingStockBalance/ClosingStockBalanceList";
import { ClosingStockBalanceCreate } from "./closingStockBalance/ClosingStockBalanceCreate";
import { ClosingStockBalanceEdit } from "./closingStockBalance/ClosingStockBalanceEdit";
import { ClosingStockBalanceShow } from "./closingStockBalance/ClosingStockBalanceShow";
import { ColorList } from "./color/ColorList";
import { ColorCreate } from "./color/ColorCreate";
import { ColorEdit } from "./color/ColorEdit";
import { ColorShow } from "./color/ColorShow";
import { CommunicationLinkList } from "./communicationLink/CommunicationLinkList";
import { CommunicationLinkCreate } from "./communicationLink/CommunicationLinkCreate";
import { CommunicationLinkEdit } from "./communicationLink/CommunicationLinkEdit";
import { CommunicationLinkShow } from "./communicationLink/CommunicationLinkShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { CommunicationMediumTimeslotList } from "./communicationMediumTimeslot/CommunicationMediumTimeslotList";
import { CommunicationMediumTimeslotCreate } from "./communicationMediumTimeslot/CommunicationMediumTimeslotCreate";
import { CommunicationMediumTimeslotEdit } from "./communicationMediumTimeslot/CommunicationMediumTimeslotEdit";
import { CommunicationMediumTimeslotShow } from "./communicationMediumTimeslot/CommunicationMediumTimeslotShow";
import { CommunicationMediumList } from "./communicationMedium/CommunicationMediumList";
import { CommunicationMediumCreate } from "./communicationMedium/CommunicationMediumCreate";
import { CommunicationMediumEdit } from "./communicationMedium/CommunicationMediumEdit";
import { CommunicationMediumShow } from "./communicationMedium/CommunicationMediumShow";
import { CommunicationList } from "./communication/CommunicationList";
import { CommunicationCreate } from "./communication/CommunicationCreate";
import { CommunicationEdit } from "./communication/CommunicationEdit";
import { CommunicationShow } from "./communication/CommunicationShow";
import { CompanyHistoryList } from "./companyHistory/CompanyHistoryList";
import { CompanyHistoryCreate } from "./companyHistory/CompanyHistoryCreate";
import { CompanyHistoryEdit } from "./companyHistory/CompanyHistoryEdit";
import { CompanyHistoryShow } from "./companyHistory/CompanyHistoryShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { CompetitorDetailList } from "./competitorDetail/CompetitorDetailList";
import { CompetitorDetailCreate } from "./competitorDetail/CompetitorDetailCreate";
import { CompetitorDetailEdit } from "./competitorDetail/CompetitorDetailEdit";
import { CompetitorDetailShow } from "./competitorDetail/CompetitorDetailShow";
import { CompetitorList } from "./competitor/CompetitorList";
import { CompetitorCreate } from "./competitor/CompetitorCreate";
import { CompetitorEdit } from "./competitor/CompetitorEdit";
import { CompetitorShow } from "./competitor/CompetitorShow";
import { ConnectedAppList } from "./connectedApp/ConnectedAppList";
import { ConnectedAppCreate } from "./connectedApp/ConnectedAppCreate";
import { ConnectedAppEdit } from "./connectedApp/ConnectedAppEdit";
import { ConnectedAppShow } from "./connectedApp/ConnectedAppShow";
import { ConsoleLogList } from "./consoleLog/ConsoleLogList";
import { ConsoleLogCreate } from "./consoleLog/ConsoleLogCreate";
import { ConsoleLogEdit } from "./consoleLog/ConsoleLogEdit";
import { ConsoleLogShow } from "./consoleLog/ConsoleLogShow";
import { ContactEmailList } from "./contactEmail/ContactEmailList";
import { ContactEmailCreate } from "./contactEmail/ContactEmailCreate";
import { ContactEmailEdit } from "./contactEmail/ContactEmailEdit";
import { ContactEmailShow } from "./contactEmail/ContactEmailShow";
import { ContactPhoneList } from "./contactPhone/ContactPhoneList";
import { ContactPhoneCreate } from "./contactPhone/ContactPhoneCreate";
import { ContactPhoneEdit } from "./contactPhone/ContactPhoneEdit";
import { ContactPhoneShow } from "./contactPhone/ContactPhoneShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { ContractFulfilmentChecklistList } from "./contractFulfilmentChecklist/ContractFulfilmentChecklistList";
import { ContractFulfilmentChecklistCreate } from "./contractFulfilmentChecklist/ContractFulfilmentChecklistCreate";
import { ContractFulfilmentChecklistEdit } from "./contractFulfilmentChecklist/ContractFulfilmentChecklistEdit";
import { ContractFulfilmentChecklistShow } from "./contractFulfilmentChecklist/ContractFulfilmentChecklistShow";
import { ContractTemplateFulfilmentTermsList } from "./contractTemplateFulfilmentTerms/ContractTemplateFulfilmentTermsList";
import { ContractTemplateFulfilmentTermsCreate } from "./contractTemplateFulfilmentTerms/ContractTemplateFulfilmentTermsCreate";
import { ContractTemplateFulfilmentTermsEdit } from "./contractTemplateFulfilmentTerms/ContractTemplateFulfilmentTermsEdit";
import { ContractTemplateFulfilmentTermsShow } from "./contractTemplateFulfilmentTerms/ContractTemplateFulfilmentTermsShow";
import { ContractTemplateList } from "./contractTemplate/ContractTemplateList";
import { ContractTemplateCreate } from "./contractTemplate/ContractTemplateCreate";
import { ContractTemplateEdit } from "./contractTemplate/ContractTemplateEdit";
import { ContractTemplateShow } from "./contractTemplate/ContractTemplateShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { CostCenterAllocationPercentageList } from "./costCenterAllocationPercentage/CostCenterAllocationPercentageList";
import { CostCenterAllocationPercentageCreate } from "./costCenterAllocationPercentage/CostCenterAllocationPercentageCreate";
import { CostCenterAllocationPercentageEdit } from "./costCenterAllocationPercentage/CostCenterAllocationPercentageEdit";
import { CostCenterAllocationPercentageShow } from "./costCenterAllocationPercentage/CostCenterAllocationPercentageShow";
import { CostCenterAllocationList } from "./costCenterAllocation/CostCenterAllocationList";
import { CostCenterAllocationCreate } from "./costCenterAllocation/CostCenterAllocationCreate";
import { CostCenterAllocationEdit } from "./costCenterAllocation/CostCenterAllocationEdit";
import { CostCenterAllocationShow } from "./costCenterAllocation/CostCenterAllocationShow";
import { CostCenterList } from "./costCenter/CostCenterList";
import { CostCenterCreate } from "./costCenter/CostCenterCreate";
import { CostCenterEdit } from "./costCenter/CostCenterEdit";
import { CostCenterShow } from "./costCenter/CostCenterShow";
import { CountryList } from "./country/CountryList";
import { CountryCreate } from "./country/CountryCreate";
import { CountryEdit } from "./country/CountryEdit";
import { CountryShow } from "./country/CountryShow";
import { CouponCodeList } from "./couponCode/CouponCodeList";
import { CouponCodeCreate } from "./couponCode/CouponCodeCreate";
import { CouponCodeEdit } from "./couponCode/CouponCodeEdit";
import { CouponCodeShow } from "./couponCode/CouponCodeShow";
import { CurrencyExchangeSettingsDetailsList } from "./currencyExchangeSettingsDetails/CurrencyExchangeSettingsDetailsList";
import { CurrencyExchangeSettingsDetailsCreate } from "./currencyExchangeSettingsDetails/CurrencyExchangeSettingsDetailsCreate";
import { CurrencyExchangeSettingsDetailsEdit } from "./currencyExchangeSettingsDetails/CurrencyExchangeSettingsDetailsEdit";
import { CurrencyExchangeSettingsDetailsShow } from "./currencyExchangeSettingsDetails/CurrencyExchangeSettingsDetailsShow";
import { CurrencyExchangeSettingsResultList } from "./currencyExchangeSettingsResult/CurrencyExchangeSettingsResultList";
import { CurrencyExchangeSettingsResultCreate } from "./currencyExchangeSettingsResult/CurrencyExchangeSettingsResultCreate";
import { CurrencyExchangeSettingsResultEdit } from "./currencyExchangeSettingsResult/CurrencyExchangeSettingsResultEdit";
import { CurrencyExchangeSettingsResultShow } from "./currencyExchangeSettingsResult/CurrencyExchangeSettingsResultShow";
import { CurrencyExchangeList } from "./currencyExchange/CurrencyExchangeList";
import { CurrencyExchangeCreate } from "./currencyExchange/CurrencyExchangeCreate";
import { CurrencyExchangeEdit } from "./currencyExchange/CurrencyExchangeEdit";
import { CurrencyExchangeShow } from "./currencyExchange/CurrencyExchangeShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { CustomDocPermList } from "./customDocPerm/CustomDocPermList";
import { CustomDocPermCreate } from "./customDocPerm/CustomDocPermCreate";
import { CustomDocPermEdit } from "./customDocPerm/CustomDocPermEdit";
import { CustomDocPermShow } from "./customDocPerm/CustomDocPermShow";
import { CustomFieldList } from "./customField/CustomFieldList";
import { CustomFieldCreate } from "./customField/CustomFieldCreate";
import { CustomFieldEdit } from "./customField/CustomFieldEdit";
import { CustomFieldShow } from "./customField/CustomFieldShow";
import { CustomHtmlBlockList } from "./customHtmlBlock/CustomHtmlBlockList";
import { CustomHtmlBlockCreate } from "./customHtmlBlock/CustomHtmlBlockCreate";
import { CustomHtmlBlockEdit } from "./customHtmlBlock/CustomHtmlBlockEdit";
import { CustomHtmlBlockShow } from "./customHtmlBlock/CustomHtmlBlockShow";
import { CustomRoleList } from "./customRole/CustomRoleList";
import { CustomRoleCreate } from "./customRole/CustomRoleCreate";
import { CustomRoleEdit } from "./customRole/CustomRoleEdit";
import { CustomRoleShow } from "./customRole/CustomRoleShow";
import { CustomerCreditLimitList } from "./customerCreditLimit/CustomerCreditLimitList";
import { CustomerCreditLimitCreate } from "./customerCreditLimit/CustomerCreditLimitCreate";
import { CustomerCreditLimitEdit } from "./customerCreditLimit/CustomerCreditLimitEdit";
import { CustomerCreditLimitShow } from "./customerCreditLimit/CustomerCreditLimitShow";
import { CustomerGroupItemList } from "./customerGroupItem/CustomerGroupItemList";
import { CustomerGroupItemCreate } from "./customerGroupItem/CustomerGroupItemCreate";
import { CustomerGroupItemEdit } from "./customerGroupItem/CustomerGroupItemEdit";
import { CustomerGroupItemShow } from "./customerGroupItem/CustomerGroupItemShow";
import { CustomerGroupList } from "./customerGroup/CustomerGroupList";
import { CustomerGroupCreate } from "./customerGroup/CustomerGroupCreate";
import { CustomerGroupEdit } from "./customerGroup/CustomerGroupEdit";
import { CustomerGroupShow } from "./customerGroup/CustomerGroupShow";
import { CustomerItemList } from "./customerItem/CustomerItemList";
import { CustomerItemCreate } from "./customerItem/CustomerItemCreate";
import { CustomerItemEdit } from "./customerItem/CustomerItemEdit";
import { CustomerItemShow } from "./customerItem/CustomerItemShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { CustomizeFormFieldList } from "./customizeFormField/CustomizeFormFieldList";
import { CustomizeFormFieldCreate } from "./customizeFormField/CustomizeFormFieldCreate";
import { CustomizeFormFieldEdit } from "./customizeFormField/CustomizeFormFieldEdit";
import { CustomizeFormFieldShow } from "./customizeFormField/CustomizeFormFieldShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Customer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CrmNote"
          list={CrmNoteList}
          edit={CrmNoteEdit}
          create={CrmNoteCreate}
          show={CrmNoteShow}
        />
        <Resource
          name="CallLog"
          list={CallLogList}
          edit={CallLogEdit}
          create={CallLogCreate}
          show={CallLogShow}
        />
        <Resource
          name="CalendarView"
          list={CalendarViewList}
          edit={CalendarViewEdit}
          create={CalendarViewCreate}
          show={CalendarViewShow}
        />
        <Resource
          name="CampaignEmailSchedule"
          list={CampaignEmailScheduleList}
          edit={CampaignEmailScheduleEdit}
          create={CampaignEmailScheduleCreate}
          show={CampaignEmailScheduleShow}
        />
        <Resource
          name="CampaignItem"
          list={CampaignItemList}
          edit={CampaignItemEdit}
          create={CampaignItemCreate}
          show={CampaignItemShow}
        />
        <Resource
          name="Campaign"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}
          show={CampaignShow}
        />
        <Resource
          name="CashierClosingPayments"
          list={CashierClosingPaymentsList}
          edit={CashierClosingPaymentsEdit}
          create={CashierClosingPaymentsCreate}
          show={CashierClosingPaymentsShow}
        />
        <Resource
          name="CashierClosing"
          list={CashierClosingList}
          edit={CashierClosingEdit}
          create={CashierClosingCreate}
          show={CashierClosingShow}
        />
        <Resource
          name="ChequePrintTemplate"
          list={ChequePrintTemplateList}
          edit={ChequePrintTemplateEdit}
          create={ChequePrintTemplateCreate}
          show={ChequePrintTemplateShow}
        />
        <Resource
          name="ClientScript"
          list={ClientScriptList}
          edit={ClientScriptEdit}
          create={ClientScriptCreate}
          show={ClientScriptShow}
        />
        <Resource
          name="ChangelogFeed"
          list={ChangelogFeedList}
          edit={ChangelogFeedEdit}
          create={ChangelogFeedCreate}
          show={ChangelogFeedShow}
        />
        <Resource
          name="ClosedDocument"
          list={ClosedDocumentList}
          edit={ClosedDocumentEdit}
          create={ClosedDocumentCreate}
          show={ClosedDocumentShow}
        />
        <Resource
          name="ClosingStockBalance"
          list={ClosingStockBalanceList}
          edit={ClosingStockBalanceEdit}
          create={ClosingStockBalanceCreate}
          show={ClosingStockBalanceShow}
        />
        <Resource
          name="Color"
          list={ColorList}
          edit={ColorEdit}
          create={ColorCreate}
          show={ColorShow}
        />
        <Resource
          name="CommunicationLink"
          list={CommunicationLinkList}
          edit={CommunicationLinkEdit}
          create={CommunicationLinkCreate}
          show={CommunicationLinkShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="CommunicationMediumTimeslot"
          list={CommunicationMediumTimeslotList}
          edit={CommunicationMediumTimeslotEdit}
          create={CommunicationMediumTimeslotCreate}
          show={CommunicationMediumTimeslotShow}
        />
        <Resource
          name="CommunicationMedium"
          list={CommunicationMediumList}
          edit={CommunicationMediumEdit}
          create={CommunicationMediumCreate}
          show={CommunicationMediumShow}
        />
        <Resource
          name="Communication"
          list={CommunicationList}
          edit={CommunicationEdit}
          create={CommunicationCreate}
          show={CommunicationShow}
        />
        <Resource
          name="CompanyHistory"
          list={CompanyHistoryList}
          edit={CompanyHistoryEdit}
          create={CompanyHistoryCreate}
          show={CompanyHistoryShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="CompetitorDetail"
          list={CompetitorDetailList}
          edit={CompetitorDetailEdit}
          create={CompetitorDetailCreate}
          show={CompetitorDetailShow}
        />
        <Resource
          name="Competitor"
          list={CompetitorList}
          edit={CompetitorEdit}
          create={CompetitorCreate}
          show={CompetitorShow}
        />
        <Resource
          name="ConnectedApp"
          list={ConnectedAppList}
          edit={ConnectedAppEdit}
          create={ConnectedAppCreate}
          show={ConnectedAppShow}
        />
        <Resource
          name="ConsoleLog"
          list={ConsoleLogList}
          edit={ConsoleLogEdit}
          create={ConsoleLogCreate}
          show={ConsoleLogShow}
        />
        <Resource
          name="ContactEmail"
          list={ContactEmailList}
          edit={ContactEmailEdit}
          create={ContactEmailCreate}
          show={ContactEmailShow}
        />
        <Resource
          name="ContactPhone"
          list={ContactPhoneList}
          edit={ContactPhoneEdit}
          create={ContactPhoneCreate}
          show={ContactPhoneShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="ContractFulfilmentChecklist"
          list={ContractFulfilmentChecklistList}
          edit={ContractFulfilmentChecklistEdit}
          create={ContractFulfilmentChecklistCreate}
          show={ContractFulfilmentChecklistShow}
        />
        <Resource
          name="ContractTemplateFulfilmentTerms"
          list={ContractTemplateFulfilmentTermsList}
          edit={ContractTemplateFulfilmentTermsEdit}
          create={ContractTemplateFulfilmentTermsCreate}
          show={ContractTemplateFulfilmentTermsShow}
        />
        <Resource
          name="ContractTemplate"
          list={ContractTemplateList}
          edit={ContractTemplateEdit}
          create={ContractTemplateCreate}
          show={ContractTemplateShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="CostCenterAllocationPercentage"
          list={CostCenterAllocationPercentageList}
          edit={CostCenterAllocationPercentageEdit}
          create={CostCenterAllocationPercentageCreate}
          show={CostCenterAllocationPercentageShow}
        />
        <Resource
          name="CostCenterAllocation"
          list={CostCenterAllocationList}
          edit={CostCenterAllocationEdit}
          create={CostCenterAllocationCreate}
          show={CostCenterAllocationShow}
        />
        <Resource
          name="CostCenter"
          list={CostCenterList}
          edit={CostCenterEdit}
          create={CostCenterCreate}
          show={CostCenterShow}
        />
        <Resource
          name="Country"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate}
          show={CountryShow}
        />
        <Resource
          name="CouponCode"
          list={CouponCodeList}
          edit={CouponCodeEdit}
          create={CouponCodeCreate}
          show={CouponCodeShow}
        />
        <Resource
          name="CurrencyExchangeSettingsDetails"
          list={CurrencyExchangeSettingsDetailsList}
          edit={CurrencyExchangeSettingsDetailsEdit}
          create={CurrencyExchangeSettingsDetailsCreate}
          show={CurrencyExchangeSettingsDetailsShow}
        />
        <Resource
          name="CurrencyExchangeSettingsResult"
          list={CurrencyExchangeSettingsResultList}
          edit={CurrencyExchangeSettingsResultEdit}
          create={CurrencyExchangeSettingsResultCreate}
          show={CurrencyExchangeSettingsResultShow}
        />
        <Resource
          name="CurrencyExchange"
          list={CurrencyExchangeList}
          edit={CurrencyExchangeEdit}
          create={CurrencyExchangeCreate}
          show={CurrencyExchangeShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="CustomDocPerm"
          list={CustomDocPermList}
          edit={CustomDocPermEdit}
          create={CustomDocPermCreate}
          show={CustomDocPermShow}
        />
        <Resource
          name="CustomField"
          list={CustomFieldList}
          edit={CustomFieldEdit}
          create={CustomFieldCreate}
          show={CustomFieldShow}
        />
        <Resource
          name="CustomHtmlBlock"
          list={CustomHtmlBlockList}
          edit={CustomHtmlBlockEdit}
          create={CustomHtmlBlockCreate}
          show={CustomHtmlBlockShow}
        />
        <Resource
          name="CustomRole"
          list={CustomRoleList}
          edit={CustomRoleEdit}
          create={CustomRoleCreate}
          show={CustomRoleShow}
        />
        <Resource
          name="CustomerCreditLimit"
          list={CustomerCreditLimitList}
          edit={CustomerCreditLimitEdit}
          create={CustomerCreditLimitCreate}
          show={CustomerCreditLimitShow}
        />
        <Resource
          name="CustomerGroupItem"
          list={CustomerGroupItemList}
          edit={CustomerGroupItemEdit}
          create={CustomerGroupItemCreate}
          show={CustomerGroupItemShow}
        />
        <Resource
          name="CustomerGroup"
          list={CustomerGroupList}
          edit={CustomerGroupEdit}
          create={CustomerGroupCreate}
          show={CustomerGroupShow}
        />
        <Resource
          name="CustomerItem"
          list={CustomerItemList}
          edit={CustomerItemEdit}
          create={CustomerItemCreate}
          show={CustomerItemShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="CustomizeFormField"
          list={CustomizeFormFieldList}
          edit={CustomizeFormFieldEdit}
          create={CustomizeFormFieldCreate}
          show={CustomizeFormFieldShow}
        />
      </Admin>
    </div>
  );
};

export default App;
