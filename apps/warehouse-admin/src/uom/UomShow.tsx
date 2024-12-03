import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const UomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <BooleanField label="enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified_by" source="modifiedBy" />
        <BooleanField label="must_be_whole_number" source="mustBeWholeNumber" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="uom_name" source="uomName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
