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

import { OpportunityTitle } from "../opportunity/OpportunityTitle";
import { QuoteTitle } from "../quote/QuoteTitle";
import { ThreatTitle } from "../threat/ThreatTitle";

export const ProposalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="opportunity.id"
          reference="Opportunity"
          label="Opportunity"
        >
          <SelectInput optionText={OpportunityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="quotes" reference="Quote">
          <SelectArrayInput
            optionText={QuoteTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="threat.id" reference="Threat" label="Threat">
          <SelectInput optionText={ThreatTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
