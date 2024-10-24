import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FeatureTitle } from "../feature/FeatureTitle";
import { ConfigurationTitle } from "../configuration/ConfigurationTitle";

export const BundleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
