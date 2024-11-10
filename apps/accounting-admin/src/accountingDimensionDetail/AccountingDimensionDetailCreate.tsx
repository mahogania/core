import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AccountingDimensionDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="automatically_post_balancing_accounting_entry"
          source="automaticallyPostBalancingAccountingEntry"
        />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="default_dimension" source="defaultDimension" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput
          step={1}
          label="mandatory_for_bs"
          source="mandatoryForBs"
        />
        <NumberInput
          step={1}
          label="mandatory_for_pl"
          source="mandatoryForPl"
        />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="offsetting_account" source="offsettingAccount" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <TextInput label="reference_document" source="referenceDocument" />
      </SimpleForm>
    </Create>
  );
};
