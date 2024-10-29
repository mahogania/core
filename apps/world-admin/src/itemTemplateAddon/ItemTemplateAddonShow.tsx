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

import { ITEMBEHAVIOUR_TITLE_FIELD } from "../itemBehaviour/ItemBehaviourTitle";
import { ITEMTEMPLATEADDON_TITLE_FIELD } from "./ItemTemplateAddonTitle";

export const ItemTemplateAddonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ItemTemplate"
          target="itemTemplateAddonsId"
          label="ItemTemplates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Item Behaviour"
              source="itembehaviour.id"
              reference="ItemBehaviour"
            >
              <TextField source={ITEMBEHAVIOUR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Item Template Addons"
              source="itemtemplateaddon.id"
              reference="ItemTemplateAddon"
            >
              <TextField source={ITEMTEMPLATEADDON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
