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

import { BundleTitle } from "../bundle/BundleTitle";
import { CatalogTitle } from "../catalog/CatalogTitle";
import { ItemTitle } from "../item/ItemTitle";
import { PipelineTitle } from "../pipeline/PipelineTitle";

export const ConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="bundle.id" reference="Bundle" label="Bundle">
          <SelectInput optionText={BundleTitle} />
        </ReferenceInput>
        <ReferenceInput source="catalog.id" reference="Catalog" label="Catalog">
          <SelectInput optionText={CatalogTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="items" reference="Item">
          <SelectArrayInput
            optionText={ItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="pipeline.id"
          reference="Pipeline"
          label="Pipeline"
        >
          <SelectInput optionText={PipelineTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
