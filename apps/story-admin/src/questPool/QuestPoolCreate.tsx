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

import { PoolTitle } from "../pool/PoolTitle";
import { QuestPoolMemberTitle } from "../questPoolMember/QuestPoolMemberTitle";
import { QuestTemplateTitle } from "../questTemplate/QuestTemplateTitle";

export const QuestPoolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="pool.id" reference="Pool" label="Pool">
          <SelectInput optionText={PoolTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="questPoolMembers.id"
          reference="QuestPoolMember"
          label="Quest Pool Members"
        >
          <SelectInput optionText={QuestPoolMemberTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="questTemplates" reference="QuestTemplate">
          <SelectArrayInput
            optionText={QuestTemplateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
