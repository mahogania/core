import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GAMEOBJECTTEMPLATE_TITLE_FIELD } from "../gameObjectTemplate/GameObjectTemplateTitle";

export const GameObjectTemplateAddonList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameObjectTemplateAddons"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="GameObjectTemplate"
          source="gameobjecttemplate.id"
          reference="GameObjectTemplate"
        >
          <TextField source={GAMEOBJECTTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
