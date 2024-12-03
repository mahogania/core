import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ITEMBEHAVIOUR_TITLE_FIELD } from "../itemBehaviour/ItemBehaviourTitle";
import { ITEMTEMPLATEADDON_TITLE_FIELD } from "../itemTemplateAddon/ItemTemplateAddonTitle";

export const ItemTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ItemTemplates"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
