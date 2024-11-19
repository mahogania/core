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

import { PipelineTitle } from "../pipeline/PipelineTitle";
import { FormTitle } from "../form/FormTitle";
import { ThreatTitle } from "../threat/ThreatTitle";

export const ProcessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
