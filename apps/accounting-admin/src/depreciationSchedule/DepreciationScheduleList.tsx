import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DepreciationScheduleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DepreciationSchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="accumulated_depreciation_amount"
          source="accumulatedDepreciationAmount"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="depreciation_amount" source="depreciationAmount" />
        <TextField label="docstatus" source="docstatus" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="journal_entry" source="journalEntry" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="parent" source="parent" />
        <TextField label="parentfield" source="parentfield" />
        <TextField label="parenttype" source="parenttype" />
        <TextField label="schedule_date" source="scheduleDate" />
        <TextField label="shift" source="shift" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
