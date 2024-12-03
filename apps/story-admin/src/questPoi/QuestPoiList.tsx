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
import { QUESTREGION_TITLE_FIELD } from "../questRegion/QuestRegionTitle";

export const QuestPoiList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"QuestPois"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Point of Interest"
          source="pointofinterest.id"
          reference="PointOfInterest"
        >
          <TextField source={POINTOFINTEREST_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Quest Poi"
          source="questregion.id"
          reference="QuestRegion"
        >
          <TextField source={QUESTREGION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
