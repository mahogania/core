import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DISCOUNT_TITLE_FIELD } from "../discount/DiscountTitle";
import { FEATURE_TITLE_FIELD } from "../feature/FeatureTitle";
import { PRICE_TITLE_FIELD } from "../price/PriceTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Version" source="version" />
        <ReferenceManyField
          reference="Option"
          target="productId"
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
