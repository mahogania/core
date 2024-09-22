import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const GameEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="announce" source="announce" />
        <TextInput label="description" source="description" />
        <DateTimeInput label="end_time" source="endTime" />
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput step={1} label="holiday" source="holiday" />
        <NumberInput step={1} label="holidayStage" source="holidayStage" />
        <NumberInput step={1} label="length" source="length" />
        <NumberInput step={1} label="occurence" source="occurence" />
        <DateTimeInput label="start_time" source="startTime" />
        <NumberInput step={1} label="world_event" source="worldEvent" />
      </SimpleForm>
    </Edit>
  );
};
