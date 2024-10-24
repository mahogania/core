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

import { CommandTitle } from "../command/CommandTitle";
import { FragmentTitle } from "../fragment/FragmentTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const TraitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
