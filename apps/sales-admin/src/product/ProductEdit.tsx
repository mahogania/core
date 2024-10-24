import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { OptionTitle } from "../option/OptionTitle";
import { ConstraintTitle } from "../constraint/ConstraintTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="options" reference="Option">
          <SelectArrayInput
            optionText={OptionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="predecessorProductPaths.id"
          reference="Constraint"
          label="Predecessor Product Paths"
        >
          <SelectInput optionText={ConstraintTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="successorProductPaths.id"
          reference="Constraint"
          label="Successor Product Paths"
        >
          <SelectInput optionText={ConstraintTitle} />
        </ReferenceInput>
        <TextInput label="Version" source="version" />
      </SimpleForm>
    </Edit>
  );
};
