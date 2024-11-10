import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CHOICELOCALE_TITLE_FIELD } from "../choiceLocale/ChoiceLocaleTitle";
import { RESPONSE_TITLE_FIELD } from "../response/ResponseTitle";

export const ChoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
