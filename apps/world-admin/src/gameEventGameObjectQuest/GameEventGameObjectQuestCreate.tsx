import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const GameEventGameObjectQuestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput step={1} label="quest" source="quest" />
      </SimpleForm>
    </Create>
  );
};
