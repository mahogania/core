import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemTaxList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ItemTaxes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="item_tax_template" source="itemTaxTemplate" />
        <TextField label="maximum_net_rate" source="maximumNetRate" />
        <TextField label="minimum_net_rate" source="minimumNetRate" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="tax_category" source="taxCategory" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="valid_from" source="validFrom" />{" "}
      </Datagrid>
    </List>
  );
};
