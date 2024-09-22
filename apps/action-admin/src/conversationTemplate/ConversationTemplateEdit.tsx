import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ConversationTemplateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="FirstLineId" source="firstLineId" />
        <NumberInput step={1} label="Flags" source="flags" />
        <TextInput label="ScriptName" source="scriptName" />
        <NumberInput step={1} label="TextureKitId" source="textureKitId" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Edit>
  );
};
