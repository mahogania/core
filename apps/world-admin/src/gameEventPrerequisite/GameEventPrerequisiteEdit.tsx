import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const GameEventPrerequisiteEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput
          step={1}
          label="prerequisite_event"
          source="prerequisiteEvent"
        />
      </SimpleForm>
    </Edit>
  );
};
