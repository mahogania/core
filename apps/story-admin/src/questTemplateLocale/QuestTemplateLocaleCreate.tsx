import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { QuestTemplateTitle } from "../questTemplate/QuestTemplateTitle";

export const QuestTemplateLocaleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
