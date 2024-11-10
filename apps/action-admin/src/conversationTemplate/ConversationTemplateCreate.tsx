import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ConversationTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="FirstLineId" source="firstLineId" />
        <NumberInput step={1} label="Flags" source="flags" />
        <TextInput label="ScriptName" source="scriptName" />
        <NumberInput step={1} label="TextureKitId" source="textureKitId" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Create>
  );
};
