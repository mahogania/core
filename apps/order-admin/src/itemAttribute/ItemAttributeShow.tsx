import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ItemAttributeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="attributeName" source="attributeName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fromRange" source="fromRange" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="increment" source="increment" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <BooleanField label="numericValues" source="numericValues" />
        <TextField label="owner" source="owner" />
        <TextField label="toRange" source="toRange" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
