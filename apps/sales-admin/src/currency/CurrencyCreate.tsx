import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { DiscountTitle } from "../discount/DiscountTitle";
import { PriceTitle } from "../price/PriceTitle";

export const CurrencyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="discounts" reference="Discount">
          <SelectArrayInput
            optionText={DiscountTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Precision" source="precision" />
        <ReferenceArrayInput source="prices" reference="Price">
          <SelectArrayInput
            optionText={PriceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Symbol" source="symbolField" />
      </SimpleForm>
    </Create>
  );
};
