import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { QuestPoolTitle } from "../questPool/QuestPoolTitle";

export const PoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="questPool" reference="QuestPool">
          <SelectArrayInput
            optionText={QuestPoolTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
