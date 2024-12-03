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
import { ITEMTEMPLATE_TITLE_FIELD } from "../itemTemplate/ItemTemplateTitle";

export const ItemRandomBonusListTemplateList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ItemRandomBonusListTemplates"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
