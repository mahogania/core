import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const GameEventPoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput step={1} label="pool_entry" source="poolEntry" />
      </SimpleForm>
    </Edit>
  );
};
