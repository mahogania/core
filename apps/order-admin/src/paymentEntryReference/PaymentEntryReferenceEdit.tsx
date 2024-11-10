import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PaymentEntryReferenceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Account" source="account" />
        <TextInput label="Account Type" source="accountType" />
        <NumberInput label="Allocated Amount" source="allocatedAmount" />
        <TextInput label="Bill No" source="billNo" />
        <DateTimeInput label="Creation" source="creation" />
        <NumberInput step={1} label="Docstatus" source="docstatus" />
        <DateTimeInput label="Due Date" source="dueDate" />
        <NumberInput label="Exchange Gain Loss" source="exchangeGainLoss" />
        <NumberInput label="Exchange Rate" source="exchangeRate" />
        <NumberInput step={1} label="Idx" source="idx" />
        <DateTimeInput label="Modified" source="modified" />
        <TextInput label="Modified By" source="modifiedBy" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Outstanding Amount" source="outstandingAmount" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Parent" source="parent" />
        <TextInput label="Parentfield" source="parentfield" />
        <TextInput label="Parenttype" source="parenttype" />
        <TextInput label="Payment Term" source="paymentTerm" />
        <TextInput label="Payment Type" source="paymentType" />
        <TextInput label="Reference Doctype" source="referenceDoctype" />
        <TextInput label="Reference Name" source="referenceName" />
        <NumberInput label="Total Amount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
