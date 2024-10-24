import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FragmentTitle } from "../fragment/FragmentTitle";

export const AttributeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="fragment.id"
          reference="Fragment"
          label="Fragment"
        >
          <SelectInput optionText={FragmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
