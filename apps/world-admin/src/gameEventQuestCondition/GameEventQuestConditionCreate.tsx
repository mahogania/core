import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const GameEventQuestConditionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="condition_id" source="conditionId" />
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput label="num" source="num" />
        <NumberInput step={1} label="quest" source="quest" />
      </SimpleForm>
    </Create>
  );
};
