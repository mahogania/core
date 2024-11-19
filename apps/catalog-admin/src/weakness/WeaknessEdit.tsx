import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BusinessTitle } from "../business/BusinessTitle";
import { FeatureTitle } from "../feature/FeatureTitle";

export const WeaknessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="competitor.id"
          reference="Business"
          label="Competitor"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="features" reference="Feature">
          <SelectArrayInput
            optionText={FeatureTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
