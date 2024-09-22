import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GameEventConditionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="condition_id" source="conditionId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField
          label="done_world_state_field"
          source="doneWorldStateField"
        />
        <TextField label="eventEntry" source="eventEntry" />
        <TextField label="ID" source="id" />
        <TextField label="max_world_state_field" source="maxWorldStateField" />
        <TextField label="req_num" source="reqNum" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
