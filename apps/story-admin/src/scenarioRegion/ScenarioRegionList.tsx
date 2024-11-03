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
import { SCENARIOPOI_TITLE_FIELD } from "../scenarioPoi/ScenarioPoiTitle";

export const ScenarioRegionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ScenarioRegions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Scenario Pois"
          source="scenariopoi.id"
          reference="ScenarioPoi"
        >
          <TextField source={SCENARIOPOI_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
