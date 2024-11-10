import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ConversationLineTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="ActorIdx" source="actorIdx" />
        <NumberInput step={1} label="ChatType" source="chatType" />
        <NumberInput step={1} label="Flags" source="flags" />
        <NumberInput step={1} label="UiCameraID" source="uiCameraId" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Create>
  );
};
