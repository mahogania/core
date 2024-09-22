import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ConversationActorsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="ActivePlayerObject"
          source="activePlayerObject"
        />
        <NumberInput
          label="ConversationActorGuid"
          source="conversationActorGuid"
        />
        <NumberInput
          step={1}
          label="ConversationActorId"
          source="conversationActorId"
        />
        <NumberInput step={1} label="ConversationId" source="conversationId" />
        <NumberInput
          step={1}
          label="CreatureDisplayInfoId"
          source="creatureDisplayInfoId"
        />
        <NumberInput step={1} label="CreatureId" source="creatureId" />
        <NumberInput step={1} label="Idx" source="idx" />
        <NumberInput step={1} label="NoActorObject" source="noActorObject" />
        <NumberInput step={1} label="VerifiedBuild" source="verifiedBuild" />
      </SimpleForm>
    </Create>
  );
};
