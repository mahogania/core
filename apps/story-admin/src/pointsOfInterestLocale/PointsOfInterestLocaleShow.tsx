import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { POINTOFINTEREST_TITLE_FIELD } from "../pointOfInterest/PointOfInterestTitle";

export const PointsOfInterestLocaleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="PointsOfInterest"
          source="pointofinterest.id"
          reference="PointOfInterest"
        >
          <TextField source={POINTOFINTEREST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
