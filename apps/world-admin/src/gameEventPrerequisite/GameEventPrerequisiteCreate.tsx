import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const GameEventPrerequisiteCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput
          step={1}
          label="prerequisite_event"
          source="prerequisiteEvent"
        />
      </SimpleForm>
    </Create>
  );
};
