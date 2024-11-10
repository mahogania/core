import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProcessorTitle } from "../processor/ProcessorTitle";
import { TraitTitle } from "../trait/TraitTitle";

export const CommandEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
