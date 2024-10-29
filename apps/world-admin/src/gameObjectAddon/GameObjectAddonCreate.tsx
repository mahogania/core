import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GameObjectAddonCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AI Anim Kit ID" source="aiAnimKitId" />
        <TextInput label="Transform ID" source="transformId" />
        <TextInput label="World Effect ID" source="worldEffectId" />
      </SimpleForm>
    </Create>
  );
};
