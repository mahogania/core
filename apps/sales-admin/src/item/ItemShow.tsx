import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CONFIGURATION_TITLE_FIELD } from "../configuration/ConfigurationTitle";
import { QUOTE_TITLE_FIELD } from "../quote/QuoteTitle";

export const ItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
