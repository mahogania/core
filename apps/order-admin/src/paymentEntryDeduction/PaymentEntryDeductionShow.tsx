import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PaymentEntryDeductionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account" source="account" />
        <TextField label="Amount" source="amount" />
        <TextField label="Cost Center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Creation" source="creation" />
        <TextField label="Description" source="description" />
        <TextField label="Docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <TextField label="Modified" source="modified" />
        <TextField label="Modified By" source="modifiedBy" />
        <TextField label="Name" source="name" />
        <TextField label="Owner" source="owner" />
        <TextField label="Parent" source="parent" />
        <TextField label="Parentfield" source="parentfield" />
        <TextField label="Parenttype" source="parenttype" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
