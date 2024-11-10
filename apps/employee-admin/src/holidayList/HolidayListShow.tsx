import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HolidayListShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="weeklyOff" source="weeklyOff" />
      </SimpleShowLayout>
    </Show>
  );
};
