import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConversationActorsList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ConversationActorsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="VerifiedBuild" source="verifiedBuild" />{" "}
      </Datagrid>
    </List>
  );
};
