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
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const ThreatList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Threats"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Process" source="process.id" reference="Process">
          <TextField source={PROCESS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Unit" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
