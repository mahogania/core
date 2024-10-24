import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ENTITY_TITLE_FIELD } from "../entity/EntityTitle";

export const AssociationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Ascendant" source="entity.id" reference="Entity">
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Descendant"
          source="entity.id"
          reference="Entity"
        >
          <TextField source={ENTITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Description" source="description" />
        <TextField label="Display Name" source="displayName" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
