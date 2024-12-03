import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const StatementOfAccountsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="account" source="account" />
        <TextInput label="ageingBasedOn" source="ageingBasedOn" />
        <NumberInput
          step={1}
          label="basedOnPaymentTerms"
          source="basedOnPaymentTerms"
        />
        <TextInput label="body" multiline source="body" />
        <TextInput label="ccTo" source="ccTo" />
        <TextInput label="collectionName" source="collectionName" />
        <TextInput label="company" source="company" />
        <TextInput label="currency" source="currency" />
        <TextInput label="customerCollection" source="customerCollection" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput
          step={1}
          label="enableAutoEmail"
          source="enableAutoEmail"
        />
        <NumberInput step={1} label="filterDuration" source="filterDuration" />
        <TextInput label="financeBook" source="financeBook" />
        <TextInput label="frequency" source="frequency" />
        <DateTimeInput label="fromDate" source="fromDate" />
        <TextInput label="groupBy" source="groupBy" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="ignoreCrDrNotes"
          source="ignoreCrDrNotes"
        />
        <NumberInput
          step={1}
          label="ignoreExchangeRateRevaluationJournals"
          source="ignoreExchangeRateRevaluationJournals"
        />
        <NumberInput step={1} label="includeAgeing" source="includeAgeing" />
        <NumberInput step={1} label="includeBreak" source="includeBreak" />
        <TextInput label="letterHead" source="letterHead" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="orientation" source="orientation" />
        <TextInput label="owner" source="owner" />
        <TextInput label="paymentTermsTemplate" source="paymentTermsTemplate" />
        <TextInput label="pdfName" source="pdfName" />
        <DateTimeInput label="postingDate" source="postingDate" />
        <NumberInput
          step={1}
          label="primaryMandatory"
          source="primaryMandatory"
        />
        <TextInput label="report" source="report" />
        <TextInput label="salesPartner" source="salesPartner" />
        <TextInput label="salesPerson" source="salesPerson" />
        <TextInput label="sender" source="sender" />
        <NumberInput
          step={1}
          label="showNetValuesInPartyAccount"
          source="showNetValuesInPartyAccount"
        />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="subject" source="subject" />
        <TextInput label="termsAndConditions" source="termsAndConditions" />
        <TextInput label="territory" source="territory" />
        <DateTimeInput label="toDate" source="toDate" />
      </SimpleForm>
    </Edit>
  );
};
