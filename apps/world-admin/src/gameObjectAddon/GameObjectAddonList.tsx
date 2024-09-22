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
        <TextField label="AIAnimKitID" source="aiAnimKitId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="invisibilityType" source="invisibilityType" />
        <TextField label="invisibilityValue" source="invisibilityValue" />
        <TextField label="parent_rotation0" source="parentRotation0" />
        <TextField label="parent_rotation1" source="parentRotation1" />
        <TextField label="parent_rotation2" source="parentRotation2" />
        <TextField label="parent_rotation3" source="parentRotation3" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WorldEffectID" source="worldEffectId" />{" "}
      </Datagrid>
    </List>
  );
};
