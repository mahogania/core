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
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";

export const AssociationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Associations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Ascendant" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Descendant"
          source="entity.id"
          reference="Entity"
        >
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Description" source="description" />
        <TextField label="Display Name" source="displayName" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
