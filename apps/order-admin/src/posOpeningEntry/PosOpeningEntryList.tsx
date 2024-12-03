import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PosOpeningEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"POSOpeningEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amendedFrom" source="amendedFrom" />
        <TextField label="company" source="company" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="periodEndDate" source="periodEndDate" />
        <TextField label="periodStartDate" source="periodStartDate" />
        <TextField label="posClosingEntry" source="posClosingEntry" />
        <TextField label="posProfile" source="posProfile" />
        <TextField label="postingDate" source="postingDate" />
        <TextField label="setPostingDate" source="setPostingDate" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />{" "}
      </Datagrid>
    </List>
  );
};
