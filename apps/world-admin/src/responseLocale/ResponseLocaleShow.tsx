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

import { CHOICE_TITLE_FIELD } from "../choice/ChoiceTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { RESPONSELOCALE_TITLE_FIELD } from "./ResponseLocaleTitle";

export const ResponseLocaleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Response"
          target="responseLocalesId"
          label="Responses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Choice"
              source="choice.id"
              reference="Choice"
            >
              <TextField source={CHOICE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Response Locales"
              source="responselocale.id"
              reference="ResponseLocale"
            >
              <TextField source={RESPONSELOCALE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
