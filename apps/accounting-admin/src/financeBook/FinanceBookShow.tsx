import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const FinanceBookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="financeBookName" source="financeBookName" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
