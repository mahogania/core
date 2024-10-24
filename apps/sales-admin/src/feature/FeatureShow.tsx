import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";
import { FEATURE_TITLE_FIELD } from "./FeatureTitle";
import { PRICE_TITLE_FIELD } from "../price/PriceTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { BUNDLE_TITLE_FIELD } from "../bundle/BundleTitle";
import { STRENGTH_TITLE_FIELD } from "../strength/StrengthTitle";
import { WEAKNESS_TITLE_FIELD } from "../weakness/WeaknessTitle";

export const FeatureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Bundle" source="bundle.id" reference="Bundle">
          <TextField source={BUNDLE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Display Name" source="displayName" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Strength"
          source="strength.id"
          reference="Strength"
        >
          <TextField source={STRENGTH_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Weakness"
          source="weakness.id"
          reference="Weakness"
        >
          <TextField source={WEAKNESS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Option"
          target="featureId"
          label="Options"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Discount"
              source="discount.id"
              reference="Discount"
            >
              <TextField source={DISCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Feature"
              source="feature.id"
              reference="Feature"
            >
              <TextField source={FEATURE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Price" source="price.id" reference="Price">
              <TextField source={PRICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
