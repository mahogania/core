import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BundleTitle } from "../bundle/BundleTitle";
import { OptionTitle } from "../option/OptionTitle";
import { StrengthTitle } from "../strength/StrengthTitle";
import { WeaknessTitle } from "../weakness/WeaknessTitle";

export const FeatureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="bundle.id" reference="Bundle" label="Bundle">
          <SelectInput optionText={BundleTitle} />
        </ReferenceInput>
        <TextInput label="Display Name" source="displayName" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="options" reference="Option">
          <SelectArrayInput
            optionText={OptionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="strength" reference="Strength">
          <SelectArrayInput
            optionText={StrengthTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="weaknesses" reference="Weakness">
          <SelectArrayInput
            optionText={WeaknessTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
