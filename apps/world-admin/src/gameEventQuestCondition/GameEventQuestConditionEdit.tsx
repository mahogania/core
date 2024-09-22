import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const GameEventQuestConditionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="condition_id" source="conditionId" />
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput label="num" source="num" />
        <NumberInput step={1} label="quest" source="quest" />
      </SimpleForm>
    </Edit>
  );
};
