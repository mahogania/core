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

import { ITEMTEMPLATE_TITLE_FIELD } from "./ItemTemplateTitle";
import { ITEMBEHAVIOUR_TITLE_FIELD } from "../itemBehaviour/ItemBehaviourTitle";
import { ITEMTEMPLATEADDON_TITLE_FIELD } from "../itemTemplateAddon/ItemTemplateAddonTitle";

export const ItemTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ItemRandomBonusListTemplate"
          target="itemTemplateId"
          label="ItemRandomBonusListTemplates"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Item Template"
              source="itemtemplate.id"
              reference="ItemTemplate"
            >
              <TextField source={ITEMTEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
