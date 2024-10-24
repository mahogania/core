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
import { CONFIGURATION_TITLE_FIELD } from "../configuration/ConfigurationTitle";

export const BundleList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Bundles"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Configuration"
          source="configuration.id"
          reference="Configuration"
        >
          <TextField source={CONFIGURATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
