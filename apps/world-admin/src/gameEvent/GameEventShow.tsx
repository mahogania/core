import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GameEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="announce" source="announce" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="end_time" source="endTime" />
        <TextField label="eventEntry" source="eventEntry" />
        <TextField label="holiday" source="holiday" />
        <TextField label="holidayStage" source="holidayStage" />
        <TextField label="ID" source="id" />
        <TextField label="length" source="length" />
        <TextField label="occurence" source="occurence" />
        <TextField label="start_time" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="world_event" source="worldEvent" />
      </SimpleShowLayout>
    </Show>
  );
};
