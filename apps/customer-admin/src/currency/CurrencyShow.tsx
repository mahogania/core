import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const CurrencyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creation" source="creation" />
        <TextField label="currency_name" source="currencyName" />
        <TextField label="docstatus" source="docstatus" />
        <BooleanField label="enabled" source="enabled" />
        <TextField label="fraction" source="fraction" />
        <TextField label="fraction_units" source="fractionUnits" />
        <TextField label="ID" source="id" />
        <TextField label="idx" source="idx" />
        <TextField label="modified" source="modified" />
        <TextField label="modified_by" source="modifiedBy" />
        <TextField label="name" source="name" />
        <TextField label="number_format" source="numberFormat" />
        <TextField label="owner" source="owner" />
        <TextField
          label="smallest_currency_fraction_value"
          source="smallestCurrencyFractionValue"
        />
        <TextField label="symbol" source="symbolField" />
        <BooleanField label="symbol_on_right" source="symbolOnRight" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
