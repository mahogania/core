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

import { UserTitle } from "../user/UserTitle";
import { WorldTitle } from "../world/WorldTitle";

export const RealmCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
