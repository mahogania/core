import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PROPOSAL_TITLE_FIELD } from "./ProposalTitle";
import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";
import { THREAT_TITLE_FIELD } from "../threat/ThreatTitle";

export const ProposalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Opportunity"
          source="opportunity.id"
          reference="Opportunity"
        >
          <TextField source={OPPORTUNITY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Threat" source="threat.id" reference="Threat">
          <TextField source={THREAT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Quote"
          target="proposalId"
          label="Quotes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Proposal"
              source="proposal.id"
              reference="Proposal"
            >
              <TextField source={PROPOSAL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
