import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UomConversionFactorShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="from_uom" source="fromUom" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="to_uom" source="toUom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
