import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PointOfInterestTitle } from "../pointOfInterest/PointOfInterestTitle";
import { QuestRegionTitle } from "../questRegion/QuestRegionTitle";

export const QuestPoiEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="pointOfInterest.id"
          reference="PointOfInterest"
          label="Point of Interest"
        >
          <SelectInput optionText={PointOfInterestTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questPoi.id"
          reference="QuestRegion"
          label="Quest Poi"
        >
          <SelectInput optionText={QuestRegionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
