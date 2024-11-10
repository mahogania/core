import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PointOfInterestTitle } from "../pointOfInterest/PointOfInterestTitle";
import { QuestRegionTitle } from "../questRegion/QuestRegionTitle";

export const QuestPoiCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
