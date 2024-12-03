import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PurchaseTaxesAndChargesTemplateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="isDefault" source="isDefault" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="taxCategory" source="taxCategory" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
