import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DiscountTitle } from "../discount/DiscountTitle";
import { ConstraintTitle } from "../constraint/ConstraintTitle";
import { FeatureTitle } from "../feature/FeatureTitle";
import { PriceTitle } from "../price/PriceTitle";
import { ProductTitle } from "../product/ProductTitle";

export const OptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="discount.id"
          reference="Discount"
          label="Discount"
        >
          <SelectInput optionText={DiscountTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="drivingConstraints.id"
          reference="Constraint"
          label="driving constraints"
        >
          <SelectInput optionText={ConstraintTitle} />
        </ReferenceInput>
        <ReferenceInput source="feature.id" reference="Feature" label="Feature">
          <SelectInput optionText={FeatureTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="leadingConstraints.id"
          reference="Constraint"
          label="Leading Constraints"
        >
          <SelectInput optionText={ConstraintTitle} />
        </ReferenceInput>
        <ReferenceInput source="price.id" reference="Price" label="Price">
          <SelectInput optionText={PriceTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
