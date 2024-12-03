import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FiscalYearList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FiscalYears"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="autoCreated" source="autoCreated" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="disabled" source="disabled" />
        <TextField label="docStatus" source="docStatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="isShortYear" source="isShortYear" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
        <TextField label="yearEndDate" source="yearEndDate" />
        <TextField label="yearStartDate" source="yearStartDate" />{" "}
      </Datagrid>
    </List>
  );
};
