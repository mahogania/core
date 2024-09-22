import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GameEventConditionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="condition_id" source="conditionId" />
        <TextInput label="description" source="description" />
        <NumberInput
          step={1}
          label="done_world_state_field"
          source="doneWorldStateField"
        />
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput
          step={1}
          label="max_world_state_field"
          source="maxWorldStateField"
        />
        <NumberInput label="req_num" source="reqNum" />
      </SimpleForm>
    </Create>
  );
};
