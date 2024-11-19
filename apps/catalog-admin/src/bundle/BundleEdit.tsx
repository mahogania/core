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

import { ConfigurationTitle } from "../configuration/ConfigurationTitle";
import { FeatureTitle } from "../feature/FeatureTitle";

export const BundleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="Configuration.id"
          reference="Configuration"
          label="Configuration"
        >
          <SelectInput optionText={ConfigurationTitle} />
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
