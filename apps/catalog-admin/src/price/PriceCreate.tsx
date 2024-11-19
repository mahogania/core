import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CurrencyTitle } from "../currency/CurrencyTitle";
import { OptionTitle } from "../option/OptionTitle";

export const PriceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="currency.id"
          reference="Currency"
          label="Currency"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <ReferenceInput source="options.id" reference="Option" label="Options">
          <SelectInput optionText={OptionTitle} />
        </ReferenceInput>
        <TextInput label="Price Rule Url" source="priceRuleUrl" />
      </SimpleForm>
    </Create>
  );
};
