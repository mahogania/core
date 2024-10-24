import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProcessorTitle } from "../processor/ProcessorTitle";
import { TraitTitle } from "../trait/TraitTitle";

export const CommandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="processor.id"
          reference="Processor"
          label="Processor"
        >
          <SelectInput optionText={ProcessorTitle} />
        </ReferenceInput>
        <ReferenceInput source="trait.id" reference="Trait" label="Trait">
          <SelectInput optionText={TraitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
