import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const StockReconciliationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StockReconciliations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amended_from" source="amendedFrom" />
        <TextField label="company" source="company" />
        <TextField label="cost_center" source="costCenter" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="difference_amount" source="differenceAmount" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="expense_account" source="expenseAccount" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="owner" source="owner" />
        <TextField label="posting_date" source="postingDate" />
        <TextField label="posting_time" source="postingTime" />
        <TextField label="purpose" source="purpose" />
        <TextField label="scan_barcode" source="scanBarcode" />
        <BooleanField label="scan_mode" source="scanMode" />
        <BooleanField label="set_posting_time" source="setPostingTime" />
        <TextField label="set_warehouse" source="setWarehouse" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
