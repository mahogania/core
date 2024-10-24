import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BUNDLE_TITLE_FIELD } from "../bundle/BundleTitle";
import { STRENGTH_TITLE_FIELD } from "../strength/StrengthTitle";
import { WEAKNESS_TITLE_FIELD } from "../weakness/WeaknessTitle";

export const FeatureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Features"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
