import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const GameEventGameObjectEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput step={1} label="guid" source="guid" />
      </SimpleForm>
    </Edit>
  );
};
