import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { OPTION_TITLE_FIELD } from "../option/OptionTitle";

export const ConstraintShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Ascendant Product"
          source="product.id"
          reference="Product"
        >
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Depth" source="depth" />
        <ReferenceField
          label="Descendant Product"
          source="product.id"
          reference="Product"
        >
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Kind" source="kind" />
        <ReferenceField label="Option" source="option.id" reference="Option">
          <TextField source={OPTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
