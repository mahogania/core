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

import { UserTitle } from "../user/UserTitle";
import { WorldTitle } from "../world/WorldTitle";

export const RealmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="users" reference="User">
          <SelectArrayInput
            optionText={UserTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="world.id" reference="World" label="World">
          <SelectInput optionText={WorldTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
