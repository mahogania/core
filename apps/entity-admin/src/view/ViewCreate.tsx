import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FragmentTitle } from "../fragment/FragmentTitle";
import { ProcessorTitle } from "../processor/ProcessorTitle";

export const ViewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="fragment.id"
          reference="Fragment"
          label="Fragment"
        >
          <SelectInput optionText={FragmentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="processor.id"
          reference="Processor"
          label="Processor"
        >
          <SelectInput optionText={ProcessorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
