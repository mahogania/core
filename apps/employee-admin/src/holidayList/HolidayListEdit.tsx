import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const HolidayListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <TextInput label="country" source="country" />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <DateTimeInput label="fromDate" source="fromDate" />
        <TextInput label="holidayListName" source="holidayListName" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modifiedBy" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="subdivision" source="subdivision" />
        <DateTimeInput label="toDate" source="toDate" />
        <NumberInput step={1} label="totalHolidays" source="totalHolidays" />
        <TextInput label="weeklyOff" source="weeklyOff" />
      </SimpleForm>
    </Edit>
  );
};
