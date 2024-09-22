import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ConversationActorsShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ActivePlayerObject" source="activePlayerObject" />
        <TextField
          label="ConversationActorGuid"
          source="conversationActorGuid"
        />
        <TextField label="ConversationActorId" source="conversationActorId" />
        <TextField label="ConversationId" source="conversationId" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="CreatureDisplayInfoId"
          source="creatureDisplayInfoId"
        />
        <TextField label="CreatureId" source="creatureId" />
        <TextField label="ID" source="id" />
        <TextField label="Idx" source="idx" />
        <TextField label="NoActorObject" source="noActorObject" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />
      </SimpleShowLayout>
    </Show>
  );
};
