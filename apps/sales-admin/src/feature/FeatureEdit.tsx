import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
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

export const FeatureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceInput
          source="strength.id"
          reference="Strength"
          label="Strength"
        >
          <SelectInput optionText={StrengthTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="weakness.id"
          reference="Weakness"
          label="Weakness"
        >
          <SelectInput optionText={WeaknessTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
