import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SalesInvoiceAdvanceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="advanceAmount" source="advanceAmount" />
        <NumberInput label="allocatedAmount" source="allocatedAmount" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="exchangeGainLoss" source="exchangeGainLoss" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentField" source="parentField" />
        <TextInput label="parentType" source="parentType" />
        <NumberInput label="refExchangeRate" source="refExchangeRate" />
        <TextInput label="referenceName" source="referenceName" />
        <TextInput label="referenceRow" source="referenceRow" />
        <TextInput label="referenceType" source="referenceType" />
        <TextInput label="remarks" multiline source="remarks" />
      </SimpleForm>
    </Edit>
  );
};
