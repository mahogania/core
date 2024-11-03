import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomDocPermList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CustomDocPerms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <BooleanField label="amend" source="amend" />
        <BooleanField label="cancel" source="cancel" />
        <BooleanField label="create" source="create" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <BooleanField label="delete" source="deleteField" />
        <TextField label="docstatus" source="docstatus" />
        <BooleanField label="email" source="email" />
        <BooleanField label="export" source="exportField" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <BooleanField label="if_owner" source="ifOwner" />
        <BooleanField label="import" source="importField" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="permlevel" source="permlevel" />
        <BooleanField label="print" source="print" />
        <BooleanField label="read" source="read" />
        <BooleanField label="report" source="report" />
        <TextField label="role" source="role" />
        <BooleanField label="selectField" source="selectField" />
        <BooleanField label="share" source="share" />
        <BooleanField label="submit" source="submit" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="write" source="write" />{" "}
      </Datagrid>
    </List>
  );
};
