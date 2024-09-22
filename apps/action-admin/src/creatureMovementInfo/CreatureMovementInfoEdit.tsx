import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CreatureMovementInfoEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="MovementID" source="movementId" />
        <NumberInput label="RunSpeed" source="runSpeed" />
        <NumberInput label="WalkSpeed" source="walkSpeed" />
      </SimpleForm>
    </Edit>
  );
};
