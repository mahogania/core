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

import { CommandTitle } from "../command/CommandTitle";
import { FragmentTitle } from "../fragment/FragmentTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const TraitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="commands" reference="Command">
          <SelectArrayInput
            optionText={CommandTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="fragments" reference="Fragment">
          <SelectArrayInput
            optionText={FragmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="template.id"
          reference="Template"
          label="Template"
        >
          <SelectInput optionText={TemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
