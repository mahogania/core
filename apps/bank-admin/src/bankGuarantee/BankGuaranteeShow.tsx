import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BankGuaranteeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="account" source="account" />
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="amount" source="amount" />
        <TextField label="bank" source="bank" />
        <TextField label="bank_account" source="bankAccount" />
        <TextField label="bank_account_no" source="bankAccountNo" />
        <TextField label="bank_guarantee_number" source="bankGuaranteeNumber" />
        <TextField label="bg_type" source="bgType" />
        <TextField label="branch_code" source="branchCode" />
        <TextField label="charges" source="charges" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="end_date" source="endDate" />
        <TextField label="fixed_deposit_number" source="fixedDepositNumber" />
        <TextField label="iban" source="iban" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="margin_money" source="marginMoney" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="more_information" source="moreInformation" />
        <TextField label="name" source="name" />
        <TextField label="name_of_beneficiary" source="nameOfBeneficiary" />
        <TextField label="owner" source="owner" />
        <TextField label="project" source="project" />
        <TextField label="reference_docname" source="referenceDocname" />
        <TextField label="reference_doctype" source="referenceDoctype" />
        <TextField label="start_date" source="startDate" />
        <TextField label="supplier" source="supplier" />
        <TextField label="swift_number" source="swiftNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validity" source="validity" />
      </SimpleShowLayout>
    </Show>
  );
};
