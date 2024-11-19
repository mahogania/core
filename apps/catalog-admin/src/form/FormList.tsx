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
import { PROCESS_TITLE_FIELD } from "../process/ProcessTitle";

export const FormList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Forms"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Process" source="process.id" reference="Process">
          <TextField source={PROCESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Schema" source="schema" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
