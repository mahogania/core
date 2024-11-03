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

import { PoolMemberTitle } from "../poolMember/PoolMemberTitle";
import { QuestPoolTitle } from "../questPool/QuestPoolTitle";

export const QuestPoolMemberCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="poolMember.id"
          reference="PoolMember"
          label="Pool Member"
        >
          <SelectInput optionText={PoolMemberTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="questPoolTemplates" reference="QuestPool">
          <SelectArrayInput
            optionText={QuestPoolTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
