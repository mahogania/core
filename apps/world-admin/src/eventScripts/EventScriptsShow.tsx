import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EventScriptsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="command" source="command" />
        <TextField label="Comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dataint" source="dataint" />
        <TextField label="datalong" source="datalong" />
        <TextField label="datalong2" source="datalong2" />
        <TextField label="delay" source="delay" />
        <TextField label="ID" source="id" />
        <TextField label="o" source="o" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="x" source="x" />
        <TextField label="y" source="y" />
        <TextField label="z" source="z" />
      </SimpleShowLayout>
    </Show>
  );
};
