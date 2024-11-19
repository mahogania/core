import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PackingSlipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PackingSlips"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amended_from" source="amendedFrom" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="delivery_note" source="deliveryNote" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="from_case_no" source="fromCaseNo" />
        <TextField label="gross_weight_pkg" source="grossWeightPkg" />
        <TextField label="gross_weight_uom" source="grossWeightUom" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="letter_head" source="letterHead" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="naming_series" source="namingSeries" />
        <TextField label="net_weight_pkg" source="netWeightPkg" />
        <TextField label="net_weight_uom" source="netWeightUom" />
        <TextField label="owner" source="owner" />
        <TextField label="to_case_no" source="toCaseNo" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
