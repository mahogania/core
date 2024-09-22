import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConversationTemplateList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ConversationTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="FirstLineId" source="firstLineId" />
        <TextField label="Flags" source="flags" />
        <TextField label="ID" source="id" />
        <TextField label="ScriptName" source="scriptName" />
        <TextField label="TextureKitId" source="textureKitId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VerifiedBuild" source="verifiedBuild" />{" "}
      </Datagrid>
    </List>
  );
};
