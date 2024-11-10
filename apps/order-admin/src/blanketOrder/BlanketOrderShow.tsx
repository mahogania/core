import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BlanketOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="blanket_order_type" source="blanketOrderType" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="customer" source="customer" />
        <TextField label="customer_name" source="customerName" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="from_date" source="fromDate" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="supplier" source="supplier" />
        <TextField label="supplier_name" source="supplierName" />
        <TextField label="tc_name" source="tcName" />
        <TextField label="terms" source="terms" />
        <TextField label="to_date" source="toDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
