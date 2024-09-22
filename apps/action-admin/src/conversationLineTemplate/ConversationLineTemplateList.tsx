import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConversationLineTemplateList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ConversationLineTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ActorIdx" source="actorIdx" />
        <TextField label="ChatType" source="chatType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Flags" source="flags" />
        <TextField label="ID" source="id" />
        <TextField label="UiCameraID" source="uiCameraId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />{" "}
      </Datagrid>
    </List>
  );
};
