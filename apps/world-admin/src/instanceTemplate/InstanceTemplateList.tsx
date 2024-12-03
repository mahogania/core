import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LINKEDRESPAWN_TITLE_FIELD } from "../linkedRespawn/LinkedRespawnTitle";

export const InstanceTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"InstanceTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Linked Respawns"
          source="linkedrespawn.id"
          reference="LinkedRespawn"
        >
          <TextField source={LINKEDRESPAWN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
