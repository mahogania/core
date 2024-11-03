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

import { PoolTitle } from "../pool/PoolTitle";
import { QuestPoolMemberTitle } from "../questPoolMember/QuestPoolMemberTitle";
import { QuestTemplateTitle } from "../questTemplate/QuestTemplateTitle";

export const QuestPoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
