import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CommandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="help" multiline source="help" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
