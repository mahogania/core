import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PaymentEntryDeductionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Account" source="account" />
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Cost Center" source="costCenter" />
        <DateTimeInput label="Creation" source="creation" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Docstatus" source="docstatus" />
        <NumberInput step={1} label="Idx" source="idx" />
        <DateTimeInput label="Modified" source="modified" />
        <TextInput label="Modified By" source="modifiedBy" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Parent" source="parent" />
        <TextInput label="Parentfield" source="parentfield" />
        <TextInput label="Parenttype" source="parenttype" />
      </SimpleForm>
    </Create>
  );
};
