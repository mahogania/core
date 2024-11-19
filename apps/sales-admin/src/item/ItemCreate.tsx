import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ConfigurationTitle } from "../configuration/ConfigurationTitle";
import { QuoteTitle } from "../quote/QuoteTitle";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="configuration.id"
          reference="Configuration"
          label="Configuration"
        >
          <SelectInput optionText={ConfigurationTitle} />
        </ReferenceInput>
        <ReferenceInput source="quote.id" reference="Quote" label="Quote">
          <SelectInput optionText={QuoteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
