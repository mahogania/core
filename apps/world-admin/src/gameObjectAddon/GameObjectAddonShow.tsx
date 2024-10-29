import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GameObjectAddonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AI Anim Kit ID" source="aiAnimKitId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Transform ID" source="transformId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="World Effect ID" source="worldEffectId" />
      </SimpleShowLayout>
    </Show>
  );
};
