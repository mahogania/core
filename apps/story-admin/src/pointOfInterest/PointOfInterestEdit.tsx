import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PointsOfInterestLocaleTitle } from "../pointsOfInterestLocale/PointsOfInterestLocaleTitle";
import { QuestPoiTitle } from "../questPoi/QuestPoiTitle";

export const PointOfInterestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="pointsOfInterestLocales"
          reference="PointsOfInterestLocale"
        >
          <SelectArrayInput
            optionText={PointsOfInterestLocaleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="questPoiPoints" reference="QuestPoi">
          <SelectArrayInput
            optionText={QuestPoiTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
