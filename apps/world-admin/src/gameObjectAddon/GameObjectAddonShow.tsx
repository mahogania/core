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
        <TextField label="AIAnimKitID" source="aiAnimKitId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="invisibilityType" source="invisibilityType" />
        <TextField label="invisibilityValue" source="invisibilityValue" />
        <TextField label="parent_rotation0" source="parentRotation0" />
        <TextField label="parent_rotation1" source="parentRotation1" />
        <TextField label="parent_rotation2" source="parentRotation2" />
        <TextField label="parent_rotation3" source="parentRotation3" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WorldEffectID" source="worldEffectId" />
      </SimpleShowLayout>
    </Show>
  );
};
