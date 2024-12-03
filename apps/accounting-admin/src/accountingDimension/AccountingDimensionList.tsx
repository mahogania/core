import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountingDimensionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AccountingDimensions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="document_type" source="documentType" />
        <TextField label="fieldname" source="fieldname" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="label" source="label" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
