import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FragmentTitle } from "../fragment/FragmentTitle";
import { ProcessorTitle } from "../processor/ProcessorTitle";

export const ViewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
