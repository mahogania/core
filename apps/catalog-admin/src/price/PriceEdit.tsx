import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CurrencyTitle } from "../currency/CurrencyTitle";
import { OptionTitle } from "../option/OptionTitle";

export const PriceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
