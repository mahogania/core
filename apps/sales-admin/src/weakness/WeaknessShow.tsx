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

import { BUNDLE_TITLE_FIELD } from "../bundle/BundleTitle";
import { STRENGTH_TITLE_FIELD } from "../strength/StrengthTitle";
import { WEAKNESS_TITLE_FIELD } from "./WeaknessTitle";
import { BUSINESS_TITLE_FIELD } from "../business/BusinessTitle";

export const WeaknessShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Competitor"
          source="business.id"
          reference="Business"
        >
          <TextField source={BUSINESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Feature"
          target="weaknessId"
          label="Features"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Bundle"
              source="bundle.id"
              reference="Bundle"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
