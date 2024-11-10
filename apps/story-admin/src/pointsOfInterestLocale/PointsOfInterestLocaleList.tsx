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
import { POINTOFINTEREST_TITLE_FIELD } from "../pointOfInterest/PointOfInterestTitle";

export const PointsOfInterestLocaleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PointsOfInterestLocales"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="PointsOfInterest"
          source="pointofinterest.id"
          reference="PointOfInterest"
        >
          <TextField source={POINTOFINTEREST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
