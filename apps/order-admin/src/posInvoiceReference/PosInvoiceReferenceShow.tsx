import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const PosInvoiceReferenceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="grandTotal" source="grandTotal" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="isReturn" source="isReturn" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="posInvoice" source="posInvoice" />
        <TextField label="postingDate" source="postingDate" />
        <TextField label="returnAgainst" source="returnAgainst" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
