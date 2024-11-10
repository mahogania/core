import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DiscountTitle } from "../discount/DiscountTitle";
import { FeatureTitle } from "../feature/FeatureTitle";
import { PriceTitle } from "../price/PriceTitle";
import { ProductTitle } from "../product/ProductTitle";

export const OptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="discount.id"
          reference="Discount"
          label="Discount"
        >
          <SelectInput optionText={DiscountTitle} />
        </ReferenceInput>
        <ReferenceInput source="feature.id" reference="Feature" label="Feature">
          <SelectInput optionText={FeatureTitle} />
        </ReferenceInput>
        <ReferenceInput source="price.id" reference="Price" label="Price">
          <SelectInput optionText={PriceTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
