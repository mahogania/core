import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { QuestRequestItemConditionalTitle } from "../questRequestItemConditional/QuestRequestItemConditionalTitle";
import { QuestRequestItemsLocaleTitle } from "../questRequestItemsLocale/QuestRequestItemsLocaleTitle";
import { QuestTemplateTitle } from "../questTemplate/QuestTemplateTitle";

export const QuestRequestItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="questRequestItemConditionals"
          reference="QuestRequestItemConditional"
        >
          <SelectArrayInput
            optionText={QuestRequestItemConditionalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="questRequestItemsLocales"
          reference="QuestRequestItemsLocale"
        >
          <SelectArrayInput
            optionText={QuestRequestItemsLocaleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
