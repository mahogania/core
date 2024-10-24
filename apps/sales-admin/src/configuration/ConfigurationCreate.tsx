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

import { ItemTitle } from "../item/ItemTitle";
import { PipelineTitle } from "../pipeline/PipelineTitle";
import { BundleTitle } from "../bundle/BundleTitle";

export const ConfigurationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="lineItems" reference="Item">
          <SelectArrayInput
            optionText={ItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="processConfiguration.id"
          reference="Pipeline"
          label="Process Configuration"
        >
          <SelectInput optionText={PipelineTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productConfiguration.id"
          reference="Bundle"
          label="Product Configuration"
        >
          <SelectInput optionText={BundleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
