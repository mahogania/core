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

import { PipelineTitle } from "../pipeline/PipelineTitle";
import { FormTitle } from "../form/FormTitle";
import { ThreatTitle } from "../threat/ThreatTitle";

export const ProcessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="Pipeline.id"
          reference="Pipeline"
          label="Pipeline"
        >
          <SelectInput optionText={PipelineTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="forms" reference="Form">
          <SelectArrayInput
            optionText={FormTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="threats" reference="Threat">
          <SelectArrayInput
            optionText={ThreatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
