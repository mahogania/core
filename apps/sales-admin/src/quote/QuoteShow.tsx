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

import { CONFIGURATION_TITLE_FIELD } from "../configuration/ConfigurationTitle";
import { QUOTE_TITLE_FIELD } from "./QuoteTitle";
import { PROPOSAL_TITLE_FIELD } from "../proposal/ProposalTitle";

export const QuoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Item" target="quoteId" label="Items">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Configuration"
              source="configuration.id"
              reference="Configuration"
            >
              <TextField source={CONFIGURATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Quote" source="quote.id" reference="Quote">
              <TextField source={QUOTE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
