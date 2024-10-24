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
import { TRAIT_TITLE_FIELD } from "../trait/TraitTitle";

export const FragmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Fragments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Display Name" source="displayName" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Trait" source="trait.id" reference="Trait">
          <TextField source={TRAIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
