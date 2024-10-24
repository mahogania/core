import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FeatureTitle } from "../feature/FeatureTitle";
import { ConfigurationTitle } from "../configuration/ConfigurationTitle";

export const BundleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="features" reference="Feature">
          <SelectArrayInput
            optionText={FeatureTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="lineItemConfiguration.id"
          reference="Configuration"
          label="Line Item Configuration"
        >
          <SelectInput optionText={ConfigurationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
