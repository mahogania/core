import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ConfigurationTitle } from "../configuration/ConfigurationTitle";
import { FeatureTitle } from "../feature/FeatureTitle";

export const BundleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
