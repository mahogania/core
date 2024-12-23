import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BankAccountSubtypeList } from "./bankAccountSubtype/BankAccountSubtypeList";
import { BankAccountSubtypeCreate } from "./bankAccountSubtype/BankAccountSubtypeCreate";
import { BankAccountSubtypeEdit } from "./bankAccountSubtype/BankAccountSubtypeEdit";
import { BankAccountSubtypeShow } from "./bankAccountSubtype/BankAccountSubtypeShow";
import { BankAccountTypeList } from "./bankAccountType/BankAccountTypeList";
import { BankAccountTypeCreate } from "./bankAccountType/BankAccountTypeCreate";
import { BankAccountTypeEdit } from "./bankAccountType/BankAccountTypeEdit";
import { BankAccountTypeShow } from "./bankAccountType/BankAccountTypeShow";
import { BankAccountList } from "./bankAccount/BankAccountList";
import { BankAccountCreate } from "./bankAccount/BankAccountCreate";
import { BankAccountEdit } from "./bankAccount/BankAccountEdit";
import { BankAccountShow } from "./bankAccount/BankAccountShow";
import { BankClearanceDetailList } from "./bankClearanceDetail/BankClearanceDetailList";
import { BankClearanceDetailCreate } from "./bankClearanceDetail/BankClearanceDetailCreate";
import { BankClearanceDetailEdit } from "./bankClearanceDetail/BankClearanceDetailEdit";
import { BankClearanceDetailShow } from "./bankClearanceDetail/BankClearanceDetailShow";
import { BankGuaranteeList } from "./bankGuarantee/BankGuaranteeList";
import { BankGuaranteeCreate } from "./bankGuarantee/BankGuaranteeCreate";
import { BankGuaranteeEdit } from "./bankGuarantee/BankGuaranteeEdit";
import { BankGuaranteeShow } from "./bankGuarantee/BankGuaranteeShow";
import { BankStatementImportList } from "./bankStatementImport/BankStatementImportList";
import { BankStatementImportCreate } from "./bankStatementImport/BankStatementImportCreate";
import { BankStatementImportEdit } from "./bankStatementImport/BankStatementImportEdit";
import { BankStatementImportShow } from "./bankStatementImport/BankStatementImportShow";
import { BankTransactionMappingList } from "./bankTransactionMapping/BankTransactionMappingList";
import { BankTransactionMappingCreate } from "./bankTransactionMapping/BankTransactionMappingCreate";
import { BankTransactionMappingEdit } from "./bankTransactionMapping/BankTransactionMappingEdit";
import { BankTransactionMappingShow } from "./bankTransactionMapping/BankTransactionMappingShow";
import { BankTransactionPaymentsList } from "./bankTransactionPayments/BankTransactionPaymentsList";
import { BankTransactionPaymentsCreate } from "./bankTransactionPayments/BankTransactionPaymentsCreate";
import { BankTransactionPaymentsEdit } from "./bankTransactionPayments/BankTransactionPaymentsEdit";
import { BankTransactionPaymentsShow } from "./bankTransactionPayments/BankTransactionPaymentsShow";
import { BankTransactionList } from "./bankTransaction/BankTransactionList";
import { BankTransactionCreate } from "./bankTransaction/BankTransactionCreate";
import { BankTransactionEdit } from "./bankTransaction/BankTransactionEdit";
import { BankTransactionShow } from "./bankTransaction/BankTransactionShow";
import { BankList } from "./bank/BankList";
import { BankCreate } from "./bank/BankCreate";
import { BankEdit } from "./bank/BankEdit";
import { BankShow } from "./bank/BankShow";
import { JournalEntryAccountList } from "./journalEntryAccount/JournalEntryAccountList";
import { JournalEntryAccountCreate } from "./journalEntryAccount/JournalEntryAccountCreate";
import { JournalEntryAccountEdit } from "./journalEntryAccount/JournalEntryAccountEdit";
import { JournalEntryAccountShow } from "./journalEntryAccount/JournalEntryAccountShow";
import { JournalEntryTemplateList } from "./journalEntryTemplate/JournalEntryTemplateList";
import { JournalEntryTemplateCreate } from "./journalEntryTemplate/JournalEntryTemplateCreate";
import { JournalEntryTemplateEdit } from "./journalEntryTemplate/JournalEntryTemplateEdit";
import { JournalEntryTemplateShow } from "./journalEntryTemplate/JournalEntryTemplateShow";
import { JournalEntryList } from "./journalEntry/JournalEntryList";
import { JournalEntryCreate } from "./journalEntry/JournalEntryCreate";
import { JournalEntryEdit } from "./journalEntry/JournalEntryEdit";
import { JournalEntryShow } from "./journalEntry/JournalEntryShow";
import { LedgerHealthMonitorCompanyList } from "./ledgerHealthMonitorCompany/LedgerHealthMonitorCompanyList";
import { LedgerHealthMonitorCompanyCreate } from "./ledgerHealthMonitorCompany/LedgerHealthMonitorCompanyCreate";
import { LedgerHealthMonitorCompanyEdit } from "./ledgerHealthMonitorCompany/LedgerHealthMonitorCompanyEdit";
import { LedgerHealthMonitorCompanyShow } from "./ledgerHealthMonitorCompany/LedgerHealthMonitorCompanyShow";
import { LedgerHealthList } from "./ledgerHealth/LedgerHealthList";
import { LedgerHealthCreate } from "./ledgerHealth/LedgerHealthCreate";
import { LedgerHealthEdit } from "./ledgerHealth/LedgerHealthEdit";
import { LedgerHealthShow } from "./ledgerHealth/LedgerHealthShow";
import { LedgerMergeAccountsList } from "./ledgerMergeAccounts/LedgerMergeAccountsList";
import { LedgerMergeAccountsCreate } from "./ledgerMergeAccounts/LedgerMergeAccountsCreate";
import { LedgerMergeAccountsEdit } from "./ledgerMergeAccounts/LedgerMergeAccountsEdit";
import { LedgerMergeAccountsShow } from "./ledgerMergeAccounts/LedgerMergeAccountsShow";
import { LedgerMergeList } from "./ledgerMerge/LedgerMergeList";
import { LedgerMergeCreate } from "./ledgerMerge/LedgerMergeCreate";
import { LedgerMergeEdit } from "./ledgerMerge/LedgerMergeEdit";
import { LedgerMergeShow } from "./ledgerMerge/LedgerMergeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Bank"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BankAccountSubtype"
          list={BankAccountSubtypeList}
          edit={BankAccountSubtypeEdit}
          create={BankAccountSubtypeCreate}
          show={BankAccountSubtypeShow}
        />
        <Resource
          name="BankAccountType"
          list={BankAccountTypeList}
          edit={BankAccountTypeEdit}
          create={BankAccountTypeCreate}
          show={BankAccountTypeShow}
        />
        <Resource
          name="BankAccount"
          list={BankAccountList}
          edit={BankAccountEdit}
          create={BankAccountCreate}
          show={BankAccountShow}
        />
        <Resource
          name="BankClearanceDetail"
          list={BankClearanceDetailList}
          edit={BankClearanceDetailEdit}
          create={BankClearanceDetailCreate}
          show={BankClearanceDetailShow}
        />
        <Resource
          name="BankGuarantee"
          list={BankGuaranteeList}
          edit={BankGuaranteeEdit}
          create={BankGuaranteeCreate}
          show={BankGuaranteeShow}
        />
        <Resource
          name="BankStatementImport"
          list={BankStatementImportList}
          edit={BankStatementImportEdit}
          create={BankStatementImportCreate}
          show={BankStatementImportShow}
        />
        <Resource
          name="BankTransactionMapping"
          list={BankTransactionMappingList}
          edit={BankTransactionMappingEdit}
          create={BankTransactionMappingCreate}
          show={BankTransactionMappingShow}
        />
        <Resource
          name="BankTransactionPayments"
          list={BankTransactionPaymentsList}
          edit={BankTransactionPaymentsEdit}
          create={BankTransactionPaymentsCreate}
          show={BankTransactionPaymentsShow}
        />
        <Resource
          name="BankTransaction"
          list={BankTransactionList}
          edit={BankTransactionEdit}
          create={BankTransactionCreate}
          show={BankTransactionShow}
        />
        <Resource
          name="Bank"
          list={BankList}
          edit={BankEdit}
          create={BankCreate}
          show={BankShow}
        />
        <Resource
          name="JournalEntryAccount"
          list={JournalEntryAccountList}
          edit={JournalEntryAccountEdit}
          create={JournalEntryAccountCreate}
          show={JournalEntryAccountShow}
        />
        <Resource
          name="JournalEntryTemplate"
          list={JournalEntryTemplateList}
          edit={JournalEntryTemplateEdit}
          create={JournalEntryTemplateCreate}
          show={JournalEntryTemplateShow}
        />
        <Resource
          name="JournalEntry"
          list={JournalEntryList}
          edit={JournalEntryEdit}
          create={JournalEntryCreate}
          show={JournalEntryShow}
        />
        <Resource
          name="LedgerHealthMonitorCompany"
          list={LedgerHealthMonitorCompanyList}
          edit={LedgerHealthMonitorCompanyEdit}
          create={LedgerHealthMonitorCompanyCreate}
          show={LedgerHealthMonitorCompanyShow}
        />
        <Resource
          name="LedgerHealth"
          list={LedgerHealthList}
          edit={LedgerHealthEdit}
          create={LedgerHealthCreate}
          show={LedgerHealthShow}
        />
        <Resource
          name="LedgerMergeAccounts"
          list={LedgerMergeAccountsList}
          edit={LedgerMergeAccountsEdit}
          create={LedgerMergeAccountsCreate}
          show={LedgerMergeAccountsShow}
        />
        <Resource
          name="LedgerMerge"
          list={LedgerMergeList}
          edit={LedgerMergeEdit}
          create={LedgerMergeCreate}
          show={LedgerMergeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
