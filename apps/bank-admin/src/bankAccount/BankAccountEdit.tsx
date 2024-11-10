import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BankAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="account" source="account" />
        <TextInput label="account_name" source="accountName" />
        <TextInput label="account_subtype" source="accountSubtype" />
        <TextInput label="account_type" source="accountType" />
        <TextInput label="bank" source="bank" />
        <TextInput label="bank_account_no" source="bankAccountNo" />
        <TextInput label="branch_code" source="branchCode" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="disabled" source="disabled" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <TextInput label="iban" source="iban" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="integration_id" source="integrationId" />
        <NumberInput
          step={1}
          label="is_company_account"
          source="isCompanyAccount"
        />
        <NumberInput step={1} label="is_default" source="isDefault" />
        <DateTimeInput
          label="last_integration_date"
          source="lastIntegrationDate"
        />
        <TextInput label="mask" source="mask" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="party" source="party" />
        <TextInput label="party_type" source="partyType" />
      </SimpleForm>
    </Edit>
  );
};
