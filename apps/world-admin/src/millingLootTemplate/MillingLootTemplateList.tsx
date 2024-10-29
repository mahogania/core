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
import { LOOTTEMPLATE_TITLE_FIELD } from "../lootTemplate/LootTemplateTitle";

export const MillingLootTemplateList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MillingLootTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Loot Template"
          source="loottemplate.id"
          reference="LootTemplate"
        >
          <TextField source={LOOTTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
