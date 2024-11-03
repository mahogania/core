import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const BankGuaranteeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="account" source="account" />
        <TextInput label="amended_from" source="amendedFrom" />
        <NumberInput label="amount" source="amount" />
        <TextInput label="bank" source="bank" />
        <TextInput label="bank_account" source="bankAccount" />
        <TextInput label="bank_account_no" source="bankAccountNo" />
        <TextInput label="bank_guarantee_number" source="bankGuaranteeNumber" />
        <TextInput label="bg_type" source="bgType" />
        <TextInput label="branch_code" source="branchCode" />
        <NumberInput label="charges" source="charges" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="end_date" source="endDate" />
        <TextInput label="fixed_deposit_number" source="fixedDepositNumber" />
        <TextInput label="iban" source="iban" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput label="margin_money" source="marginMoney" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput
          label="more_information"
          multiline
          source="moreInformation"
        />
        <TextInput label="name" source="name" />
        <TextInput label="name_of_beneficiary" source="nameOfBeneficiary" />
        <TextInput label="owner" source="owner" />
        <TextInput label="project" source="project" />
        <TextInput label="reference_docname" source="referenceDocname" />
        <TextInput label="reference_doctype" source="referenceDoctype" />
        <DateTimeInput label="start_date" source="startDate" />
        <TextInput label="supplier" source="supplier" />
        <TextInput label="swift_number" source="swiftNumber" />
        <NumberInput step={1} label="validity" source="validity" />
      </SimpleForm>
    </Edit>
  );
};
