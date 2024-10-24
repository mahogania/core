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
import { CONSTRAINT_TITLE_FIELD } from "../constraint/ConstraintTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Predecessor Product Paths"
          source="constraint.id"
          reference="Constraint"
        >
          <TextField source={CONSTRAINT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Successor Product Paths"
          source="constraint.id"
          reference="Constraint"
        >
          <TextField source={CONSTRAINT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Version" source="version" />{" "}
      </Datagrid>
    </List>
  );
};
