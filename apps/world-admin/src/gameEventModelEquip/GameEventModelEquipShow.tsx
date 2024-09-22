import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const GameEventModelEquipShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="equipment_id" source="equipmentId" />
        <TextField label="eventEntry" source="eventEntry" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="modelid" source="modelid" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
