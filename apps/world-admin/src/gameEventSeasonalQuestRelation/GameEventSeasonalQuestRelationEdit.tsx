import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const GameEventSeasonalQuestRelationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput step={1} label="questId" source="questId" />
      </SimpleForm>
    </Edit>
  );
};
