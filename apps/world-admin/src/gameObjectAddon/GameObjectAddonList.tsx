import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameObjectAddonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"GameObjectAddons"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="AI Anim Kit ID" source="aiAnimKitId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Transform ID" source="transformId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="World Effect ID" source="worldEffectId" />{" "}
      </Datagrid>
    </List>
  );
};
