import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PointOfInterestTitle } from "../pointOfInterest/PointOfInterestTitle";

export const PointsOfInterestLocaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="pointsOfInterest.id"
          reference="PointOfInterest"
          label="PointsOfInterest"
        >
          <SelectInput optionText={PointOfInterestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
