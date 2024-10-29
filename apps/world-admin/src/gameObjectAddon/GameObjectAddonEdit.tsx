import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GameObjectAddonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AI Anim Kit ID" source="aiAnimKitId" />
        <TextInput label="Transform ID" source="transformId" />
        <TextInput label="World Effect ID" source="worldEffectId" />
      </SimpleForm>
    </Edit>
  );
};
