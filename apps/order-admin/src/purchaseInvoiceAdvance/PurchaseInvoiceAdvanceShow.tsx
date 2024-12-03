import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PurchaseInvoiceAdvanceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="advanceAmount" source="advanceAmount" />
        <TextField label="allocatedAmount" source="allocatedAmount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="exchangeGainLoss" source="exchangeGainLoss" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentField" source="parentField" />
        <TextField label="parentType" source="parentType" />
        <TextField label="refExchangeRate" source="refExchangeRate" />
        <TextField label="referenceName" source="referenceName" />
        <TextField label="referenceRow" source="referenceRow" />
        <TextField label="referenceType" source="referenceType" />
        <TextField label="remarks" source="remarks" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
