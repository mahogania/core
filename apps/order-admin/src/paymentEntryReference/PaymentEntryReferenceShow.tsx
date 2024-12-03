import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PaymentEntryReferenceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Account" source="account" />
        <TextField label="Account Type" source="accountType" />
        <TextField label="Allocated Amount" source="allocatedAmount" />
        <TextField label="Bill No" source="billNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Creation" source="creation" />
        <TextField label="Docstatus" source="docstatus" />
        <TextField label="Due Date" source="dueDate" />
        <TextField label="Exchange Gain Loss" source="exchangeGainLoss" />
        <TextField label="Exchange Rate" source="exchangeRate" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <TextField label="Modified" source="modified" />
        <TextField label="Modified By" source="modifiedBy" />
        <TextField label="Name" source="name" />
        <TextField label="Outstanding Amount" source="outstandingAmount" />
        <TextField label="Owner" source="owner" />
        <TextField label="Parent" source="parent" />
        <TextField label="Parentfield" source="parentfield" />
        <TextField label="Parenttype" source="parenttype" />
        <TextField label="Payment Term" source="paymentTerm" />
        <TextField label="Payment Type" source="paymentType" />
        <TextField label="Reference Doctype" source="referenceDoctype" />
        <TextField label="Reference Name" source="referenceName" />
        <TextField label="Total Amount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
