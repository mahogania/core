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

import { CHOICELOCALE_TITLE_FIELD } from "./ChoiceLocaleTitle";
import { RESPONSE_TITLE_FIELD } from "../response/ResponseTitle";

export const ChoiceLocaleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Choice"
          target="choiceLocalesId"
          label="Choices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Choice Locales"
              source="choicelocale.id"
              reference="ChoiceLocale"
            >
              <TextField source={CHOICELOCALE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Responses"
              source="response.id"
              reference="Response"
            >
              <TextField source={RESPONSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
