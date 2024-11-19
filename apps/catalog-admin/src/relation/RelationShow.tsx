import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";
import { INDUSTRY_TITLE_FIELD } from "../industry/IndustryTitle";

export const RelationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Ascendant Business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Descendant Business"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Industry"
          source="industry.id"
          reference="Industry"
        >
          <TextField source={INDUSTRY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Kind" source="kind" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
