import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const CashierClosingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="custody" source="custody" />
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="expense" source="expense" />
        <DateTimeInput label="from_time" source="fromTime" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="naming_series" source="namingSeries" />
        <NumberInput label="net_amount" source="netAmount" />
        <NumberInput label="outstanding_amount" source="outstandingAmount" />
        <TextInput label="owner" source="owner" />
        <NumberInput label="returns" source="returns" />
        <DateTimeInput label="time" source="time" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
