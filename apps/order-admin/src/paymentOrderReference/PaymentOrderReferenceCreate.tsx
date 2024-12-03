import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const PaymentOrderReferenceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Account" source="account" />
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Bank Account" source="bankAccount" />
        <DateTimeInput label="Creation" source="creation" />
        <NumberInput step={1} label="Docstatus" source="docstatus" />
        <NumberInput step={1} label="Idx" source="idx" />
        <TextInput label="Mode of Payment" source="modeOfPayment" />
        <DateTimeInput label="Modified" source="modified" />
        <TextInput label="Modified By" source="modifiedBy" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Parent" source="parent" />
        <TextInput label="Parentfield" source="parentfield" />
        <TextInput label="Parenttype" source="parenttype" />
        <TextInput label="Payment Reference" source="paymentReference" />
        <TextInput label="Payment Request" source="paymentRequest" />
        <TextInput label="Reference Doctype" source="referenceDoctype" />
        <TextInput label="Reference Name" source="referenceName" />
        <TextInput label="Supplier" source="supplier" />
      </SimpleForm>
    </Create>
  );
};
