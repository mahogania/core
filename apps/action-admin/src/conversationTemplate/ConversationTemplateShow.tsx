import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ConversationTemplateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="FirstLineId" source="firstLineId" />
        <TextField label="Flags" source="flags" />
        <TextField label="ID" source="id" />
        <TextField label="ScriptName" source="scriptName" />
        <TextField label="TextureKitId" source="textureKitId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
      </SimpleShowLayout>
    </Show>
  );
};
