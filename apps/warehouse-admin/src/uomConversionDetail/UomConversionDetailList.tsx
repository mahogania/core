import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UomConversionDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UOM Conversion Details"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="conversion_factor" source="conversionFactor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="uom" source="uom" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
