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
import { FRAGMENT_TITLE_FIELD } from "../fragment/FragmentTitle";

export const AttributeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Attributes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Fragment"
          source="fragment.id"
          reference="Fragment"
        >
          <TextField source={FRAGMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
