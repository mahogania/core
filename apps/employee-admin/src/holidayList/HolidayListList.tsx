import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HolidayListList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"HolidayLists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="color" source="color" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="fromDate" source="fromDate" />
        <TextField label="holidayListName" source="holidayListName" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modifiedBy" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="subdivision" source="subdivision" />
        <TextField label="toDate" source="toDate" />
        <TextField label="totalHolidays" source="totalHolidays" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="weeklyOff" source="weeklyOff" />{" "}
      </Datagrid>
    </List>
  );
};
