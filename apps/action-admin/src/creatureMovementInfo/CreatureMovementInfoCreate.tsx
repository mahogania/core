import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CreatureMovementInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="MovementID" source="movementId" />
        <NumberInput label="RunSpeed" source="runSpeed" />
        <NumberInput label="WalkSpeed" source="walkSpeed" />
      </SimpleForm>
    </Create>
  );
};
