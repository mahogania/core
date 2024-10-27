import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const GameWeatherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Chance" source="chance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Kind" source="kind" />
        <TextField label="Script" source="script" />
        <TextField label="Season" source="season" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zone" source="zone" />
      </SimpleShowLayout>
    </Show>
  );
};
