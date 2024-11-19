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
import { OPTION_TITLE_FIELD } from "../option/OptionTitle";

export const ConstraintList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Constraints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Depth" source="depth" />
        <ReferenceField
          label="Driven Option"
          source="option.id"
          reference="Option"
        >
          <TextField source={OPTION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Driving Option"
          source="option.id"
          reference="Option"
        >
          <TextField source={OPTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Kind" source="kind" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
