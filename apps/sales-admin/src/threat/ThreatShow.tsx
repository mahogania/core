import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { OPPORTUNITY_TITLE_FIELD } from "../opportunity/OpportunityTitle";
import { THREAT_TITLE_FIELD } from "./ThreatTitle";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";

export const ThreatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Competitor"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Proposal"
          target="threatId"
          label="Proposals"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Opportunity"
              source="opportunity.id"
              reference="Opportunity"
            >
              <TextField source={OPPORTUNITY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Threat"
              source="threat.id"
              reference="Threat"
            >
              <TextField source={THREAT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
