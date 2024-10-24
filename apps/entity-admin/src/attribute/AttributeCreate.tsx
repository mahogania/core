import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FragmentTitle } from "../fragment/FragmentTitle";

export const AttributeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="fragment.id"
          reference="Fragment"
          label="Fragment"
        >
          <SelectInput optionText={FragmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
