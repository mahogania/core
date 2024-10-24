import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BUNDLE_TITLE_FIELD } from "./BundleTitle";
import { STRENGTH_TITLE_FIELD } from "../strength/StrengthTitle";
import { WEAKNESS_TITLE_FIELD } from "../weakness/WeaknessTitle";
import { CONFIGURATION_TITLE_FIELD } from "../configuration/ConfigurationTitle";

export const BundleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Line Item Configuration"
          source="configuration.id"
          reference="Configuration"
        >
          <TextField source={CONFIGURATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Feature"
          target="bundleId"
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
