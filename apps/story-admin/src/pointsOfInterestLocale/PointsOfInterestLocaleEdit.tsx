import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PointOfInterestTitle } from "../pointOfInterest/PointOfInterestTitle";

export const PointsOfInterestLocaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="pointsOfInterest.id"
          reference="PointOfInterest"
          label="PointsOfInterest"
        >
          <SelectInput optionText={PointOfInterestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
