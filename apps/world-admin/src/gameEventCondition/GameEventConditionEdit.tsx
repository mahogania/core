import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GameEventConditionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
