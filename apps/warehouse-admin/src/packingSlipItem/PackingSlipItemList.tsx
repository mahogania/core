import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PackingSlipItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PackingSlipItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="batch_no" source="batchNo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="description" source="description" />
        <TextField label="dn_detail" source="dnDetail" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_code" source="itemCode" />
        <TextField label="item_name" source="itemName" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="net_weight" source="netWeight" />
        <TextField label="owner" source="owner" />
        <TextField label="page_break" source="pageBreak" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="pi_detail" source="piDetail" />
        <TextField label="qty" source="qty" />
        <TextField label="stock_uom" source="stockUom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight_uom" source="weightUom" />{" "}
      </Datagrid>
    </List>
  );
};
