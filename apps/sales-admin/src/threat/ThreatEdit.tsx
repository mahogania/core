import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProcessTitle } from "../process/ProcessTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const ThreatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="process.id" reference="Process" label="Process">
          <SelectInput optionText={ProcessTitle} />
        </ReferenceInput>
        <ReferenceInput source="unit.id" reference="Unit" label="Unit">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
