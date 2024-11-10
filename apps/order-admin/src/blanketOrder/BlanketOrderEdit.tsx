import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BlanketOrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="amended_from" source="amendedFrom" />
        <TextInput label="blanket_order_type" source="blanketOrderType" />
        <TextInput label="company" source="company" />
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="customer" source="customer" />
        <TextInput label="customer_name" source="customerName" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="from_date" source="fromDate" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="naming_series" source="namingSeries" />
        <TextInput label="owner" source="owner" />
        <TextInput label="supplier" source="supplier" />
        <TextInput label="supplier_name" source="supplierName" />
        <TextInput label="tc_name" source="tcName" />
        <TextInput label="terms" multiline source="terms" />
        <DateTimeInput label="to_date" source="toDate" />
      </SimpleForm>
    </Edit>
  );
};
