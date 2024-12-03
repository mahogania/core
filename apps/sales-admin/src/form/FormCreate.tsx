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

import { ProcessTitle } from "../process/ProcessTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const FormCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="process.id" reference="Process" label="Process">
          <SelectInput optionText={ProcessTitle} />
        </ReferenceInput>
        <div />
        <ReferenceArrayInput source="templates" reference="Template">
          <SelectArrayInput
            optionText={TemplateTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
