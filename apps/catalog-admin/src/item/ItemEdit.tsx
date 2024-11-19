import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ConfigurationTitle } from "../configuration/ConfigurationTitle";
import { QuoteTitle } from "../quote/QuoteTitle";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
