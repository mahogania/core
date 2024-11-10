import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const CurrencyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creation" source="creation" />
        <TextInput label="currency_name" source="currencyName" />
        <NumberInput step={1} label="docstatus" source="docstatus" />
        <BooleanInput label="enabled" source="enabled" />
        <TextInput label="fraction" source="fraction" />
        <NumberInput step={1} label="fraction_units" source="fractionUnits" />
        <NumberInput step={1} label="idx" source="idx" />
        <DateTimeInput label="modified" source="modified" />
        <TextInput label="modified_by" source="modifiedBy" />
        <TextInput label="name" source="name" />
        <TextInput label="number_format" source="numberFormat" />
        <TextInput label="owner" source="owner" />
        <NumberInput
          label="smallest_currency_fraction_value"
          source="smallestCurrencyFractionValue"
        />
        <TextInput label="symbol" source="symbolField" />
        <BooleanInput label="symbol_on_right" source="symbolOnRight" />
      </SimpleForm>
    </Edit>
  );
};
