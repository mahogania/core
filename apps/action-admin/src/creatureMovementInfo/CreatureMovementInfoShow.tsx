import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const CreatureMovementInfoShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="MovementID" source="movementId" />
        <TextField label="RunSpeed" source="runSpeed" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WalkSpeed" source="walkSpeed" />
      </SimpleShowLayout>
    </Show>
  );
};
