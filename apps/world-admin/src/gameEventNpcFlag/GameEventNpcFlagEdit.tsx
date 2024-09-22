import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const GameEventNpcFlagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="eventEntry" source="eventEntry" />
        <NumberInput step={1} label="guid" source="guid" />
        <NumberInput step={1} label="npcflag" source="npcflag" />
      </SimpleForm>
    </Edit>
  );
};
