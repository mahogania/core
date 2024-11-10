import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { OPTION_TITLE_FIELD } from "../option/OptionTitle";

export const ConstraintShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Depth" source="depth" />
        <ReferenceField
          label="Driven Option"
          source="option.id"
          reference="Option"
        >
          <TextField source={OPTION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Driving Option"
          source="option.id"
          reference="Option"
        >
          <TextField source={OPTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Kind" source="kind" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
