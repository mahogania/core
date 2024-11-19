import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CRAFT_TITLE_FIELD } from "../craft/CraftTitle";

export const CraftLevelStatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CraftLevelStats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Craft" source="craft.id" reference="Craft">
          <TextField source={CRAFT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Level" source="level" />
        <TextField label="Stat" source="stat" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};
