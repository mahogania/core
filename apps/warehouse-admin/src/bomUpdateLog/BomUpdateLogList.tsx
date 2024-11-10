import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BomUpdateLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BOMUpdateLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amendedFrom" source="amendedFrom" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currentBom" source="currentBom" />
        <TextField label="currentLevel" source="currentLevel" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="errorLog" source="errorLog" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="newBom" source="newBom" />
        <TextField label="owner" source="owner" />
        <TextField label="processedBoms" source="processedBoms" />
        <TextField label="status" source="status" />
        <TextField label="updateType" source="updateType" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
