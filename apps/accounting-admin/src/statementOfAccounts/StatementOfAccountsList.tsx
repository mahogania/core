import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StatementOfAccountsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StatementOfAccountsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="account" source="account" />
        <TextField label="ageingBasedOn" source="ageingBasedOn" />
        <TextField label="basedOnPaymentTerms" source="basedOnPaymentTerms" />
        <TextField label="body" source="body" />
        <TextField label="ccTo" source="ccTo" />
        <TextField label="collectionName" source="collectionName" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="customerCollection" source="customerCollection" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="enableAutoEmail" source="enableAutoEmail" />
        <TextField label="filterDuration" source="filterDuration" />
        <TextField label="financeBook" source="financeBook" />
        <TextField label="frequency" source="frequency" />
        <TextField label="fromDate" source="fromDate" />
        <TextField label="groupBy" source="groupBy" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="ignoreCrDrNotes" source="ignoreCrDrNotes" />
        <TextField
          label="ignoreExchangeRateRevaluationJournals"
          source="ignoreExchangeRateRevaluationJournals"
        />
        <TextField label="includeAgeing" source="includeAgeing" />
        <TextField label="includeBreak" source="includeBreak" />
        <TextField label="letterHead" source="letterHead" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="orientation" source="orientation" />
        <TextField label="owner" source="owner" />
        <TextField label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <TextField label="pdfName" source="pdfName" />
        <TextField label="postingDate" source="postingDate" />
        <TextField label="primaryMandatory" source="primaryMandatory" />
        <TextField label="report" source="report" />
        <TextField label="salesPartner" source="salesPartner" />
        <TextField label="salesPerson" source="salesPerson" />
        <TextField label="sender" source="sender" />
        <TextField
          label="showNetValuesInPartyAccount"
          source="showNetValuesInPartyAccount"
        />
        <TextField label="startDate" source="startDate" />
        <TextField label="subject" source="subject" />
        <TextField label="termsAndConditions" source="termsAndConditions" />
        <TextField label="territory" source="territory" />
        <TextField label="toDate" source="toDate" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
