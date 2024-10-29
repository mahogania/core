import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { LOOTTEMPLATE_TITLE_FIELD } from "../lootTemplate/LootTemplateTitle";

export const MailLootTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Loot Template"
          source="loottemplate.id"
          reference="LootTemplate"
        >
          <TextField source={LOOTTEMPLATE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sender" source="sender" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
