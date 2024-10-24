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

import { BusinessTitle } from "../business/BusinessTitle";
import { ProposalTitle } from "../proposal/ProposalTitle";

export const ThreatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="competitor.id"
          reference="Business"
          label="Competitor"
        >
          <SelectInput optionText={BusinessTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="proposals" reference="Proposal">
          <SelectArrayInput
            optionText={ProposalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
