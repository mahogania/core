import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ConversationLineTemplateShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ActorIdx" source="actorIdx" />
        <TextField label="ChatType" source="chatType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Flags" source="flags" />
        <TextField label="ID" source="id" />
        <TextField label="UiCameraID" source="uiCameraId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
      </SimpleShowLayout>
    </Show>
  );
};
