import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const CurrencyExchangeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <NumberInput label="exchange_rate" source="exchangeRate" />
        <BooleanInput label="for_buying" source="forBuying" />
        <BooleanInput label="for_selling" source="forSelling" />
        <TextInput label="from_currency" source="fromCurrency" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="to_currency" source="toCurrency" />
      </SimpleForm>
    </Create>
  );
};
