import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ShipmentParcelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ShipmentParcels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="length" source="length" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weight" source="weight" />
        <TextField label="width" source="width" />{" "}
      </Datagrid>
    </List>
  );
};
