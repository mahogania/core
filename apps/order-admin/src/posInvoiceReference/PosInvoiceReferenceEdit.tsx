import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const PosInvoiceReferenceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <NumberInput step={1} label="docStatus" source="docStatus" />
        <NumberInput label="grandTotal" source="grandTotal" />
        <NumberInput step={1} label="idx" source="idx" />
        <NumberInput step={1} label="isReturn" source="isReturn" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <TextInput label="posInvoice" source="posInvoice" />
        <DateTimeInput label="postingDate" source="postingDate" />
        <TextInput label="returnAgainst" source="returnAgainst" />
      </SimpleForm>
    </Edit>
  );
};
