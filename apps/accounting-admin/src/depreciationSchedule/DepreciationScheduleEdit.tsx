import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DepreciationScheduleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          label="accumulated_depreciation_amount"
          source="accumulatedDepreciationAmount"
        />
        <DateTimeInput label="creation" source="creation" />
        <NumberInput label="depreciation_amount" source="depreciationAmount" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput step={1} label="idx" source="idx" />
        <TextInput label="journal_entry" source="journalEntry" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="parent" source="parent" />
        <TextInput label="parentfield" source="parentfield" />
        <TextInput label="parenttype" source="parenttype" />
        <DateTimeInput label="schedule_date" source="scheduleDate" />
        <TextInput label="shift" source="shift" />
      </SimpleForm>
    </Edit>
  );
};
