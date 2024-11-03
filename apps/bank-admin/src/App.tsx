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
      </Admin>
    </div>
  );
};

export default App;
