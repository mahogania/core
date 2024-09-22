import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ConversationLineTemplateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="ActorIdx" source="actorIdx" />
        <NumberInput step={1} label="ChatType" source="chatType" />
        <NumberInput step={1} label="Flags" source="flags" />
        <NumberInput step={1} label="UiCameraID" source="uiCameraId" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Edit>
  );
};
